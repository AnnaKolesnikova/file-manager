import path from "path";
import os from "os";
import * as helpers from "../utils/helpers.js";

export const cd = async (currentDir, args) => {
  try {
    const newCurrentDir = path.join(currentDir, args.join(" "));
    const pathExists = await helpers.doesfileExist(newCurrentDir);
    if (pathExists) {
      process.chdir(newCurrentDir);
      return newCurrentDir;
    } else {
      console.log("An error occured while moving between folders!");
      return currentDir;
    }
  } catch (err) {
    console.log(err);
  }
};
