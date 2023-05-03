import { NextFunction, Request, Response } from "express";

class AuthController {
  async registration(req: Request, res: Response, next: NextFunction) {
    return res.status(500).json("edit registration");
  }
  async login(req: Request, res: Response, next: NextFunction) {
    return res.status(500).json("edit login");
  }
  async logout(req: Request, res: Response, next: NextFunction) {
    return res.status(500).json("edit logout");
  }
  async activate(req: Request, res: Response, next: NextFunction) {
    return res.status(500).json("edit activate");
  }
  async refresh(req: Request, res: Response, next: NextFunction) {
    return res.status(500).json("edit refresh");
  }
  async getUsers(req: Request, res: Response, next: NextFunction) {
    return res.status(500).json("edit getUsers");
  }
}

export default new AuthController();
