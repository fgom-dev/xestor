import { Router } from "express";
import { companyRoutes } from "./company.routes";

export const router = Router();

router.use('/companies', companyRoutes);