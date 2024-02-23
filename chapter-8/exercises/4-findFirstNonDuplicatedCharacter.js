function findFirstNonDuplicatedCharacter(text) {
  const charactersHashTable = {};
  let firstNonDuplicatedCharacter = "";

  for (let i = 0; i < text.length; i++) {
    if (!charactersHashTable[text[i]]) {
      charactersHashTable[text[i]] = true;
    } else {
      firstNonDuplicatedCharacter = text[i - 1];
      break;
    }
  }

  return firstNonDuplicatedCharacter;
}

findFirstNonDuplicatedCharacter("araraquara");
