import express from "express";
import emojis from "./emoji-routes";
import { MessageResponse } from "../types/types";

const router = express.Router();

router.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);

export default router;
