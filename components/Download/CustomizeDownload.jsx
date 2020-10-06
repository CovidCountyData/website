import Axios from "axios";
import React from "react"
import Datepicker from 'react-datepicker'
import moment from 'moment'
import { Card } from "react-bootstrap";
import { order } from '../datasets'
// import { MultiSelect } from '@progress/kendo-react-dropdowns'
import { FiX, FiPlus } from 'react-icons/fi'
import Dropdown from 'react-bootstrap/Dropdown'
import { toast } from 'react-toastify'
import TreeSelect from "./TreeSelect";
function CustomDownloads() {
    const state_only_datasets = [
        "nytimes_covid",
        "covidtrackingproject",
        "economics",
        "hhs",
        "us_states"

    ]
    const [selectedLevel, setSelectedLevel] = React.useState("county")
    // STATE -----------------------------------------------------
    const [datasetVariables, setDatasetVariables] = React.useState({})
    const [datasets, setDatasets] = React.useState({})
    // TODO: Update default state to use actual list
    const [stateFips, setStateFips] = React.useState({})
    const [showDateFilter, setShowDateFilter] = React.useState(false)
    const [showLocationFilter, setShowLocationFilter] = React.useState(false)
    const [downloadingData, setDownloadingData] = React.useState(false)
    const [downloadError, setDownloadError] = React.useState(false)
    const reducer = (state, action) => {

        switch (action.type) {
            case 'select-dataset':
                const newSelectedVariables = {}
                if (!state.selectedDatasets[action.dataset] && datasetVariables[action.dataset]) {
                    // Select all variables in dataset by default
                    datasetVariables[action.dataset].forEach(variable => {
                        newSelectedVariables[variable] = true
                    })
                }

                const newState = {
                    ...state,
                    selectedDatasets: {
                        ...state.selectedDatasets,
                        [action.dataset]: !state.selectedDatasets[action.dataset]
                    },
                    selectedVariables: {
                        ...state.selectedVariables,
                        [action.dataset]: newSelectedVariables
                    }
                }
                return newState
            case "clear-datasets":
                return {
                    ...state,
                    selectedDatasets: {},
                    selectedVariables: {},

                }

            case 'restore-all':
                const vars = {}
                datasetVariables[action.dataset].forEach(variable => {
                    vars[variable] = true
                })

                return {
                    ...state,
                    selectedVariables: {
                        ...state.selectedVariables,
                        [action.dataset]: vars
                    }
                }
            case 'clear-all':


                return {
                    ...state,
                    selectedVariables: {
                        ...state.selectedVariables,
                        [action.dataset]: {}
                    }
                }
            case 'select-variable':
                const newVariableState = {
                    ...state,
                    selectedVariables: {
                        ...state.selectedVariables,
                        [action.dataset]: {
                            ...state.selectedVariables[action.dataset],
                            [action.variable]: !state.selectedVariables[action.dataset][action.variable]
                        }
                    }
                }

                return newVariableState

            case 'set-start-date':
                const newSDate = {
                    ...state,
                    filters: {
                        ...state.filters,
                        startDate: action.date
                    }
                }
                return newSDate
            case 'set-end-date':
                const newEDate = {
                    ...state,
                    filters: {
                        ...state.filters,
                        endDate: action.date
                    }
                }
                return newEDate
            case 'select-fips':
                return {
                    ...state,
                    fipsCodes: action.selected
                }
            default:
                return state
        }
    }

    const [state, dispatch] = React.useReducer(reducer, {
        selectedVariables: {},
        selectedDatasets: {},
        filters: {},
        fipsCodes: []
    })

    // EFFECTS -------------------------------------------------------------
    React.useEffect(() => {

        Axios.get("https://clean-swagger-inunbrtacq-uk.a.run.app").then(resp => {

            setDatasets(resp.data.definitions)
        }).catch(err => {
            toast.error("Error requesting available datasets")
        })
        Axios.get("https://api.covidcountydata.org/variable_names").then(resp => {
            const datasetVariables = {}
            resp.data.forEach(d => {
                datasetVariables[d.name] = d.variables.sort((a, b) => a > b ? 1 : -1)
            });
            setDatasetVariables(datasetVariables)
            dispatch({ type: 'select-dataset', dataset: 'covid_us' })
        }).catch(err => {
            toast.error("Error requesting available variables for datsests")
        })

        Promise.all([Axios.get("https://api.covidcountydata.org/us_counties"), Axios.get("https://api.covidcountydata.org/us_states")]).then(resp => {
            const data = {}
            resp[0].data.forEach(county => {
                if (data[county.state_name]) {
                    data[county.state_name].children.push(
                        JSON.stringify({
                            label: `${county.county_name}, ${county.state_name}, ${county.location}`,
                            value: county.location
                        }))
                } else {
                    data[county.state_name] = {
                        label: county.state_name,
                        value: data[county.state_name],
                        children: [
                            JSON.stringify({
                                label: `${county.county_name}, ${county.state_name}, ${county.location}`,
                                value: county.location
                            })
                        ]
                    }
                }

            })
            Object.keys(data).forEach(statename => {

                data[statename].children = data[statename].children.filter((value, index, self) => { // Remove duplicates
                    return self.indexOf(value) === index;
                })
                    .map(val => JSON.parse(val)) // Convert back to object
                    .sort((a, b) => a.label > b.label ? 1 : -1) // Sort alphabetically


            })

            const orderedStates = Object.keys(data).map(statename => {
                return {
                    label: statename,
                    value: data[statename].children.map(child => child.value),
                    children: data[statename].children
                }
            }).sort((a, b) => a.label > b.label ? 1 : -1)
            setStateFips(orderedStates)
        })
    }, [])

    const downloadData = () => {
        setDownloadingData(true)
        setDownloadError(false)
        const start = state.filters.startDate ? moment(state.filters.startDate).format("YYYY-MM-DD") : null
        const end = state.filters.endDate ? moment(state.filters.endDate).format("YYYY-MM-DD") : null

        // TODO: Get apikey out of local storage
        var reqParams = {
            parameters: {}
        }

        Object.keys(state.selectedDatasets).forEach(dataset => {
            if (state.selectedDatasets[dataset]
                && datasets
            ) {
                const vars = []
                Object.keys(state.selectedVariables[dataset]).forEach(varName => {
                    if (state.selectedVariables[dataset][varName]) {
                        vars.push(varName)
                    }
                })
                // Don't add if no vars are selected
                if (!vars.length) {
                    return
                }
                // Build parameters for dataset
                const params = {
                    variable: vars,
                }


                console.debug(datasets, dataset)
                if ((start || end) && "dt" in datasets[dataset].properties) {
                    // params['dt'] = start ? (end ? `>=${start}&<=${end}` : `>=${start}`) : `<=${end}`
                    params['dt'] = {}
                    if (start) {
                        params['dt']['start'] = start
                    }
                    if (end) {
                        params['dt']['end'] = end
                    }
                }
                if (state.fipsCodes.length && "location" in datasets[dataset].properties) {
                    // The economics dataset only has state level data
                    if (dataset === "economics" || selectedLevel === "state") {
                        params['location'] = Array.from(new Set(state.fipsCodes.map(code => {
                            const str = `${code}`
                            return parseInt(str.substring(0, str.length - 3))
                        })))
                    } else {
                        params['location'] = state.fipsCodes
                    }
                } else if (state.fipsCodes.length && "fips" in datasets[dataset].properties) {
                    if (dataset === "economics" || selectedLevel === "state") {
                        params['fips'] = Array.from(new Set(state.fipsCodes.map(code => {
                            const str = `${code}`
                            return parseInt(str.substring(0, str.length - 3))
                        })))
                    } else {
                        params['fips'] = state.fipsCodes
                    }
                }

                reqParams = {
                    ...reqParams,
                    parameters: {
                        ...reqParams.parameters,
                        [dataset]: params
                    }
                }
            }
        })

        console.debug("Requesting with parameters: ", reqParams)
        toast("Downloading data...")
        Axios.post("https://api.covidcountydata.org/apiclient", reqParams).then(resp => {
            downloadDataBlob(resp.data)
            toast.success("Done!")
            setDownloadingData(false)
            setDownloadError(false)
        }).catch(err => {
            setDownloadingData(false)
            setDownloadError(true)
            toast.error("An error occurred downloading the data!")
        })
    }

    // Downloads csv to filename on the users machine
    const downloadDataBlob = (csv, filename) => {
        // Create binary data url
        const blob = new Blob([csv], { type: "text/csv" })
        const data = URL.createObjectURL(blob)
        // Download data
        const a = document.createElement('a')
        a.href = data
        a.download = filename || 'data.csv'
        const clickHandler = () => {
            setTimeout(() => {
                URL.revokeObjectURL(data)
                a.removeEventListener("click", clickHandler)
            }, 150)
        }

        a.addEventListener("click", clickHandler, false)
        a.click()
    }

    const onFipsChange = (currentNode, selectedNodes) => {
        const flatLocations = Array.from(new Set(selectedNodes.map(node => node.value))).flat()
        dispatch({
            type: "select-fips",
            selected: flatLocations
        })

    }
    // RENDER ---------------------------------------------------------------------
    // Prepare tree data with selected nodes
    const selectedDatasets = []
    Object.keys(state.selectedDatasets).forEach(dname => {
        if (state.selectedDatasets[dname]) {
            selectedDatasets.push(dname)
        }
    })
    console.log("selectedDatasets: ", selectedDatasets)
    return (

        <React.Fragment>
            {datasets && datasets !== {} &&
                <div className="custom-downloads container">
                    <div id="customize-downloads" className="hyperlink-anchor" />
                    <h2>Customize data downloads</h2>
                    <ol>
                        <li className="step">
                            <span>
                                Choose dataset(s)
                        </span>
                            <div className="row level-select">
                                <span
                                    className={`col ${selectedLevel === "county" ? 'selected' : ""}`}
                                    onClick={(ev) => {
                                        setSelectedLevel("county")
                                        dispatch({ type: "clear-datasets" })

                                    }}
                                >
                                    County Level Data
                                </span>
                                <span
                                    className={`col ${selectedLevel === "state" ? 'selected' : ""}`}
                                    onClick={(ev) => {
                                        setSelectedLevel('state')
                                        dispatch({ type: "clear-datasets" })
                                    }}
                                >
                                    State Level Data
                                </span>
                            </div>
                            <div className="row">

                                {order.map((dataset, k) => {
                                    const shouldRender = datasets[dataset] && ((selectedLevel === "county" && !state_only_datasets.includes(dataset)) || selectedLevel === "state")
                                    if (shouldRender) {

                                        return (
                                            <Card
                                                key={k}
                                                className={
                                                    state.selectedDatasets[dataset]
                                                        ? "col-10 col-md-2 dataset selected"
                                                        : "col-10 col-md-2 dataset"}
                                                onClick={() => {
                                                    dispatch({ type: 'select-dataset', dataset })
                                                }}>

                                                <Card.Body>
                                                    <span>
                                                        {datasets[dataset].name}
                                                    </span>
                                                    <a href={`/data/documentation#${dataset}`} target="_blank" onClick={(ev) => {
                                                        ev.stopPropagation()
                                                    }}>
                                                        <i className="pe-7s-next-2" />
                                                    </a>
                                                </Card.Body>
                                            </Card>
                                        )
                                    }
                                })}

                            </div>
                        </li>
                        <li className="step">
                            <span>
                                Choose variable(s)
                                <br />
                                <em style={{ fontSize: "10pt" }}>Note: not all variables will be available for all locations</em>
                            </span>

                            {Object.keys(state.selectedDatasets).map((datasetName, k) => {
                                if (state.selectedDatasets[datasetName] && datasets[datasetName]) {
                                    if (datasetVariables[datasetName]) {


                                        const variables = datasetVariables[datasetName] ?? datasets[datasetName].properties
                                        return (
                                            <div className="variable-selection" key={k}>
                                                <span>Variables for <em>{datasets[datasetName].name}</em></span>
                                                {/* {datasetName === "economics" &&
                                                    <div className="warning">Only state level data is available for this dataset!</div>
                                                } */}
                                                <div className="variable-list row">
                                                    {variables.sort((a, b) => a > b).map((variable, i) => {
                                                        const selected = state.selectedVariables[datasetName] && state.selectedVariables[datasetName][variable]
                                                        return <div
                                                            key={i}
                                                            className={
                                                                selected
                                                                    ? "selected col-auto"
                                                                    : "col-auto"}
                                                            onClick={() => {
                                                                dispatch({ type: "select-variable", dataset: datasetName, variable })
                                                            }}>
                                                            {variable}
                                                            <span style={{ marginLeft: "10px" }}>

                                                                {selected
                                                                    ? (<FiX />)
                                                                    : (<FiPlus />)}
                                                            </span>
                                                        </div>
                                                    })}
                                                    <div className="restore" onClick={() => {
                                                        dispatch({ type: 'restore-all', dataset: datasetName })
                                                    }}>
                                                        Restore all
                                                </div>
                                                    <div className="restore" onClick={() => {
                                                        dispatch({ type: 'clear-all', dataset: datasetName })
                                                    }}>
                                                        Clear all
                                                </div>
                                                </div>

                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="variable-selection" key={k}>
                                                <div>No variable filters are available for <em>{datasets[datasetName].name}</em>. All variables available will be included in the download</div>
                                            </div>
                                        )
                                    }
                                }
                            })}
                        </li>
                        <li className="step">
                            <span>Choose filter(s)</span>
                            {/** TODO: List possible filters*/}
                            <form className="filter">
                                <Dropdown>
                                    <Dropdown.Toggle disabled={showLocationFilter && showDateFilter}>
                                        Add filter
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>

                                        {!showDateFilter && (
                                            <Dropdown.Item onClick={() => { setShowDateFilter(true) }}>
                                                Date
                                            </Dropdown.Item>
                                        )}
                                        {!showLocationFilter && (
                                            <Dropdown.Item onClick={() => { setShowLocationFilter(true) }}>
                                                Location
                                            </Dropdown.Item>
                                        )}

                                    </Dropdown.Menu>
                                </Dropdown>
                                {showDateFilter && (
                                    <div className="row">
                                        <div className='col-12'>
                                            <div className="row">


                                                <DateFilter
                                                    className="datefilter col-md-5 col-12"
                                                    onChange={(date) => {
                                                        dispatch({ type: 'set-start-date', date })
                                                    }} title="Start date" selected={state.filters.startDate}

                                                />

                                                <DateFilter
                                                    className="datefilter col-md-5 col-12"

                                                    onChange={(date) => {
                                                        dispatch({ type: 'set-end-date', date })
                                                    }} title="End date" selected={state.filters.endDate}

                                                />
                                                <FiX className=" close-icon" size={25} style={{ marginLeft: "15px" }} onClick={() => {
                                                    setShowDateFilter(false)
                                                    dispatch({ type: 'set-start-date', date: null })
                                                    dispatch({ type: 'set-end-date', date: null })

                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                                {showLocationFilter &&
                                    <div className="row">
                                        <span className='col-12 col-md-2'>Location(s)</span>

                                        <TreeSelect
                                            data={stateFips}
                                            onChange={onFipsChange}
                                            placeholder="Search Counties, State, FIPS"
                                        />

                                        <FiX className="close-icon" onClick={() => {
                                            setShowLocationFilter(false)
                                            dispatch({
                                                type: "select-fips",
                                                selected: []
                                            })
                                        }} size={25} style={{ marginLeft: "15px" }} />
                                    </div>
                                }
                            </form>
                        </li>
                        <li className="step">
                            <span>Download</span>
                            <div>
                                {/* {
                                    (selectedDatasets.includes("economics") && selectedDatasets.length > 1) &&
                                    <div className="warning">
                                        The <em>economics</em> dataset only contains state level data and cannot be combined with other datsests. Please either remove the <em>economics</em> dataset, or all other datasets from selection.
                                    </div>
                                } */}
                                <button onClick={downloadData} className="btn btn-primary">Download data</button>
                            </div>
                            {downloadingData &&
                                <div>
                                    Downloading data...
                                </div>
                            }
                            {downloadError &&
                                <div className="error">
                                    An error occurred downloading the data! Expand the filters and try again.
                                </div>
                            }
                        </li>
                    </ol>
                </div>
            }

        </React.Fragment >

    )
}

const DateFilter = (props) => {

    return (
        <div className={props.className}>

            <span >{props.title} </span>
            <Datepicker onChange={props.onChange}
                selected={props.selected}
            />
        </div >
    )
}
export default CustomDownloads