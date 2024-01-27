import { Request, Response } from "express";

const isAuthenticated = (req: Request, res: Response, next: () => any) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

export default isAuthenticated;
