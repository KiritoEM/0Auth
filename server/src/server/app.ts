import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import cookieSession from "cookie-session";
import passeport from "../config/passeport";
import authRoutes from "./../routes/auth.routes";

dotenv.config();
const app: Application = express();

//middalware
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));
app.use(passeport.initialize());
app.use(passeport.session());

app.get("/home", (req: Request, res: Response) => {
  res.send("Serveur working well!");
});

// App routes
app.use("/google", authRoutes);

export default app;
