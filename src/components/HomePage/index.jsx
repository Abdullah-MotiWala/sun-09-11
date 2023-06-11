import { Fragment, useState } from "react"
import AddProduct from "../AddProduct"
import AllProducts from "../AllProducts"

function Home() {

    const [items, setItems] = useState([])

    return <Fragment>
        <AddProduct items={items} setItems={setItems} />
        <div>
            <AllProducts items={items} setItems={setItems}  />
        </div>
    </Fragment>
}

export default Home