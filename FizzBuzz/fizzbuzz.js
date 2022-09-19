function fizzbuzz(limit) {
  if (typeof limit !== 'number') {
    throw new Error('limit must be a positive integer');
  }

  if (arguments.length !== 1) {
    throw new Error('accepts 1 positive integer argument');
  }
}

module.exports = fizzbuzz;
