import React from "react";
import Button from "./button";


const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid py-2">
                <div className="container bg-light py-4">
                    <h1 className="display-4 d-flex justify-content-center">Welcome!</h1>
                    <p className="lead" style={{color: "#606470"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit assumenda veniam ipsum delectus iure ullam voluptates perspiciatis ea facere hic, aliquid facilis. Amet ullam similique maxime reprehenderit porro architecto perferendis.</p>
                    <Button />
            
                </div>
            </div>
        </>
    )
};





export default Jumbotron;



