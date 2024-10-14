import { getPath } from "../utils/getPath.js";
import * as helpers from "../utils/helpers.js";
import { rm } from "node:fs/promises";

export const remove = async (enteredPath) => {
  try {
    const fileToRemove = getPath(enteredPath);
    const fileExists = helpers.doesfileExist(enteredPath);
    if (fileExists) {
      await rm(fileToRemove);
      console.log(`File ${fileToRemove} successfilly deleted!`);
    }
  } catch (err) {
    console.log(err);
  }
};
