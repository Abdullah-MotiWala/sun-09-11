import React from 'react'
import { useEffect } from 'react';
import ProductCard from './ProductCard'

const AllProducts = ({ items, setItems }) => {
    console.log(items);
    // let gender = "male"
    // const prefix = gender === "male" ? "Mr." : gender === "female" ? "Mrs" : undefined
    // const name = prefix || "M"
    // const age = gender === "male"  && 25

    const fetchData = async () => {
        // fetch("https://jsonplaceholder.typicode.com/posts").then((value) => {
        //     value.json().then((response) => console.log(response))
        // })
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{ padding: "2rem", display: "flex", }}>
            {items.length
                ? items.map(item => <ProductCard item={item} key={item.id} setItems={setItems} items={items} />)
                : 'No Item Found'}
        </div>
    )
}

export default AllProducts
