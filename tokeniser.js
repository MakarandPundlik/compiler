import fs from "fs";

export const getTokens = (input) => {
  const tokens = [];
  let index = 0;
  while (index < input.length) {
    const token = input[index];
    if (/\s/.test(token)) {
      index++;
      continue;
    }
    //if digit put it as num
    else if (/\d/.test(token)) {
      //check how many are there
      let num = "";
      while (index < input.length && /\d/.test(input[index])) {
        num += input[index];
        index++;
      }
      index--;
      tokens.push({ type: "number", value: num });
    }

    //if operation put it as operation
    else if (/[a-z]/.test(token)) {
      let operation = "";
      while (index < input.length && /[a-z]/.test(input[index])) {
        operation += input[index];
        index++;
      }
      index--;

      tokens.push({ type: "operation", value: operation });
    }

    //if paranthesis put it as parenthesis
    else if (token === "(" || token === ")")
      tokens.push({ type: "paran", value: token });

    index++;
  }

  return tokens;
};
