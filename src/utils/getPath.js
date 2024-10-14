import path from "path";

export const getPath = (enteredPath) => {
  const resolvedPath = path.resolve(enteredPath);
  const isFull = path.isAbsolute(resolvedPath);
  return isFull ? resolvedPath : path.join(path.cwd(), enteredPath);
};
