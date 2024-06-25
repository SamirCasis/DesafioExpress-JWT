import linkDB from '../db/link.db.js'

export const userRegister = async ({ email, password, rol, lenguaje }) => {
    linkDB('INSERT INTO usuarios (id, email, password, rol, lenguaje) VALUES (DEFAULT, $1, $2, $3, $4);', [email, password, rol, lenguaje])
}

export const userLogin = async () => {
    linkDB('SELECT email FROM usuarios WHERE id = $1;', [id])
} 
