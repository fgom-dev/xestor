import { Request, Response } from 'express'
import { ICreateUser } from '../../repositories/IUserRepository';
import { InsertUserUseCase } from './insertUserUseCase';

export class InsertUserController {
	constructor(private insertUserUseCase: InsertUserUseCase) { }

	async handle(req: Request, res: Response) {
		const user: ICreateUser = {
			...req.body
		}

		const newUser = await this.insertUserUseCase.execute(user)

		return res.status(200).json(newUser)
	}
}