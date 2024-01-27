// authRoutes.ts
import express, { Request, Response } from "express";
import passport from "passport";
import isAuthenticated from "../middlewares/authMiddleware";

const router = express.Router();
router.get("/login/failed", (req: Request, res: Response) => {
  res.status(500).json({
    error: true,
    message: "echec de l' authentification",
    user: req.user,
  });
});

router.get("/login/success", (req: Request, res: Response) => {
  if (req.user) {
    res
      .status(200)
      .json({ error: false, message: "authentification avec google réussie" });
  } else {
    res.status(500).json({ error: true, message: "Non autorisé" });
  }
});

router.get(
  "/google",
  passport.authenticate("google", {
    successRedirect: process.env.REDIRECT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/logout", (req: Request, res: Response) => {
  req.logout();
  res.redirect(process.env.REDIRECT_URL);
});

export default router;
