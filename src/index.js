import { args } from "./cli/args.js";
import { homedir } from "os";
import { currentlyInMessage } from "./utils/currentlyInMsg.js";
import { commandsListener } from "./commands.js";

const userArgs = args();
if (userArgs.username) {
  console.log(`Welcome to the File Manager, ${userArgs.username}`);
} else {
  process.stdout.write(userArgs.error);
  process.exit(1);
}

const homeDir = homedir();
process.chdir(homeDir);
currentlyInMessage();
commandsListener(userArgs.username, homeDir);
