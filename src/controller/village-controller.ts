import { Hono } from "hono";
import { VillageService } from "../service/village-service";

export const villageController = new Hono();

villageController.get("/api/villages/:districtId", async (c) => {
  const districtId = c.req.param("districtId");
  const response = await VillageService.getVillages(districtId);
  return c.json(response);
});
