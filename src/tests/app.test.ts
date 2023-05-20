import request from "supertest";
import app from "../app";

describe("app", () => {
  it("responds with a not found message", async () => {
    const response = await request(app)
      .get("/what-is-this-even")
      .set("Accept", "application/json");

    expect(response.status).toBe(404);
    expect(response.header["content-type"]).toMatch(/json/);
  });
});

describe("GET /", () => {
  it("responds with a json message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({ message: "⛩️ welcome to the api ⛩️" });
  });
});
