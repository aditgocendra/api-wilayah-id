import { RegenciesModel } from "../model/regencies-model";
import { readJSONFile } from "../utils/read-file";
import { join } from "path";

const PATH_FILE = join(__dirname, "..", "data", "regencies.json");

export class RegenciesService {
  static async getRegencies(provinceId: string) {
    const data = await readJSONFile(PATH_FILE);

    // Filter regencies based on provinceId
    const regencies = data.filter(
      (regency: RegenciesModel) => regency.provinceId === provinceId
    );

    return regencies;
  }
}
