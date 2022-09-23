import { JwtPayload, sign } from 'jsonwebtoken'

interface IUser {
	id: string
	email: string
	password: string
	first_name: string
	last_name: string
	status: string
	created_at: Date
	updated_at: Date
}

export class GenerateTokenProvider {
	async acessToken(user: IUser) {
		const payload: JwtPayload = {
			sub: user.id,
			iss: 'xestor.api.auth'
		}

		const accessToken = sign(payload, process.env.SECRET as string, {
			expiresIn: '1h',
		})

		return accessToken
	}

	async refreshToken(user: IUser) {
		const payload: JwtPayload = {
			sub: user.id,
			iss: 'xestor.api.auth'
		}

		const refreshToken = sign(payload, process.env.SECRET as string, {
			expiresIn: '15d',
		})

		return refreshToken
	}

}