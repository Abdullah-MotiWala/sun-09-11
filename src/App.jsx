import { Fragment, useEffect, useRef, useState } from "react"
import "./App.css"
import Navbar, { CallButton as LogoutButton, LoginButton } from "./components/Navbar"
import ProductCard from "./components/ProductCard"

function App() {
  const allUsers = [{ email: "email@123", password: "123", name: "User1" }, { email: "email@345", password: "345", name: "User2" },]
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [myProducts, setMyProducts] = useState([{ title: "title1", des: "des", id: 1 }, { title: "title2", des: "des", id: 2 }, { title: "title3", des: "des", id: 3 },])
  const [user, setUser] = useState(null)


  function renderFirst() {
    console.log("Component Start")
  }
  function loginHandler() {
    let selectedUser = allUsers.find((user) => { return user.email === emailRef.current.value && user.password === passwordRef.current.value })
    if (!selectedUser) {
      alert("Credential Not Found")
      return;
    }

    setUser(selectedUser.name)

  }
  function addProduct() {
    let title = prompt("Enter Product Title")
    let des = prompt("Enter Product Des")

    let product = { title, des }
    let updatedProducts = [...myProducts,product]
    setMyProducts(updatedProducts)

  }
  function deleteHandler(id) {
    let tempProducts = myProducts.filter((product) => product.id !== id)

    // let deletedIndex = tempProducts.findIndex((product) => product.id === id)
    // tempProducts.splice(deletedIndex,1)
    setMyProducts(tempProducts)
  }
  // useEffect(() => {
  //   renderFirst()
  // }, [])

  // useEffect(() => {
  //   // fetching APIs
  //   console.log("User Updated")
  // }, [user])

  return (
    <Fragment>
      {/* <p>Pakistan</p> */}
      {/* <p onClick={() => { MyName = "MotiWala" }}>{MyName}</p> */}
      <p onClick={() => { setUser("User2") }}>{user}</p>
      Email: <input type="text" ref={emailRef} />
      Password: <input type="password" ref={passwordRef} />
      <button onClick={loginHandler}>Login</button>
      <Navbar />
      <div style={{ display: "flex" }}>
        {myProducts.map((product) => { return <ProductCard title={product.title} deleteHandler={() => deleteHandler(product.id)} /> })}
      </div>
      {/* <LoginButton />
      <LogoutButton /> */}
      <button onClick={addProduct}>Add Product</button>


    </Fragment>
  )
}

export default App