import os from "os";

export const osInfo = (argument) => {
  switch (argument) {
    case "--EOL":
      console.log(JSON.stringify(os.EOL));
      break;
    case "--homedir":
      console.log(os.homedir());
      break;
    case "--username":
      console.log(os.userInfo().username);
      break;
    case "--architecture":
      console.log(os.arch());
      break;
    case "--cpus":
      const cpusInfo = os.cpus().map((cpu) => {
        return {
          model: cpu.model,
          "clock rate (GHz)": cpu.speed / 1000,
        };
      });
      console.table(cpusInfo);
      console.log(`CPUS total amount: ${cpusInfo.length}`);
      break;
    default:
      console.log("os", handlers.invalidInput);
      break;
  }
};
