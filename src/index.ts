import { Hono } from "hono";
import { provinceController } from "./controller/province-controller";
import { regenciesController } from "./controller/regencies-controller";
import { districtController } from "./controller/district-controller";
import { villageController } from "./controller/village-controller";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", provinceController);
app.route("/", regenciesController);
app.route("/", districtController);
app.route("/", villageController);

export default app;
