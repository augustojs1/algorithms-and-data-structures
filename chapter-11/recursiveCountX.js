function recursiveCountX(string) {
  if (string.length === 1) {
    if (string[0] === "x") {
      return 1;
    }

    return 0;
  }

  if (string[0] === "x") {
    return recursiveCountX(string[(1, string.length - 1)]) + 1;
  }

  return recursiveCountX(string[(1, string.length)]);
}

console.log(recursiveCountX("axbxcxd"));
