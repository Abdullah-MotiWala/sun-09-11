import { Fragment, } from "react"
import { Provider } from "react-redux"
import "./App.css"
import Home from "./components/HomePage"
import Login from "./components/Login"
import store from "./redux/store"

function App() {
  return <Provider store={store}>
    {/* <Login /> */}
    <Home />
  </Provider>
}

export default App