import { Request, Response } from "express";
import { IUserUpdate } from "../../repositories/IUserRepository";
import { UpdateUserUseCase } from "./updateUser.UseCase";

export class UpdateUserController {
	constructor(private updateUserUseCase: UpdateUserUseCase) { }

	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const { email, first_name, last_name } = req.body;

		const user: IUserUpdate = {
			id,
			email,
			first_name,
			last_name
		}

		const userUpdated = await this.updateUserUseCase.execute(user)

		return res.status(200).json(userUpdated)
	}
}