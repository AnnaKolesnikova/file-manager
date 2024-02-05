import fs, { readdir } from "fs/promises";
import path from "path";
import * as helpers from "../utils/helpers.js";

export const ls = async () => {
  try {
    const folder = process.cwd();
    const folderContents = [];
    const files = await readdir(folder, { withFileTypes: true });
    await Promise.allSettled(
      files.map(async (file) => {
        const filePath = path.resolve(folder, file.name);
        const fileStats = await fs.stat(filePath);
        let fileData = {};
        fileStats.isFile()
          ? (fileData = { Name: file.name, Type: "file", Size: fileStats.size })
          : (fileData = { Name: file.name, Type: "directory" });
        folderContents.push(fileData);
      })
    );
    folderContents.sort((a, b) =>
      a.Type > b.Type ? 1 : a.Type === b.Type ? (a.Name > b.Name ? 1 : -1) : -1
    );
    console.table(folderContents);
  } catch (error) {
    console.log(helpers.errorMessage);
  }
};
