import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express'

import { CustomError } from './errors/CustomError'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof CustomError) {
		return res.status(error.statusCode).json({
			error: error.message,
		});
	}

	return res.json({
		error: error.message,
	});
})

app.listen(3001, () => console.log(`Server is running in port 3001`))