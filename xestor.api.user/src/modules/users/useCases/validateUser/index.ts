import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ValidateUserController } from "./validateUser.Controller";
import { ValidateUserUseCase } from "./validateUser.UseCase";

const userRepository = new UserRepository()

const validateUserUseCase = new ValidateUserUseCase(userRepository)

export const validateUserController = new ValidateUserController(validateUserUseCase)