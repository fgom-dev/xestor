import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError';
import { GenerateTokenProvider } from "../../../../providers/GenerateTokenProvider";

export class RefreshTokenUseCase {
	constructor(private generateTokenProvider: GenerateTokenProvider) { }

	async execute(userEmail: string) {
		const user = await axios.get(`http://localhost:3000/users/${userEmail}`)
			.catch((error) => {
				throw new CustomError(error.response.status, error.response.data.error);
			});

		const accessToken = await this.generateTokenProvider.acessToken(user.data);

		const refreshToken = await this.generateTokenProvider.refreshToken(user.data);

		const token = {
			accessToken,
			refreshToken
		}

		return token
	}
}