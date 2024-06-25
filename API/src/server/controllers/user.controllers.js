import { userRegister, userLogin } from "../models/user.models.js";
import jwtoken from 'jsonwebtoken'

export const userRegisterControl = async (req, res) => {
    try {
        const { email, password, rol, lenguaje } = req.body
        const jewels = await jewelsData({ limits, order_by, page })
        const hateoas = await generateHATEOAS('joya', jewels)
        res.status(201).json({ message: 'usuario creado con exito' })
    } catch (error) {
        console.error('Error retrieving joyas:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export const userLoginControl = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.body
        const joyas = await jewelsDataFilters({ precio_max, precio_min, categoria, metal })
        res.status(200).json(joyas)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

