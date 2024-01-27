import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import session from "express-session";
import passeport from "../config/passeport";
import googleRoutes from "../routes/auth.routes";

dotenv.config();
const app: Application = express();

//middlewares
app.use(
  session({
    secret: "0auth-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
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

app.get("/api/auth/error", (req, res) => {
  res.status(500).json({ error: "Authentication failed" });
});

// App routes
app.use("/api/auth", googleRoutes);

export default app;
