import { Router } from "express";
import { insertUserController } from "../modules/users/useCases/insertUser";

export const userRoutes = Router()

userRoutes.post('/', (req, res) => {
	return insertUserController.handle(req, res);
})