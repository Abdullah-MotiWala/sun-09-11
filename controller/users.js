import User from "../models/user.js"

export const getAllUsers = async (req, res) => {
    const users = await User.find().select("-password")
    res.status(200).send({ data: users })
}

export const createUser = async (req, res) => {
    const body = req.body
    const user = new User(body)
    await user.save()
    res.status(201).send({ message: "User Added Successfully" })
}

export const getUserById = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.status(200).send({ data: user })
}

export const deleteUserById = async (req, res) => {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    const users = await User.find()
    res.status(200).send({ data: users })
}