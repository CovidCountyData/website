import React, { useEffect } from "react"

function CustomDownloads() {
    const [selected, setNewSelected] = React.useState({})
    console.log("selected", selected, setNewSelected)

    const onDatasetClick = (dataset) => {
        console.debug("[CustomizeDownload] (onDatasetClick) - clicked on dataset, setNewSelected: ", dataset, selected, setNewSelected)

        setNewSelected({
            ...selected,
            [dataset]: selected[dataset] ? false : true
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
                            {datasets.map((dataset, k) => {

                                return (
                                    <div key={k} className={selected[dataset] ? "col-12 col-md-2 dataset selected" : "col-10 col-md-2 dataset"} onClick={() => {
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