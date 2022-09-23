import { Request, response, Response } from "express";
import { RefreshTokenUseCase } from "./refreshToken.UseCase";

export class RefreshTokenController {
	constructor(private refreshTokenUserCase: RefreshTokenUseCase) { }

	async handle(req: Request, res: Response) {
		const userEmail = res.get('userEmail') as string

		const token = await this.refreshTokenUserCase.execute(userEmail)

		res.status(200).json(token)
	}
}