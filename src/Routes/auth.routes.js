import { Router } from "express";
import { registerUser, signInUser } from "../Controllers/auth.controller.js";

const router = Router();

router.post("/sign-up", registerUser);
router.post("/sign-in", signInUser);

export default router;
