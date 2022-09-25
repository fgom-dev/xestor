import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserController } from "./updateUser.Controller";
import { UpdateUserUseCase } from "./updateUser.UseCase";

const userRepository = new UserRepository()

const updateUserUseCase = new UpdateUserUseCase(userRepository);

export const updateUserController = new UpdateUserController(updateUserUseCase);