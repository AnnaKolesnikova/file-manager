import { createReadStream } from "fs";
import { getPath } from "../utils/getPath.js";
import { currentlyInMessage } from "../utils/currentlyInMsg.js";
import { EOL } from "os";
import * as helpers from "../utils/helpers.js";

export const cat = async (pathToFile) => {
  try {
    const filePath = getPath(pathToFile);

    if (await helpers.doesfileExist(filePath)) {
      const rs = await createReadStream(filePath);

      rs.on("error", () => {
        console.log(helpers.errorMessage);
      });

      rs.on("data", (chunk) => {
        process.stdout.write(chunk);
      });

      rs.on("end", () => {
        console.log(EOL);
        currentlyInMessage();
      });
    } else {
      console.log(helpers.errorMessage);
    }
  } catch (err) {
    console.error(err);
  }
};
