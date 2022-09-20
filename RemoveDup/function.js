function removeDuplicates(arr) {
  if (arguments.length !== 1) {
    throw new Error('accepts one array as argument');
  }

  if (Array.isArray(arr) !== true) {
    throw new Error('accepts one array as argument');
  }
}

module.exports = removeDuplicates;
