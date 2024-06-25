import { userRegisterControl, userLoginControl } from "../controllers/user.controllers.js"
import { Router } from "express"

const router = Router()

router.post('/registrarse', userRegisterControl)
router.post('/login', userLoginControl)
router.get('/perfil')

export default router