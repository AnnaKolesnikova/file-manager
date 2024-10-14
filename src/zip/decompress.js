import zlib from "zlib";
import { getPath } from "../utils/getPath.js";
import { createReadStream, createWriteStream } from "node:fs";
import * as helpers from "../utils/helpers.js";

export const decompress = async (enteredPath, decompressedPath) => {
  try {
    const unzip = zlib.createUnzip();
    const fileToDecompress = getPath(enteredPath);
    const decompressedFile = getPath(decompressedPath);
    const fileExists = helpers.doesfileExist(fileToDecompress);
    if (fileExists) {
      const source = createReadStream(fileToDecompress);
      const destination = createWriteStream(decompressedFile);
      source.pipe(unzip).pipe(destination);
    } else {
      console.log(helpers.invalidInput, " Try again to decompress the file.");
    }
  } catch (err) {
    console.log(err);
  }
};
