import bcrypt from 'bcryptjs'

import { CustomError } from "../../../../errors/CustomError";
import { IUserOut, IUserRepository } from "../../repositories/IUserRepository";

export class ValidateUserUseCase {
	constructor(private userRepository: IUserRepository) { }

	async execute(email: string, password: string) {
		const user = await this.userRepository.findByEmail(email)

		if (!user) {
			throw new CustomError(400, 'User or password is invalid!')
		}

		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			throw new CustomError(400, 'User or password is invalid!')
		}

		return user as IUserOut
	}
}