import { VillageModel } from "../model/village-model";
import { readJSONFile } from "../utils/read-file";
import { join } from "path";

const PATH_FILE = join(__dirname, "..", "data", "villages.json");

export class VillageService {
  static async getVillages(districtId: string) {
    const data = await readJSONFile(PATH_FILE);

    const villages = data.filter(
      (village: VillageModel) => village.districtId === districtId
    );

    return villages;
  }
}
