import { Request, Response } from "express";
import { NextApiHandler, NextApiRequest } from "next";

const isAuthenticated = (req: Request, res: Response, next: () => any) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

module.exports = isAuthenticated;
