import express from "express";
import tokyo from "./tokyo-routes";
import { MessageResponse } from "../types/message-response-type";

const router = express.Router();

router.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "API - ⛩️",
  });
});

router.use("/tokyo", tokyo);

export default router;
