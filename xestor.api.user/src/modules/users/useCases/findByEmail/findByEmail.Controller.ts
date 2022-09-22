import { Request, Response } from "express";
import { FindByEmailUseCase } from "./findByEmail.UseCase";

export class FindByEmailController {
	constructor(private findByEmailUseCase: FindByEmailUseCase) { }

	async handle(req: Request, res: Response) {
		const { email } = req.params

		const user = await this.findByEmailUseCase.execute(email)

		return res.status(200).json(user)
	}
}