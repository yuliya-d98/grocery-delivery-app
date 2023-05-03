import { Router } from "express";
import express from "express";
import { body } from "express-validator";
import authController from "../controllers/auth-controller.js";

const passwordLengthRequirements = { min: 3, max: 32 };

const authRouter: express.Router = Router();
authRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength(passwordLengthRequirements),
  authController.registration
);
authRouter.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength(passwordLengthRequirements),
  authController.login
);
authRouter.post("/logout", authController.logout);
authRouter.get("/activate/:link", authController.activate);
authRouter.get("/refresh", authController.refresh);
authRouter.get("/users", authController.getUsers);

export default authRouter;
