import { Router } from "express";
import { basicAuth } from "../middlewares/basicAuth";
import { loginController } from "../modules/auth/authUseCases/login";

export const authRoutes = Router()

authRoutes.post('/login', basicAuth, (req, res) => {
	return loginController.handle(req, res);
})