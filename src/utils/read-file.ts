import { readFile } from "fs/promises";

export const readJSONFile = async (filePath: string) => {
  try {
    const data = await readFile(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error}`);
  }
};
