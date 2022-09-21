import { Request, Response } from 'express'
import { CreateUser } from '../../repositories/IUserRepository';
import { InsertUserUseCase } from './insertUserUseCase';

export class InsertUserController {
	constructor(private insertUserUseCase: InsertUserUseCase) { }

	async handle(req: Request, res: Response) {
		const user: CreateUser = {
			...req.body
		}

		const newUser = await this.insertUserUseCase.execute(user)

		res.status(200).json(newUser)
	}
}