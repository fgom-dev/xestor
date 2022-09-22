import { Request, Response } from "express";
import { LoginUseCase } from "./loginUseCase";

export class LoginController {
	constructor(private loginUseCase: LoginUseCase) { }

	async handle(req: Request, res: Response) {
		const { email, password } = req.body

		const validate = await this.loginUseCase.execute({ email, password })

		return res.status(200).json(validate)

	}
}