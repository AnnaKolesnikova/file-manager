import { writeFile } from "fs/promises";
import { getPath } from "../utils/getPath.js";
import * as helpers from "../utils/helpers.js";

export const add = async (enteredPath) => {
  const fullPath = getPath(enteredPath);
  try {
    await writeFile(fullPath, "");
    console.log(`File ${enteredPath} was successfully created.`);
  } catch (err) {
    console.log(helpers.errorMessage);
  }
};
