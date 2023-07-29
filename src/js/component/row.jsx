import React from "react";
import Card from "./card";


const Row = () => {
    return (
        <>
            <div className="row d-flex justify-content-evenly mx-1 py-2 gap-3">
                <div className="col" id="col1">
                    <Card />
                </div>
                <div className="col">
                    <Card />
                </div>
                <div className="col">
                    <Card />
                </div>
                <div className="col" id="col2">
                    <Card />
                </div>

            </div>
        </>
    )
};

export default Row;