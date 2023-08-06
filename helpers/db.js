import { connect } from "mongoose"

let db_uri = "mongodb+srv://ambq:ambq123@cluster0.yycwc5n.mongodb.net/?retryWrites=true&w=majority"

const callDb = async () => {
    try {
        await connect(db_uri)
        console.log("DB Connected")
    } catch (e) {
        console.log(e)
    }
}


export default callDb