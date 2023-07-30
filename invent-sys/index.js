import express, { json } from "express";
import { Schema, model, connect } from "mongoose"
import products from "./products.js";
const app = express()
app.use(json())

// (async () => {
// let db_uri = "mongodb://localhost:27017"
// await connect(db_uri, () => {
//     console.log("db connected");
// })
// })();

let db_uri = "mongodb+srv://ambq:ambq123@cluster0.yycwc5n.mongodb.net/?retryWrites=true&w=majority"
const callDb = async () => {
    try {
        await connect(db_uri)
        console.log("DB Connected")
    } catch (e) {
        console.log(e)
    }
}

callDb()

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    phone: { type: String, require: true }
})
const User = model("user", userSchema)

// products api
app.get("/product", (req, res) => {
    const data = products
    res.status(200).send({ data })
})

app.post("/product", (req, res) => {
    const body = req.body
    console.log(body)
    res.status(201).send({ message: "Product Added Successfully" })
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

app.delete("/product/:id", (req, res) => {
    // delte logic here

    res.status(200).send({ message: "Product Deleted Successfully" })
})

app.put("/product/:id", (req, res) => {
    // edit logic here

    res.status(200).send({ message: "Product Edited Successfully" })
})

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(5000, () => {
    console.log("App started")
})