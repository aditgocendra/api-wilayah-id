import { Hono } from "hono";
import { DistrictService } from "../service/district-service";

export const districtController = new Hono();

districtController.get("/api/districts/:regenciesId", async (c) => {
  const regenciesId = c.req.param("regenciesId");
  const response = await DistrictService.getDistricts(regenciesId);
  return c.json(response);
});
