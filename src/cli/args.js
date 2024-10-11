export const args = () => {
  try {
    const userArgs = process.argv.slice(2);
    const lastArgument = userArgs[userArgs.length - 1];
    let argsObject = {};

    if (lastArgument && lastArgument.includes("--username=")) {
      const username = lastArgument.replace("--username=", "").trim();
      argsObject = { username: username };
    } else {
      argsObject = {
        error:
          "Please run: `npm run start -- --username=your_username` to start the app",
      };
    }
    return argsObject;
  } catch (err) {
    console.error(err);
  }
};
