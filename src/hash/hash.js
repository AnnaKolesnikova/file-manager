import { getPath } from "../utils/getPath.js";
import { createReadStream } from "fs";
import { createHash } from "crypto";
import * as helpers from "../utils/helpers.js";

export const hash = async (enteredFile) => {
  try {
    const filePath = getPath(enteredFile);
    const fileExists = helpers.doesfileExist(enteredFile);

    if (fileExists) {
      const fileContent = await createReadStream(filePath);
      const hash = createHash("sha256");
      fileContent.pipe(hash).setEncoding("hex").pipe(process.stdout);
      console.log(`The hash for the file ${filePath} created successfully!`);
    } else {
      console.log("hash", helpers.invalidInput);
    }
  } catch (err) {
    throw new Error(err);
  }
};
