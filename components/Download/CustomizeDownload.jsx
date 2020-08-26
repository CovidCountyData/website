import React from "react"

function CustomDownloads(props) {
    const [selected, setNewSelected] = React.useState({})
    console.log("selected", selected, setNewSelected)
    const onDatasetClick = (dataset) => {
        const newSelected = selected
        newSelected[dataset] = selected[dataset] ? false : true
        setNewSelected(newSelected).then(() => {
            console.log("clicked on select: ", dataset, selected)
        })
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
                            {datasets.map(dataset => {

                                return (
                                    <div className={selected[dataset] ? "col-2 dataset selected" : "col-2 dataset"} onClick={() => {
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
                </ol>
            </div>
        </React.Fragment>

    )
}
export default CustomDownloads