import { NextFunction, Request, Response } from "express";
import axios from 'axios'
import { CustomError } from "../errors/CustomError";

export async function jwtAuth(req: Request, res: Response, next: NextFunction) {
	const accessToken = req.headers.authorization as string;

	const response = await axios.get('http://localhost:3001/auth/validate', {
		headers: {
			Authorization: accessToken
		}
	})
		.catch((error) => {
			throw new CustomError(error.response.status, error.response.data.error);
		});

	const userEmail = response.data

	res.set({ userEmail })

	return next()
}