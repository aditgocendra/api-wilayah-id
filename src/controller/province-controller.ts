import { Hono } from "hono";
import { ProvinceService } from "../service/province-service";

export const provinceController = new Hono();

provinceController.get("/api/provinces", async (c) => {
  const response = await ProvinceService.getProvinces();
  return c.json(response);
});
