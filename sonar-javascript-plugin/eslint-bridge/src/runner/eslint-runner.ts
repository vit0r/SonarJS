import { Linter } from "eslint";

export function processRequest(inputString: string) {
  const input = JSON.parse(inputString);
  const eslint = new Linter();
  return input.filepaths.map((filepath: string) => {
    return eslint.verify(filepath, {}, filepath);
  });
}
