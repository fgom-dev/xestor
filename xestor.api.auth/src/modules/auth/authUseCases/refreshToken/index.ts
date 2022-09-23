import { GenerateTokenProvider } from "../../../../providers/GenerateTokenProvider";
import { RefreshTokenController } from "./refreshToken.Controller";
import { RefreshTokenUseCase } from "./refreshToken.UseCase";

const generateTokenProvider = new GenerateTokenProvider()

const refreshTokenUserCase = new RefreshTokenUseCase(generateTokenProvider)

export const refreshTokenController = new RefreshTokenController(refreshTokenUserCase)