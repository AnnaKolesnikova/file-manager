import zlib from "zlib";
import { getPath } from "../utils/getPath.js";
import { createReadStream, createWriteStream } from "node:fs";
import * as helpers from "../utils/helpers.js";

export const compress = async (fileToCompress, compressedFile) => {
  try {
    const gzip = zlib.createGzip();
    const fileToCompressPath = getPath(fileToCompress);
    const compressedFilePath = getPath(compressedFile);
    const fileExists = helpers.doesfileExist(fileToCompressPath);

    if (await fileExists) {
      const source = createReadStream(fileToCompressPath);
      const destination = createWriteStream(compressedFilePath);
      source.pipe(gzip).pipe(destination);
      console.log(`The file ${fileToCompressPath} successfully compressed!`);
    } else {
      console.log(helpers.invalidInput, " Try again to compress the file.");
    }
  } catch (err) {
    console.log(err);
  }
};
