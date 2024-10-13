import { getPath } from "../utils/getPath.js";
import * as helpers from "../utils/helpers.js";
import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";

export const mv = async (enteredPath, movePath) => {
  try {
    const filePath = getPath(enteredPath);
    const pathExists = await helpers.doesfileExist(enteredPath);
    const filePathToMove = getPath(movePath);

    if (pathExists) {
      const rs = createReadStream(filePath);
      console.log("RS: ", filePath);
      const ws = createWriteStream(filePathToMove);
      console.log("WS: ", filePathToMove);

      // wait for stream ending
      await new Promise((resolve, reject) => {
        rs.pipe(ws);
        ws.on("finish", resolve);
        ws.on("error", reject);
        rs.on("error", reject);
      });

      await rm(filePath);
      console.log(`The file ${filePath} was successfully moved!`);
    } else {
      console.log("Invalid input:", helpers.invalidInput);
    }
  } catch (err) {
    console.log("Error:", helpers.errorMessage);
  }
};
