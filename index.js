import express, { json } from "express";
import callDb from "./helpers/db.js";
import userRouter from "./routes/users.js"

const app = express()
app.use(json())
callDb()

app.use("/user", userRouter)

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(5000, () => {
    console.log("App started")
})