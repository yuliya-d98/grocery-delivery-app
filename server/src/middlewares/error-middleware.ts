import { NextFunction, Request, Response } from "express";

const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(500).json(err);
};

export default ErrorMiddleware;
