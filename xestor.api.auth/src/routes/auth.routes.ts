import { Router } from "express";
import { loginController } from "../modules/auth/authUseCases/login";

export const authRoutes = Router()

authRoutes.post('/login', (req, res) => {
	return loginController.handle(req, res);
})