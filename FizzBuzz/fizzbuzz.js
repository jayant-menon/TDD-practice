function fizzbuzz(limit) {
  if (arguments.length !== 1) {
    throw new Error('accepts 1 positive integer argument');
  }

  if (typeof limit !== 'number') {
    throw new Error('limit must be a positive integer');
  }

  if (limit < 1) {
    throw new Error('limit must be a positive integer');
  }

  let arr = [];
  for (let i = 1; i <= limit; i++) {
    arr.push(i);
  }

  return arr;
}

module.exports = fizzbuzz;
