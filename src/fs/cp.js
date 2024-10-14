import { getPath } from "../utils/getPath.js";
import * as helpers from "../utils/helpers.js";
import { createReadStream, createWriteStream } from "fs";

export const cp = async (enteredPath, copyPath) => {
  try {
    const filePath = getPath(enteredPath);
    const pathExists = helpers.doesfileExist(enteredPath);
    const filePathCopy = getPath(copyPath);
    const copyPathExists = helpers.doesfileExist(copyPath);

    if (pathExists && copyPathExists) {
      const rs = createReadStream(filePath);
      const ws = createWriteStream(filePathCopy);
      rs.pipe(ws);
      console.log(`The file ${filePath} was successfully copied!`);
    } else {
      console.log(helpers.invalidInput);
    }
  } catch (err) {
    console.log(helpers.errorMessage);
  }
};
