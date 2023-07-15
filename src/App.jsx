import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/HomePage"
import Login from "./components/Login"

function App() {
  const loginPath = "login"
  return <Routes>
    <Route path={loginPath} element={<Login />} />
    <Route path={"/"} element={<Home />} />
  </Routes>
}

export default App