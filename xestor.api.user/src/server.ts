import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	return res.json({ error: error.message })
})

app.listen(Number(process.env.API_PORT), () => console.log(`Server is running in port ${process.env.API_PORT}`))