import express from 'express'
import cors from 'cors'
import { serverLog } from './middlewares/user.middlewares.js'
import userRoutes from './routes/user.routes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(serverLog)

app.use(userRoutes)

app.listen(PORT, () => console.log(`Server ON -> http://localhost:${PORT}`))

export default app