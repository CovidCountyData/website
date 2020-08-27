import React, { useEffect } from "react"

function CustomDownloads() {
    const [selected, setNewSelected] = React.useState({})
    // TODO: Remove initial state
    const [datasetVariables, setDatasetVariables] = React.useState({
        "Demographics": ["dt", "fips", "ethnicity"]
    })
    const [selectedVariables, setSelectedVariables] = React.useState({})
    React.useEffect(() => {
        // TODO: Check if we have list of variables for each true dataset
        // TODO: If not, request list of variables
        // TODO: Set variables state
    }, [selected])
    const onDatasetClick = (dataset) => {
        // toggle selection of dataset
        setNewSelected({
            ...selected,
            [dataset]: selected[dataset] ? false : true
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

    const datasets = [
        "County-level covid data",
        "Vintage county-level covid data",
        "Demographics",
        "Industry specific GPD",
        "Economic Data",
        "Mobility Devices",
        "Mobility Locations",
        "HHS Data",
        "US Counties",
        "US States",
        "Nonpharmaceutical interventions data",
        "Redistributing: Our World in Data covid data",
        "Redistributing: Covid Tracking Project Data",
        "Redistributing: New York Times covid data",
        "Redistributing: USA Facts covid data"
    ]

    return (
        <React.Fragment>

            <div className="custom-downloads container">
                <h2>Custom Data Downloads</h2>
                <ol>
                    <li>
                        <span>
                            Choose dataset(s)
                        </span>
                        <div className="row">
                            {datasets.map((dataset, k) => {

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
                                            {dataset}
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

                        {Object.keys(selected).map((dataset, k) => {
                            if (selected[dataset]) {

                                return (
                                    <div className="variable-selection" key={k}>
                                        <span>Variables for <em>{dataset}</em></span>
                                        {datasetVariables[dataset] ? (
                                            <div className="variable-list">
                                                {datasetVariables[dataset].map((variable, i) => {
                                                    return <div
                                                        key={i}
                                                        className={(
                                                            selectedVariables[dataset]
                                                            && selectedVariables[dataset][variable])
                                                            ? "selected"
                                                            : ""}
                                                        onClick={() => {
                                                            onSelectVar(dataset, variable)
                                                        }}>
                                                        {variable}
                                                    </div>
                                                })}
                                            </div>
                                        )
                                            : <div><em>Loading...</em></div>}
                                    </div>
                                )
                            }
                        })}
                    </li>
                </ol>
            </div>
        </React.Fragment>

    )
}
export default CustomDownloads