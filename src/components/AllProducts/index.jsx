import React from 'react'
import ProductCard from './ProductCard'

const AllProducts = ({ items, setItems }) => {
    console.log(items);
    // let gender = "male"
    // const prefix = gender === "male" ? "Mr." : gender === "female" ? "Mrs" : undefined
    // const name = prefix || "M"
    // const age = gender === "male"  && 25

    return (
        <div style={{ padding: "2rem", display: "flex", }}>
            {items.length ? items.map((item) => <ProductCard item={item} key={item.id} setItems={setItems} items={items}/>) : 'No Item Found'}
        </div>
    )
}

export default AllProducts
