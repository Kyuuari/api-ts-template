import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import api from "./routes";

import { MessageResponse } from "./types/message-response-type";
import * as middlewares from "./middlewares";

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "⛩️ welcome to the api ⛩️",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
