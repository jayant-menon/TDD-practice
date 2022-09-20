function removeDuplicates(arr) {
  if (arguments.length !== 1) {
    throw new Error('accepts one array as argument');
  }

  if (Array.isArray(arr) !== true) {
    throw new Error('argument must be of type array');
  }

  const uniqueElements = new Set(arr);

  const filteredArray = arr.filter((item) => {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
      return item;
    }
  });

  return filteredArray;
}

module.exports = removeDuplicates;
