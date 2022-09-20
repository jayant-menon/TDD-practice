function removeDuplicates(arr) {
  if (arguments.length !== 1) {
    throw new Error('accepts one array as argument');
  }

  if (Array.isArray(arr) !== true) {
    throw new Error('argument must be of type array');
  }
}

module.exports = removeDuplicates;
