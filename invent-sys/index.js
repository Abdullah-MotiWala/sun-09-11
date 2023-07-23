import express from "express";
import products from "./products.js";
const app = express()

// products api
app.get("/product", (req, res) => {
    const data = products
    res.status(200).send({ data })
})
app.get("/product/:id", (req, res) => {
    const id = req.params.id
    const data = products.find((product) => product.id == id)
    if (!data) {
        res.status(404).send({ message: "Data not found" })
        return
    }
    res.status(200).send({ data })
})

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(5000, () => {
    console.log("App started")
})