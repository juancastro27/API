import { Router } from "express";
import { ping } from '../controllers/index.controller.js'
import { deleteEmployee } from "../controllers/employees.controller.js";

const router = Router()

export default router