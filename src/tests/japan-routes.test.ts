import request from "supertest";
import app from "../app";

describe("GET /api/v1", () => {
  it("responds with a json message", async () => {
    const response = await request(app)
      .get("/api/v1")
      .set("Accept", "application/json");

    expect(200);
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({ message: "API_V1 - ⛩️" });
  });
});

describe("GET /api/v1/japan", () => {
  it("responds with a json message", async () => {
    const response = await request(app).get("/api/v1/japan");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(["🍜", "🍱", "🍡"]);
  });
});

describe("POST /api/v1/japan/tokyo", () => {
  it("should create a new food item", async () => {
    const cityId = "tokyo";
    const food = ["🍱", "🍡"];

    const response = await request(app)
      .post(`/api/v1/japan/${cityId}`)
      .send({ food })
      .expect(201);

    expect(response.body.message).toEqual(
      `Food from ${cityId} made ${JSON.stringify(food)} successfully`
    );
  });
});

describe("updateFoodController", () => {
  it("should update a food item", async () => {
    const cityId = "tokyo";
    const food = ["🍱", "🍡"];

    const response = await request(app)
      .put(`/api/v1/japan/${cityId}`)
      .send({ food })
      .expect(200);

    expect(response.body.message).toEqual(`Food updated successfully`);
  });
});
