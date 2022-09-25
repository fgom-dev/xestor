import { Router } from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import { findByEmailController } from "../modules/users/useCases/findByEmail";
import { insertUserController } from "../modules/users/useCases/insertUser";
import { updateUserController } from "../modules/users/useCases/updateUser";
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

userRoutes.put('/:id', jwtAuth, (req, res) => {
	return updateUserController.handle(req, res)
})