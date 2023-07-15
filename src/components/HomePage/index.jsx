import { useState } from "react"
import AddProduct from "../AddProduct"
import AllProducts from "../AllProducts"
import Navbar from "../navbar"
import "./homePage.css"

function Home() {

    const [items, setItems] = useState([])

    return <div className="wrapper-home">
        <Navbar />
        <AddProduct items={items} setItems={setItems} />
        <div>
            <AllProducts items={items} setItems={setItems} />
        </div>
    </div>
}

export default Home