import {
  createFoodController,
  deleteFoodController,
  getFoodController,
  updateFoodController,
} from "../controllers/japan-controller";
import express from "express";

const router = express.Router();
const cities = "tokyo|kyoto|osaka";

// GET /japan
router.get("/", getFoodController);

// POST /japan/:cityId
router.post(`/:cityId(${cities})`, createFoodController);

// PUT /japan/:cityId
router.put(`/:cityId(${cities})`, updateFoodController);

// DELETE /japan/:cityId
router.delete(`/:cityId(${cities})`, deleteFoodController);

export default router;
