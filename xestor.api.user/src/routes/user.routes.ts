import { Router } from "express";
import { findByEmailController } from "../modules/users/useCases/findByEmail";
import { insertUserController } from "../modules/users/useCases/insertUser";
import { validateUserController } from "../modules/users/useCases/validateUser";

export const userRoutes = Router()

userRoutes.post('/', (req, res) => {
	return insertUserController.handle(req, res);
})

userRoutes.post('/validate', (req, res) => {
	return validateUserController.handle(req, res)
})

userRoutes.get('/:email', (req, res) => {
	return findByEmailController.handle(req, res)
})