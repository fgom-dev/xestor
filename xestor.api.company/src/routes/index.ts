import { Router } from "express";
import { companyRoutes } from "./user.routes";

export const router = Router()

router.use('/users', companyRoutes)