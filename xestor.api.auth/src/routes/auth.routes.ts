import { Router } from "express";
import { basicAuth } from "../middlewares/basicAuth";
import { jwtAuth } from "../middlewares/jwtAuth";
import { loginController } from "../modules/auth/authUseCases/login";
import { refreshTokenController } from "../modules/auth/authUseCases/refreshToken";

export const authRoutes = Router()

authRoutes.post('/login', basicAuth, (req, res) => {
	return loginController.handle(req, res);
})

authRoutes.get('/refreshToken', jwtAuth, (req, res) => {
	return refreshTokenController.handle(req, res);
})