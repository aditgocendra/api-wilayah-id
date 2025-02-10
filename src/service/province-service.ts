import { readJSONFile } from "../utils/read-file";
import { join } from "path";

const PATH_FILE = join(__dirname, "..", "data", "provinces.json");

export class ProvinceService {
  static async getProvinces() {
    const provinces = await readJSONFile(PATH_FILE);
    return provinces;
  }
}
