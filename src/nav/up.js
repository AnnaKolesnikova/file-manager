import path from "path";
import os from "os";

export const up = async (currentDir) => {
  if (currentDir === os.homedir()) {
    console.log(
      `You are already in your root directory: ${os.homedir()}${os.EOL}`
    );
    return currentDir;
  } else {
    const newCurrentDir = path.join(currentDir, "..");
    process.chdir(newCurrentDir);
    return newCurrentDir;
  }
};
