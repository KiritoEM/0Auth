import { Request, Response } from "express";

const isAuthenticated = (req: Request, res: Response, next: () => any) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("http://localhost:3000/");
};

export default isAuthenticated;
