import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError';
import { GenerateTokenProvider } from "../../../../providers/GenerateTokenProvider";
import { IBlackListRepository } from '../../../blackList/repositories/IBlackListRepository';

export class RefreshTokenUseCase {
	constructor(private generateTokenProvider: GenerateTokenProvider, private backlistRepository: IBlackListRepository) { }

	async execute(userEmail: string, tokenToInvalid: string) {
		const user = await axios.get(`http://localhost:3000/users/${userEmail}`)
			.catch((error) => {
				throw new CustomError(error.response.status, error.response.data.error);
			});

		const tokenAlreadyInvalid = await this.backlistRepository.findByToken(tokenToInvalid)

		if (tokenAlreadyInvalid) {
			throw new CustomError(400, 'Token is invalid!')
		}


		const accessToken = await this.generateTokenProvider.acessToken(user.data);

		const refreshToken = await this.generateTokenProvider.refreshToken(user.data);

		await this.backlistRepository.insert(tokenToInvalid);

		const token = {
			accessToken,
			refreshToken
		}

		return token
	}
}