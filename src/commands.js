import readline from "readline";

import { up } from "./nav/up.js";
import { cd } from "./nav/cd.js";
import { ls } from "./nav/ls.js";

import { cat } from "./fs/cat.js";
import { add } from "./fs/add.js";
import { rn } from "./fs/rn.js";
import { cp } from "./fs/cp.js";
import { mv } from "./fs/mv.js";
import { remove } from "./fs/rm.js";

import { osInfo } from "./os/osInfo.js";

import { hash } from "./hash/hash.js";

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
            if (args.length > 0) {
              const filePath = args.join(" ").toString();
              await cat(filePath);
            } else {
              console.log(helpers.invalidInput);
            }
            break;
          }
          case "add": {
            if (args.length > 0) {
              const filePath = args.join(" ").toString();
              await add(filePath);
            } else {
              console.log(helpers.errorMessage);
            }
            break;
          }
          case "rn": {
            if (args.length > 0) {
              const filePath = args[0].toString();
              const newFilePath = args[1].toString();
              await rn(filePath, newFilePath);
            } else {
              console.log(helpers.invalidInput);
            }
            break;
          }
          case "cp": {
            if (args.length > 0) {
              const filePath = args[0].toString();
              const filePathCopy = args[1] ? args[1].toString() : filePath;
              await cp(filePath, filePathCopy);
            } else {
              console.log(helpers.invalidInput);
            }
            break;
          }
          case "mv": {
            if (args.length > 0) {
              const filePath = args[0].toString();
              const filePathMove = args[1] ? args[1].toString() : filePath;
              console.log(filePath, filePathMove);
              await mv(filePath, filePathMove);
            } else {
              console.log("mv", helpers.invalidInput);
            }
            break;
          }
          case "rm": {
            if (args.length === 1) {
              const filePath = args[0];
              await remove(filePath);
            } else {
              console.log(helpers.invalidInput);
            }
            break;
          }
          case "os": {
            if (args.length > 0 && args[0].startsWith("--")) {
              osInfo(args[0]);
            }
            break;
          }
          case "hash": {
            if (args.length > 0) {
              const filePath = args.join(" ");
              await hash(filePath);
            }
            break;
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
