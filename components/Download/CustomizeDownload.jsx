import Axios from "axios";
import React, { useEffect } from "react"
import { Toast } from "react-bootstrap";

function CustomDownloads() {
    const [showErrorToast, setShowErrorToast] = React.useState(false)
    // STATE -----------------------------------------------------
    const [selected, setNewSelected] = React.useState({})
    // TODO: Remove initial state
    const [datasetVariables, setDatasetVariables] = React.useState({
        "Demographics": ["dt", "fips", "ethnicity"]
    })
    const [datasets, setDatasets] = React.useState({})
    const [selectedVariables, setSelectedVariables] = React.useState({})

    // const datasets = {
    //     "County-level covid data": "covid_variables",
    //     "Vintage county-level covid data": "covid_variables",
    //     "Demographics": "acs_variables",
    //     "Industry specific GPD": "bea_variables",
    //     "Economic Data": "bea_variables",
    //     "Mobility Devices": "mobility_dex_variables",
    //     "Mobility Locations": "", // TODO: No variables table for this?
    //     "HHS Data": "covid_variables",
    //     "US Counties": "us_fips", // TODO: This returns all fips codes. Just want column names
    //     "US States": "us_states", // TODO: This is returning all fips codes. I just want the column names (state name, abbreviation, fips)
    //     "Nonpharmaceutical interventions data": "npi_variables",
    //     "Redistributing: Our World in Data covid data": "", // TODO: Can't find this one
    //     "Redistributing: Covid Tracking Project Data": "", // TODO: Can't find this one,
    //     "Redistributing: New York Times covid data": "", // TODO: Can't find this one,
    //     "Redistributing: USA Facts covid data": "" // TODO: Can't find this one
    // }
    // EFFECTS -------------------------------------------------------------
    React.useEffect(() => {

        Axios.get("https://clean-swagger-inunbrtacq-uk.a.run.app").then(resp => {
            console.log("swagger:", resp.data)
            setDatasets(resp.data.definitions)
        })
    }, [])


    // React.useEffect(() => {
    //     // TODO: Check if we have list of variables for each true dataset
    //     console.debug("get variables for ", selected)


    //     // TODO: If not, request list of variables
    //     // TODO: Set variables state
    // }, [selected])

    // CALLBACKS --------------------------------------------------------------
    const onDatasetClick = (selectedDataset) => {
        console.debug("Selected ", selectedDataset, datasetVariables, selected)

        // // Request list of dataset variables if we don't have them
        // if (!datasetVariables[selectedDataset] && !selected[selectedDataset]) {
        //     console.log("Getting variables for ", selectedDataset)
        //     Axios.get(`https://api.covidcountydata.org/${datasets[selectedDataset]}`, {
        //         headers: {
        //             "Accept-profile": "meta"
        //         }
        //     }).then(resp => {
        //         console.debug(`Variables for ${selectedDataset}: ${resp.data}`)
        //         // TODO: set the datasetVariables state
        //         const vars = resp.data.map(variable => variable.name)
        //         setDatasetVariables({
        //             ...datasetVariables,
        //             [selectedDataset]: vars
        //         })
        //     }).catch(error => {
        //         setShowErrorToast(true)
        //     })
        // }

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

    const downloadData = (ev) => {
        ev.ignoreDefault()
        alert("Downloading data")
    }
    // RENDER ---------------------------------------------------------------------
    return (
        <React.Fragment>
            {/* <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '200px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                >

                    <Toast error onClose={() => setShowErrorToast(false)} show={showErrorToast} delay={3000} autohide>
                        <Toast.Body>An error occurred requesting the dataset variables</Toast.Body>
                    </Toast>
                </div>
            </div> */}
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
                                                selected[dataset]
                                                    ? "col-12 col-md-2 dataset selected"
                                                    : "col-10 col-md-2 dataset"}
                                            onClick={() => {
                                                onDatasetClick(dataset)
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

                            {Object.keys(selected).map((datasetName, k) => {
                                if (selected[datasetName]) {

                                    return (
                                        <div className="variable-selection" key={k}>
                                            <span>Variables for <em>{datasets[datasetName].name}</em></span>
                                            <div className="variable-list row">
                                                {Object.keys(datasets[datasetName].properties).map((prop, i) => {
                                                    return <div
                                                        key={i}
                                                        className={(
                                                            selectedVariables[datasetName]
                                                            && selectedVariables[datasetName][prop])
                                                            ? "selected col-auto"
                                                            : "col-auto"}
                                                        onClick={() => {
                                                            onSelectVar(datasetName, prop)
                                                        }}>
                                                        {prop}
                                                    </div>
                                                })}
                                                {/* {datasetVariables[datasetName].map((variable, i) => {
                                                        return <div
                                                            key={i}
                                                            className={(
                                                                selectedVariables[datasetName]
                                                                && selectedVariables[datasetName][variable])
                                                                ? "selected col-auto"
                                                                : "col-auto"}
                                                            onClick={() => {
                                                                onSelectVar(datasetName, variable)
                                                            }}>
                                                            {variable}
                                                        </div>
                                                    })} */}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </li>
                        <li>
                            <span>Choose filter(s)</span>
                            {/** TODO: List possible filters*/}
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