import { Stack } from "../stack.js";

function reverseStringWithStack(text) {
  let textLength = text.length;
  let reversedString = "";
  const stack = new Stack();

  for (let i = 0; i < textLength; i++) {
    stack.push(text[i]);
  }

  for (let i = 0; i < textLength; i++) {
    reversedString = reversedString.concat(stack.pop());
  }
}

reverseStringWithStack("abcde");
