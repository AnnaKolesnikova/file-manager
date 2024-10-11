import fs from "fs/promises";

const doesfileExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const errorMessage = "Operation failed";

const invalidInput = "Invalid input!";

const doesntExist = "File doesn't exist! An error occured";

export { doesfileExist, errorMessage, invalidInput, doesntExist };
