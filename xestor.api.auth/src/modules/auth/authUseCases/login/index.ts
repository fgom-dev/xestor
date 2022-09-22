import { LoginController } from "./login.Controller";
import { LoginUseCase } from "./loginUseCase";

const loginUseCase = new LoginUseCase()

export const loginController = new LoginController(loginUseCase)