import Axios from "axios";
import React from "react"
import Datepicker from 'react-datepicker'
import moment from 'moment'
import { Card } from "react-bootstrap";
import { order } from '../datasets'
import { useRouter } from "next/router";
import { MultiSelect } from '@progress/kendo-react-dropdowns'
import { filterBy } from '@progress/kendo-data-query'
function CustomDownloads() {
    const router = useRouter()
    // STATE -----------------------------------------------------
    const [datasetVariables, setDatasetVariables] = React.useState({})
    const [datasets, setDatasets] = React.useState({})
    // TODO: Update default state to use actual list
    const [stateFips, setStateFips] = React.useState([])
    const [filteredStateFips, setFiltered] = React.useState([])

    const reducer = (state, action) => {

        switch (action.type) {
            case 'select-dataset':
                const newSelectedVariables = {}
                if (!state.selectedDatasets[action.dataset] && datasetVariables[action.dataset]) {

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
        })
        Axios.get("https://api.covidcountydata.org/variable_names").then(resp => {
            const datasetVariables = {}
            resp.data.forEach(d => {
                datasetVariables[d.name] = d.variables
            });
            setDatasetVariables(datasetVariables)
            dispatch({ type: 'select-dataset', dataset: 'covid_us' })
        })

        Promise.all([Axios.get("https://api.covidcountydata.org/us_counties"), Axios.get("https://api.covidcountydata.org/us_states")]).then(resp => {
            console.debug("counties resp: ", resp)


            const sf = [...resp[0].data, ...resp[1].data].map(county => {
                if (county.county_name) {

                    return JSON.stringify({ // turn into string to facilitate removing duplicates
                        label: `${county.county_name}, ${county.state_name} (${county.location})`,
                        value: county.location
                    })
                } else {
                    return JSON.stringify({
                        label: `${county.name}, Statewide (${county.location})`
                    })
                }
            })
                .filter((value, index, self) => { // Remove duplicates
                    return self.indexOf(value) === index;
                })
                .map(val => JSON.parse(val)) // Convert back to object
                .sort((a, b) => a.label > b.label) // Sort alphabetically
            console.log("sf", sf)
            setStateFips(sf)
            setFiltered(sf)
        })
    }, [])

    const downloadData = () => {
        console.log(state)
        // Make api request for each dataset
        const start = state.filters.startDate ? moment(state.filters.startDate).format("YYYY-MM-DD") : null
        const end = state.filters.endDate ? moment(state.filters.endDate).format("YYYY-MM-DD") : null
        // const queryParams = {
        //     variable: variablesToReq.length ? `in.(${variablesToReq.join(',')})` : "",
        //     dt: (start || end) ? `${start ? "gt." + start : ""}` + ((start && end) ? "&" : "") + `${end ? 'lt.' + end : ""}` : null,
        //     fips: `in.(${state.fipsCodes.map(fips => fips.value).join(',')})`
        // }
        // const query = qs.stringify(queryParams)

        // Axios.get(`https://api.covidcountydata.org/${datasetName}?${query}`).then(resp => {
        //     downloadDataBlob(resp.data, "data.json")
        // }).catch(err => {
        //     console.error(err)
        // })
        // TODO: Get apikey out of local storage
        var reqParams = {
            parameters: {}
        }

        Object.keys(state.selectedDatasets).forEach(dataset => {
            if (state.selectedDatasets[dataset] && datasets) {
                const vars = []
                Object.keys(state.selectedVariables[dataset]).forEach(varName => {
                    if (state.selectedVariables[dataset][varName]) {
                        vars.push(varName)
                    }
                })
                // Build parameters for dataset
                const params = {
                    variable: vars,
                    location: state.fipsCodes,
                    dt: start ? (end ? `${start}>=${end}` : `>=${start}`) : `<=${end}`
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

        console.log(reqParams)

        Axios.post("https://api.covidcountydata.org/apiclient", reqParams).then(resp => {
            downloadDataBlob(resp.data)
        })
    }

    const onSelectChange = (ev) => {
        console.log("on select change: ", ev)
        const fipsCodes = ev.value.map(val => {
            console.log("val: ", val)
            return val.label.match(/\(([^)]+)\)/)[1]
        })

        dispatch({
            type: "select-fips",
            selected: fipsCodes
        })
    }
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
                console.log("Timeout exceeded")
                URL.revokeObjectURL(data)
                a.removeEventListener("click", clickHandler)
            }, 150)
        }

        a.addEventListener("click", clickHandler, false)
        a.click()
    }

    const onFilterChange = (event) => {
        clearTimeout(timeout);
        const timeout = setTimeout(() => {
            setFiltered(filterBy(stateFips.slice(), event.filter))

        }, 500);

    }
    // RENDER ---------------------------------------------------------------------
    return (
        <React.Fragment>

            {datasets && datasets !== {} &&
                <div className="custom-downloads container" id="customize-downloads">
                    <h2>Customize data downloads</h2>
                    <ol>
                        <li>
                            <span>
                                Choose dataset(s)
                        </span>
                            <div className="row">
                                {order.map((dataset, k) => {
                                    if (datasets[dataset]) {

                                        return (
                                            <Card
                                                key={k}
                                                className={
                                                    state.selectedDatasets[dataset]
                                                        ? "col-12 col-md-2 dataset selected"
                                                        : "col-10 col-md-2 dataset"}
                                                onClick={() => {
                                                    dispatch({ type: 'select-dataset', dataset })
                                                }}>

                                                <Card.Body>
                                                    {datasets[dataset].name}
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
                        <li>
                            <span>
                                Choose variable(s)
                        </span>

                            {Object.keys(state.selectedDatasets).map((datasetName, k) => {
                                if (state.selectedDatasets[datasetName] && datasets[datasetName]) {
                                    if (datasetVariables[datasetName]) {


                                        const variables = datasetVariables[datasetName] ?? datasets[datasetName].properties
                                        return (
                                            <div className="variable-selection" key={k}>
                                                <span>Variables for <em>{datasets[datasetName].name}</em></span>
                                                <div className="variable-list row">
                                                    {Object.keys(variables).map((prop, i) => {
                                                        const variable = datasetVariables[datasetName] ? datasetVariables[datasetName][prop] : Object.keys(datasets[datasetName].properties)[i]
                                                        return <div
                                                            key={i}
                                                            className={(
                                                                state.selectedVariables[datasetName]
                                                                && state.selectedVariables[datasetName][variable])
                                                                ? "selected col-auto"
                                                                : "col-auto"}
                                                            onClick={() => {
                                                                dispatch({ type: "select-variable", dataset: datasetName, variable })
                                                            }}>
                                                            {variable}
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
                                            <div className="variable-selection">
                                                <div>No variable filters are available for <em>{datasets[datasetName].name}</em>. All variables available will be included in the download</div>
                                            </div>
                                        )
                                    }
                                }
                            })}
                        </li>
                        <li>
                            <span>Choose filter(s)</span>
                            <div className="add-filter">
                                Add filter
                            </div>
                            {/** TODO: List possible filters*/}
                            <form className="filter">
                                <DateFilter
                                    className="row"
                                    onChange={(date) => {
                                        dispatch({ type: 'set-start-date', date })
                                    }} title="Start date:" selected={state.filters.startDate} />
                                <DateFilter
                                    className="row"
                                    onChange={(date) => {
                                        dispatch({ type: 'set-end-date', date })
                                    }} title="End date:" selected={state.filters.endDate} />

                                <div className="row">
                                    <span className='col-12 col-md-2'>Location(s)</span>
                                    {/* <Select
                                        multi={true}
                                        value={state.fipsCodes}
                                        className="react-select"
                                        options={stateFips}
                                        onChange={(selected) => {
                                            dispatch({
                                                type: "select-fips",
                                                selected
                                            })
                                        }} /> */}
                                    <MultiSelect
                                        onChange={onSelectChange}
                                        className="react-select"
                                        data={filteredStateFips}
                                        filterable={true}
                                        onFilterChange={onFilterChange}
                                        textField={'label'}
                                        dataItemKey={'value'} />
                                </div>
                            </form>
                        </li>
                        <li>
                            <span>Download</span>
                            <div>

                                <button onClick={downloadData} className="btn btn-primary">Download data</button>
                            </div>
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
            <span className='col-12 col-md-2'>{props.title}</span>
            <Datepicker onChange={props.onChange}
                selected={props.selected}
            />
        </div>
    )
}
export default CustomDownloads