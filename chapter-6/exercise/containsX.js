// Original function
// function containsX(string) {
//   let foundX = false;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "X") {
//       foundX = true;
//     }
//   }

//   return foundX;
// }

// My implementation
function containsX(string) {
  let foundX = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      return true;
    }
  }

  return foundX;
}
