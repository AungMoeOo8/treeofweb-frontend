
/**
 * 
 * @param {String} word 
 * @returns 
 */
function toCapital(word) {
  if (typeof word === "string") {
    const firstLetter = word[0];
    return word.replace(firstLetter, firstLetter.toUpperCase());
  }
  throw "Must be a String!";
}

/**
 * 
 * @param {String} word 
 * @returns 
 */
function toSmall(word) {
  if (typeof word === "string") {
    const firstLetter = word[0];
    return word.replace(firstLetter, firstLetter.toLowerCase());
  }
  throw "Must be a String!";
}

export { toCapital, toSmall };
