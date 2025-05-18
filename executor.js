export const execute = (input) => {
  console.log(input, "-----------");
  const firstOp = input.params[0];
  const secondOp = input.params[1];
  if (firstOp.type === "NumberLiteral" && secondOp.type === "NumberLiteral") {
    const firstNum = Number.parseInt(firstOp.value);
    const secondNum = Number.parseInt(secondOp.value);
    if (input.name === "sub") return firstNum - secondNum;
    else if (input.name === "div") return Math.floor(firstNum / secondNum);
    else if (input.name === "mul") return firstNum * secondNum;
    else if (input.name === "add") return firstNum + secondNum;
    throw new Error(
      "Currently we support only \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division"
    );
  } else if (
    firstOp.type === "NumberLiteral" &&
    secondOp.type === "CallExpression"
  ) {
    const firstNum = Number.parseInt(firstOp.value);

    if (input.name === "sub") return firstNum - execute(secondOp);
    else if (input.name === "div")
      return Math.floor(firstNum / execute(secondOp));
    else if (input.name === "mul") return firstNum * execute(secondOp);
    else if (input.name === "add") return firstNum + execute(secondOp);
    throw new Error(
      "Currently we support only \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division"
    );
  } else if (
    firstOp.type === "CallExpression" &&
    secondOp.type === "NumberLiteral"
  ) {
    const secondNum = Number.parseInt(secondOp.value);

    if (input.name === "sub") return execute(firstOp) - secondNum;
    else if (input.name === "div")
      return Math.floor(execute(firstOp) / secondNum);
    else if (input.name === "mul") return execute(firstOp) * secondNum;
    else if (input.name === "add") return execute(firstOp) + secondNum;
    throw new Error(
      "Currently we support only \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division"
    );
  } else if (
    firstOp.type === "CallExpression" &&
    secondOp.type === "CallExpression"
  ) {
    if (input.name === "sub") return execute(firstOp) - execute(secondOp);
    else if (input.name === "div")
      return Math.floor(execute(firstOp) / execute(secondOp));
    else if (input.name === "mul") return execute(firstOp) * execute(secondOp);
    else if (input.name === "add") return execute(firstOp) + execute(secondOp);
    throw new Error(
      "Currently we support only \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division"
    );
  }
  throw new Error("Currently this compiler supports only two operands");
};
