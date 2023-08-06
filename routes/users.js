import { Router } from "express"
import { createUser, deleteUserById, getAllUsers, getUserById } from "../services/users.js"

const route = Router()

route.get("/", getAllUsers)
route.post("/", createUser)
route.get("/:id", getUserById)
route.delete("/:id", deleteUserById)

export default route
