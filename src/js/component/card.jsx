import React from "react";


const Card = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">Card Title</h5>
                    <p className="card-text d-flex justify-content-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam mollitia unde dolor ullam dicta, eum fugiat.</p>
                    <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
                </div>
            </div>
        </>
    );
}



export default Card;