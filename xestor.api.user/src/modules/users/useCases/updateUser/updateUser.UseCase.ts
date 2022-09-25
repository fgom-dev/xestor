import { CustomError } from "../../../../errors/CustomError";
import { IUserRepository, IUserUpdate } from "../../repositories/IUserRepository";

export class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) { }
	async execute(user: IUserUpdate) {

		//verificar se o id existe

		const userUpdated = await this.userRepository.update(user)

		return userUpdated
	}
}