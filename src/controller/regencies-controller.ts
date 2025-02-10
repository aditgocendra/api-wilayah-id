import { Hono } from "hono";
import { RegenciesService } from "../service/regencies-service";

export const regenciesController = new Hono();

regenciesController.get("/api/regencies/:provinceId", async (c) => {
  const provinceId = c.req.param("provinceId");
  const response = await RegenciesService.getRegencies(provinceId);
  return c.json(response);
});
