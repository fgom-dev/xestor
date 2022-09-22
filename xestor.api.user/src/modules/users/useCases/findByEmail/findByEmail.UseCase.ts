import { CustomError } from "../../../../errors/CustomError";
import { IUserRepository } from "../../repositories/IUserRepository";

export class FindByEmailUseCase {
	constructor(private userRepository: IUserRepository) { }

	async execute(email: string) {
		const user = await this.userRepository.findByEmail(email)

		if (!user) {
			throw new CustomError(404, 'User not found!')
		}

		return user
	}
}