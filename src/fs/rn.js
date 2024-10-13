import { getPath } from "../utils/getPath.js";
import { rename } from "node:fs/promises";
import * as helpers from "../utils/helpers.js";

export const rn = async (oldFileName, newFileName) => {
  try {
    const fullPath = getPath(oldFileName);
    const newFilePath = getPath(newFileName);

    if (await helpers.doesfileExist(fullPath)) {
      await rename(fullPath, newFilePath);
      console.log(`${oldFileName} was succesfully renamed to ${newFileName}`);
    } else {
      console.log(helpers.doesntExist);
    }
  } catch (err) {
    console.log(helpers.errorMessage);
  }
};
