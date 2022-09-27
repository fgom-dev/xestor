import { PasswordRepository } from "../../../password/repositories/implementations/PasswordRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ValidateUserController } from "./validateUser.Controller";
import { ValidateUserUseCase } from "./validateUser.UseCase";

const userRepository = new UserRepository()

const passwordRepository = new PasswordRepository()

const validateUserUseCase = new ValidateUserUseCase(userRepository, passwordRepository)

export const validateUserController = new ValidateUserController(validateUserUseCase)