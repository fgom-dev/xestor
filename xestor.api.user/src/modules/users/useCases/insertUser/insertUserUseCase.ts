import bcrypt from 'bcryptjs'

import { CreateUser, IUserRepository } from "../../repositories/IUserRepository";

export class InsertUserUseCase {
	constructor(private userRepository: IUserRepository) { }

	async execute({ email, first_name, last_name, password }: CreateUser) {
		const password_hashed = await bcrypt.hash(password, Number(process.env.SALT_ROUND))

		const newUser = await this.userRepository.insert({ email, first_name, last_name, password: password_hashed })

		return newUser
	}
}