import { UserRepository } from "../../repositories/implementations/UserRepository";
import { FindByEmailController } from "./findByEmail.Controller";
import { FindByEmailUseCase } from "./findByEmail.UseCase";

const userRepository = new UserRepository()

const findByEmailUseCase = new FindByEmailUseCase(userRepository)

export const findByEmailController = new FindByEmailController(findByEmailUseCase)