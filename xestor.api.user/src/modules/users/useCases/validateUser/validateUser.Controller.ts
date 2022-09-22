import { Request, Response } from "express";
import { ValidateUserUseCase } from "./validateUser.UseCase";

export class ValidateUserController {
	constructor(private validateUserUseCase: ValidateUserUseCase) { }

	async handle(req: Request, res: Response) {
		const { email, password } = req.body

		const result = await this.validateUserUseCase.execute(email, password)

		return res.status(200).json({ validate: result })
	}
}