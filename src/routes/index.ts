import express from "express";
import japan from "../routes/japan-routes";
import { MessageResponse } from "../types/message-response-type";

const router = express.Router();

router.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "API_V1 - ⛩️",
  });
});

router.use("/japan", japan);

export default router;
