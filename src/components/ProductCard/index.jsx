import { Fragment } from "react";

function ProductCard(props) {
    // console.log(props)
    return (
        <Fragment>
            <div style={{ border: "1px solid black" }}>
                <h2>{props.title}</h2>
                <p>Desc</p>
                <button onClick={props.deleteHandler}>Delete</button>
            </div>
        </Fragment>)
}

export default ProductCard