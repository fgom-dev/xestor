import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError'

export interface ILogin {
	email: string
	password: string
}

export class LoginUseCase {
	async execute({ email, password }: ILogin) {
		const validate = await axios.post('http://localhost:3000/users/validate', {
			email,
			password
		}).catch((error) => {
			throw new CustomError(error.response.status, error.response.data.error)
		})

		return validate.data
	}
}