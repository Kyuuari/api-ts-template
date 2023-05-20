import { Request, Response } from "express";

type FoodResponse = string[];

interface FoodRequest {
  cityId: "tokyo" | "kyoto" | "osaka";
  food: string[];
}

export function getFoodController(_req: Request, res: Response<FoodResponse>) {
  res.json(["🍜", "🍱", "🍡"]);
}

/**TODO: add create logic**/
export function createFoodController(req: Request<FoodRequest>, res: Response) {
  const { cityId } = req.params;
  const { food } = req.body;
  //Logic to create a new food item
  // ...
  res.status(201).json({
    message: `Food from ${cityId} made ${JSON.stringify(food)} successfully`,
  });
}

/**TODO: add update logic**/
export function updateFoodController(_req: Request, res: Response) {
  // const cityId: string = req.params.id;
  // const updatedFood: string = req.body.food;
  // Logic to update the food item with the given id
  // ...

  res.json({ message: "Food updated successfully" });
}

/**TODO: add delete logic **/
export function deleteFoodController(_req: Request, res: Response) {
  // const cityId: string = req.params.id;
  // Logic to delete the food item with the given id
  // ...
  res.json({ message: "Food deleted successfully" });
}
