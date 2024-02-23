function findMissingAlphabetLetter(text) {
  let missingLetter = null;

  const alphabetHashTable = {
    a: false,
    " ": false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };

  for (let i = 0; i < text.length; i++) {
    alphabetHashTable[text[i]] = true;
  }

  for (const value in alphabetHashTable) {
    if (!alphabetHashTable[value]) {
      missingLetter = value;
    }
  }

  return missingLetter;
}

findMissingAlphabetLetter("the quick brown box jumps over a lazy dog");
