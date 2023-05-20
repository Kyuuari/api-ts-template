import request from "supertest";
import app from "../app";

describe("GET /api/v1", () => {
  it("responds with a json message", async () => {
    const response = await request(app)
      .get("/api/v1")
      .set("Accept", "application/json");

    expect(200);
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({ message: "API - ⛩️" });
  });
});

describe("GET /api/v1/tokyo", () => {
  it("responds with a json message", async () => {
    const response = await request(app).get("/api/v1/tokyo");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(["🍜", "🍱", "🍡"]);
  });
});
