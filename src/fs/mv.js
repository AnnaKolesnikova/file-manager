import { getPath } from "../utils/getPath.js";
import * as helpers from "../utils/helpers.js";
import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";

export const mv = async (enteredPath, movePath) => {
  try {
    const filePath = getPath(enteredPath);
    const pathExists = helpers.doesfileExist(enteredPath);
    const filePathToMove = getPath(movePath);

    if (pathExists) {
      const rs = createReadStream(filePath);
      const ws = createWriteStream(filePathToMove);
      rs.pipe(ws);
      await rm(filePath);
      console.log(`The file ${filePath} was successfully moved!`)
    } else {
      console.log('else', helpers.invalidInput);
    }
  } catch (err) {
    console.log('err', helpers.errorMessage);
  }
};
