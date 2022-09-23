import { GenerateAccessTokenProvider } from "../../../../providers/GenerateAccessTokenProvider";
import { LoginController } from "./login.Controller";
import { LoginUseCase } from "./loginUseCase";

const generateAccessTokeProvider = new GenerateAccessTokenProvider()

const loginUseCase = new LoginUseCase(generateAccessTokeProvider)

export const loginController = new LoginController(loginUseCase)