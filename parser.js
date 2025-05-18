import fs from "fs";

export const parser = (tokens) => {
  let current = 0;

  function walk() {
    let token = tokens[current];

    if (token.type === "number") {
      current++;
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }

    if (token.type === "operation") {
      let node = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };

      token = tokens[++current]; // Expect '('
      if (token.type !== "paran" || token.value !== "(") {
        throw new SyntaxError("Expected ( after operation name");
      }

      token = tokens[++current];

      while (!(token.type === "paran" && token.value === ")")) {
        node.params.push(walk());
        token = tokens[current];
      }

      current++; // Skip ')'
      return node;
    }

    throw new TypeError(`Unexpected token type: ${token.type}`);
  }

  return walk();
};
