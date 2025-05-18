import fs from "fs";
import { getTokens } from "./tokeniser.js";
import { parser } from "./parser.js";
import { execute } from "./executor.js";

try {
  const filePath = process.argv[2];
  const input = fs.readFileSync(filePath, "utf-8");
  const tokens = getTokens(input);
  const parsedInput = parser(tokens);
  console.log(execute(parsedInput));
} catch (error) {
  console.error(error);
}
