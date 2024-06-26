import { userRegister, userLogin, getUser } from "../models/user.models.js"
import bcrypt from 'bcryptjs'
import { jwtSign, jwtDecode } from '../utils/jwt.js'
import { tokenVerify } from "../middlewares/tokenCheck.middlewares.js"

export const userRegisterControl = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body
        const userRegistered = await userRegister({ email, password, rol, lenguage })
        res.status(201).json(userRegistered)
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario' })
    }
}

export const userLoginControl = async (req, res) => {
    try {
        const { email, password } = req.body
        const verifyUser = await userLogin({ email })

        if (!verifyUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }

        if (!bcrypt.compareSync(password, verifyUser.password)) {
            return res.status(401).json({ message: 'Credenciales inválidas' })
        }

        const token = jwtSign({ email: verifyUser.email }, { expiresIn: '2m' })
        res.json({ token })
    } catch (error) {
        console.error('Error al iniciar sesión:', error)
        res.status(500).json({ message: 'Error al iniciar sesión' })
    }
}

export const getUserControl = async (req, res) => {
    try {
        tokenVerify(req, res)
        let payload = jwtDecode(req.header("Authorization"))
        let user = await getUser({ email: payload.email })
        res.status(200).json([user])
    } catch (error) {
        res.status(500).json({ message: 'Error al validar' })
    }
}

