import bcrypt from 'bcryptjs'

import { CustomError } from "../../../../errors/CustomError";
import { IPasswordRepository } from '../../../password/repositories/IPasswordRepository';
import { IUserOut, IUserRepository } from "../../repositories/IUserRepository";

export class ValidateUserUseCase {
	constructor(private userRepository: IUserRepository, private passwordRepository: IPasswordRepository) { }

	async execute(email: string, password: string) {
		const user = await this.userRepository.findByEmail(email)

		if (!user) {
			throw new CustomError(400, 'User or password is invalid!')
		}

		const userPassword = await this.passwordRepository.findByUserId(user.id)

		if (!userPassword) {
			throw new CustomError(400, 'User or password is invalid!')
		}

		const match = await bcrypt.compare(password, userPassword.password);

		if (!match) {
			throw new CustomError(400, 'User or password is invalid!')
		}

		return user as IUserOut
	}
}