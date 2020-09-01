import Axios from "axios";
import React, { useEffect } from "react"
import Datepicker from 'react-datepicker'
function CustomDownloads() {
    // STATE -----------------------------------------------------
    const [datasetVariables, setDatasetVariables] = React.useState({})
    const [datasets, setDatasets] = React.useState({})

    const reducer = (state, action) => {
        console.log("Reducing: ", action, state)

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
                console.log("new state: ", newState)
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

                console.log("new state: ", newVariableState)
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
            default:
                return state
        }
    }

    const [state, dispatch] = React.useReducer(reducer, {
        selectedVariables: {},
        selectedDatasets: {},
        filters: {}
    })

    // EFFECTS -------------------------------------------------------------
    React.useEffect(() => {

        Axios.get("https://clean-swagger-inunbrtacq-uk.a.run.app").then(resp => {
            console.log("swagger:", resp.data)
            setDatasets(resp.data.definitions)
        })
        Axios.get("https://api.covidcountydata.org/variable_names").then(resp => {
            const datasetVariables = {}
            resp.data.forEach(d => {
                datasetVariables[d.name] = d.variables
            });
            setDatasetVariables(datasetVariables)
        })
    }, [])

    // CALLBACKS --------------------------------------------------------------
    const onDatasetClick = (selectedDataset) => {
        console.debug("Selected ", selectedDataset, datasetVariables, selected)
        // toggle selection of dataset
        setNewSelected({
            ...selected,
            [selectedDataset]: selected[selectedDataset] ? false : true
        })
    }

    const onSelectVar = (dataset, variable) => {
        // If the user hasn't selected a variable from this dataset before
        if (!selectedVariables[dataset]) {
            setSelectedVariables({
                ...selectedVariables,
                [dataset]: {
                    [variable]: true
                }
            })
        } else { // else toggle the selection of the variable
            setSelectedVariables({
                ...selectedVariables,
                [dataset]: {
                    ...selectedVariables[dataset],
                    [variable]: selectedVariables[dataset][variable] ? false : true
                }
            })
        }

    }

    const downloadData = () => {
        console.log(state)
        alert("Downloading data")
        // TODO: Make requests and compile data
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
                                    <input type="text" />
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