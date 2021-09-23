const horizontalCheck = (letters, word) => {
  // convert each horizontal row array
  // of letters matrix to a string
  // and add it to a array of strings
  const horizontalJoin = letters.map(ls => ls.join(''));

  // reverse the search word to make backwards search
  const reverseWord = word.split('').reverse().join('');

  for (let l of horizontalJoin) {
    // compare the search word to each row string
    if (l.toLowerCase().includes(word.toLowerCase())) {
      // and if it is present in the row string return true
      return true;
    }

    // search backwards
    if (l.toLowerCase().includes(reverseWord.toLowerCase())) {
      // and if it is present in the row string return true
      return true;
    }
  }
  // after comparing with all row-strings
  // if the search word is not found return false
  return false;
};

const transpose = function(matrix) {
  let result = [];
  // loop through given matrix
  // first for row length to get result rows
  for (let i = 0; i < matrix[0].length; i++) {
    // create temp row array
    let row = [];
    // loop through all the rows at current column
    // to populate the result row
    for (let j = 0; j < matrix.length; j++) {
      // push entries to position: column, row
      row.push(matrix[j][i]);
    }
    // push row to result array
    result.push(row);
  }
  // return result
  return result;
};

const verticalCheck = (letters, word) => {
  // first transpose the given letters matrix
  // so that each vertical columns of letters
  // becomes the horizontal row arrays
  let transposeLetters = transpose(letters);

  // check the search word in the transpose matrix
  // in each horizontal array for all row arrays
  let result = horizontalCheck(transposeLetters, word);

  // return the result of vertical word search
  return result;
};

const wordSearch = (letters, searchWord) => {

  let word = searchWord.trim();
  // search horizontaL
  if (horizontalCheck(letters, word)) {
    // return true if found
    return true;
  }

  // search vertically
  if (verticalCheck(letters, word)) {
    // return true if found
    return true;
  }

  // word not found horizontally or vertically
  return false;
};

module.exports = wordSearch;