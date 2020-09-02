import Axios from "axios";
import React from "react"
import Datepicker from 'react-datepicker'
import Select from 'react-select'
import qs from 'query-string'
import moment from 'moment'

function CustomDownloads() {
    // STATE -----------------------------------------------------
    const [datasetVariables, setDatasetVariables] = React.useState({})
    const [datasets, setDatasets] = React.useState({})
    // TODO: Update default state to use actual list
    const [stateFips, setStateFips] = React.useState([])

    const reducer = (state, action) => {
        console.debug("Reducing: ", action, state)

        switch (action.type) {
            case 'select-dataset':
                const newState = {
                    ...state,
                    selectedDatasets: {
                        ...state.selectedDatasets,
                        [action.dataset]: !state.selectedDatasets[action.dataset]
                    },
                    selectedVariables: {
                        ...state.selectedVariables,
                        [action.dataset]: {}
                    }
                }
                console.debug("new state: ", newState)
                return newState
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

                console.debug("new state: ", newVariableState)
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
        })
        Axios.get("https://api.covidcountydata.org/us_states").then(resp => {
            setStateFips(resp.data.map(state => {
                return JSON.stringify({ // turn into string to facilitate removing duplicates
                    label: state.name,
                    value: state.location
                })
            })
                .filter((value, index, self) => { // Remove duplicates
                    return self.indexOf(value) === index;
                })
                .map(val => JSON.parse(val)) // Convert back to object
                .sort((a, b) => a.label > b.label) // Sort alphabetically
            )

        })
    }, [])

    const downloadData = () => {
        console.log(state)
        // TODO: Make requests and compile data

        // Make api request for each dataset
        Object.keys(state.selectedDatasets).forEach(datasetName => {
            const variablesToReq = Object.keys(state.selectedVariables[datasetName]).map(key => {
                if (state.selectedVariables[datasetName][key]) {
                    return key
                }
            })
            const start = moment(state.filters.startDate).format("YYYY-MM-DD")
            const end = moment(state.filters.endDate).format("YYYY-MM-DD")

            const queryParams = {
                variable: variablesToReq.length ? `in.(${variablesToReq.join(',')})` : "",
                dt: `${start ? "gt." + start : ""}` + ((start && end) ? "&" : "") + `${end ? 'lt.' + end : ""}`,
                fips: `in.(${state.fipsCodes.map(fips => fips.value).join(',')})`
            }

            const query = qs.stringify(queryParams)
            console.log(`Making request to: https://covidcountydata.org/${datasetName}?${query}`)
            Axios.get(`https://covidcountydata.org/${datasetName}?${query}`).then(resp => {
                console.log(resp)
            }).catch(err => {
                console.error(err)
            })
        })
    }
    // RENDER ---------------------------------------------------------------------
    return (
        <React.Fragment>

            {datasets && datasets !== {} &&
                <div className="custom-downloads container">
                    <h2>Custom Data Downloads</h2>
                    <ol>
                        <li>
                            <span>
                                Choose dataset(s)
                        </span>
                            <div className="row">
                                {Object.keys(datasets).map((dataset, k) => {

                                    return (
                                        <div
                                            key={k}
                                            className={
                                                state.selectedDatasets[dataset]
                                                    ? "col-12 col-md-2 dataset selected"
                                                    : "col-10 col-md-2 dataset"}
                                            onClick={() => {
                                                dispatch({ type: 'select-dataset', dataset })
                                            }}>
                                            <p>
                                                {datasets[dataset].name}
                                            </p>
                                        </div>
                                    )
                                })}

                            </div>
                        </li>
                        <li>
                            <span>
                                Choose variable(s)
                        </span>

                            {Object.keys(state.selectedDatasets).map((datasetName, k) => {
                                if (state.selectedDatasets[datasetName]) {
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

                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </li>
                        <li>
                            <span>Choose filter(s)</span>
                            {/** TODO: List possible filters*/}
                            <form className="filter">
                                <div className='row'>
                                    <span className='col-12 col-md-2'>Start date:</span>
                                    <Datepicker onChange={(date) => {
                                        dispatch({ type: 'set-start-date', date })
                                    }}
                                        selected={state.filters.startDate}
                                    />
                                </div>
                                <div className='row'>
                                    <span className='col-12 col-md-2'>End date:</span>
                                    <Datepicker onChange={(date) => {
                                        dispatch({ type: 'set-end-date', date })
                                    }}
                                        selected={state.filters.endDate}
                                    />
                                </div>
                                <div className="row">
                                    <span className='col-12 col-md-2'>FIPS Code(s)</span>
                                    <Select
                                        isMulti={true}
                                        value={state.fipsCodes}
                                        className="react-select"
                                        options={stateFips}
                                        onChange={(selected) => {
                                            dispatch({
                                                type: "select-fips",
                                                selected
                                            })
                                        }} />
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
export default CustomDownloads