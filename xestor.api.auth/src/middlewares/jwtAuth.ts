import { NextFunction, Request, response, Response } from "express";
import { verify } from "jsonwebtoken";
import { CustomError } from "../errors/CustomError";

export function jwtAuth(req: Request, res: Response, next: NextFunction) {
	const jwtAuth = req.headers.authorization

	if (!jwtAuth) {
		throw new CustomError(400, 'Token is empty!')
	}

	const [, token] = (jwtAuth).split(' ')

	const jwt = verify(token, process.env.SECRET as string, {
		complete: true
	})

	res.set({ userEmail: jwt.payload.sub })

	return next()
}