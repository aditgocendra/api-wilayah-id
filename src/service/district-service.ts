import { DistrictModel } from "../model/district-model";
import { readJSONFile } from "../utils/read-file";
import { join } from "path";

const PATH_FILE = join(__dirname, "..", "data", "districts.json");

export class DistrictService {
  static async getDistricts(regenciesId: string) {
    const data = await readJSONFile(PATH_FILE);

    const districts = data.filter(
      (district: DistrictModel) => district.regenciesId === regenciesId
    );

    return districts;
  }
}
