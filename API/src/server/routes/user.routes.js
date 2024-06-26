import { userRegisterControl, userLoginControl, getUserControl } from "../controllers/user.controllers.js"
import { Router } from "express"

const router = Router()

router.post('/usuarios', userRegisterControl)
router.post('/login', userLoginControl)
router.get('/usuarios', getUserControl)

export default router