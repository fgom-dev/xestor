import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError'
import { GenerateAccessTokenProvider } from '../../../../providers/GenerateAccessTokenProvider'

export interface ILogin {
	email: string
	password: string
}

export class LoginUseCase {
	constructor(private generateAccessTokeProvider: GenerateAccessTokenProvider) { }

	async execute({ email, password }: ILogin) {
		const user = await axios.post('http://localhost:3000/users/validate', {
			email,
			password
		}).catch((error) => {
			throw new CustomError(error.response.status, error.response.data.error);
		});

		console.log(user)

		const accessToken = await this.generateAccessTokeProvider.execute(user.data);

		return accessToken
	}
}