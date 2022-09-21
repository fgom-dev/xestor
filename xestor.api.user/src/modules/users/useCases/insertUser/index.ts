import { UserRepository } from "../../repositories/implementations/UserRepository";
import { InsertUserController } from "./insertUserController";
import { InsertUserUseCase } from "./insertUserUseCase";

const userRepository = new UserRepository()

const insertUserUseCase = new InsertUserUseCase(userRepository)

export const insertUserController = new InsertUserController(insertUserUseCase)