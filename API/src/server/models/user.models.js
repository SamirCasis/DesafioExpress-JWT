import linkDB from '../db/link.db.js'
import bcrypt from 'bcryptjs'

export const userRegister = async ({ email, password, rol, lenguage }) => {
    const hashPass = bcrypt.hashSync(password, 10)
    const query = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *'
    const result = await linkDB(query, [email, hashPass, rol, lenguage])
    return result[0]
}

export const userLogin = async ({ email }) => {
    const query = 'SELECT email, password FROM usuarios WHERE email = $1'
    const result = await linkDB(query, [email])
    return result[0]
}

export const getUser = async ({ email }) => {
    const query = 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1'
    const result = await linkDB(query, [email])
    return result[0]
}