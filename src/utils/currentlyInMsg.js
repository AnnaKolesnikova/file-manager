import os from "os";

export const currentlyInMessage = () => {
  const cwd = process.cwd();
  console.log(`You are currently in ${cwd}${os.EOL}`);
};
