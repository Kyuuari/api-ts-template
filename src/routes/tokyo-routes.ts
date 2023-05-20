import express from "express";

const router = express.Router();

type FoodResponse = string[];

router.get<{}, FoodResponse>("/", (_req, res) => {
  res.json(["🍜", "🍱", "🍡"]);
});

export default router;
