import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import api from "./routes";
import { MessageResponse } from "./types/types";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "👹 Response Works",
  });
});

app.use("/api/v1", api);

export default app;
