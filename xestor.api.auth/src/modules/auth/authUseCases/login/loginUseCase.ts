import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError'
import { GenerateTokenProvider } from '../../../../providers/GenerateTokenProvider'

interface ILogin {
	email: string
	password: string
}

interface ITokenOut {
	accessToken: string
	refreshToken: string
}

export class LoginUseCase {
	constructor(private generateTokenProvider: GenerateTokenProvider) { }

	async execute({ email, password }: ILogin) {
		const user = await axios.post('http://localhost:3000/users/validate', {
			email,
			password
		}).catch((error) => {
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