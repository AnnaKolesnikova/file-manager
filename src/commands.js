import readline from "readline";

import { up } from "./nav/up.js";
import { cd } from "./nav/cd.js";
import { ls } from "./nav/ls.js";

import * as helpers from "./utils/helpers.js";
import { currentlyInMessage } from "./utils/currentlyInMsg.js";

export const commandsListener = (username, homeDir) => {
  let currentDir = homeDir;
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine
    .on("line", async (line) => {
      try {
        const [command, ...args] = line.trim().split(" ");
        switch (command) {
          case "exit":
          case ".exit":
          case process.exit: {
            console.log(
              `Thank you for using File Manager, ${username}, goodbye!`
            );
            process.exit();
          }
          case "up": {
            currentDir = up(currentDir);
            break;
          }
          case "cd": {
            if (args.length > 0) {
              currentDir = await cd(currentDir, args);
            } else {
              console.log(helpers.invalidInput);
            }
            break;
          }
          case "ls": {
            await ls();
            break;
          }
          case "cat": {
            console.log("cat");
          }
          case "add": {
            console.log("add");
          }
          case "rn": {
            console.log("cp");
          }
          case "cp": {
            console.log("cp");
          }
          case "mv": {
            console.log("mv");
          }
          case "rm": {
            console.log("rm");
          }
          case "hash": {
            console.log("hash");
          }
          case "compress": {
            console.log("compress");
          }
          case "decompress": {
            console.log("decompress");
          }
          default: {
            console.log("default", helpers.invalidInput);
            break;
          }
        }
      } catch (err) {
        console.log("COMMANDS", helpers.invalidInput);
      } finally {
        currentlyInMessage();
      }
    })
    .on("close", () => {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    });
};
