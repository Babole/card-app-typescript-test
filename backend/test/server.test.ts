import { FastifyInstance } from "fastify";

import buildServer from "../src/server";

describe("example test", () => {
  it("should assert 1 + 1 is 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("server tests", () => {
  let server: FastifyInstance;

  beforeAll(async () => {
    server = buildServer();
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  test("GET /get/ returns status 200", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/get/",
    });

    expect(response.statusCode).toBe(200);
  });

  test("GET /get/:id returns status 200", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/get/:id",
    });

    expect(response.statusCode).toBe(200);
  });

  test("POST /create/ returns status 200, with valid data", async () => {
    const validData = {
      id: "12345",
      title: "Test Entry",
      description: "This is a test entry",
      created_at: new Date(),
      scheduled_for: new Date(),
    };
    const response = await server.inject({
      method: "POST",
      url: "/create/",
      payload: validData,
    });

    expect(response.statusCode).toBe(200);
  });

  test("PUT /update/:id returns status 200 with valid id and data", async () => {
    const updatedEntry = {
      title: "Test Entry",
      description: "This is NOT a test!",
      created_at: new Date(),
      scheduled_for: new Date(),
    };
    const response = await server.inject({
      method: "PUT",
      url: `/update/12345`,
      payload: updatedEntry,
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ msg: "Updated successfully" });
  });

  test("DELETE /delete/:id returns status 200 with valid id", async () => {
    const response = await server.inject({
      method: "DELETE",
      url: "/delete/12345",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ msg: "Deleted successfully" });
  });
});
