import { userRegister, userLogin } from "../models/user.models.js";
import jwt from 'jsonwebtoken'

export const userRegisterControl = async (req, res) => {
    try {
        let { email, password, rol, lenguaje } = req.body
        const passwordEncriptada = bcrypt.hashSync(password)
        password = passwordEncriptada
        await pool.query(userRegister, email, passwordEncriptada, rol, lenguaje)
    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
}


export const userLoginControl = async (req, res) => {
    try {
        const { email, password } = req.body
        await verificarCredenciales(email, password)
        const token = jwt.sign({ email }, "az_AZ")
        res.send(token)
    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
}

