import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(Number(process.env.API_PORT), () => console.log(`Server is running in port ${process.env.API_PORT}`))