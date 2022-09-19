function fizzbuzz(limit) {
  if (typeof limit !== 'number') {
    throw new Error('limit must be a positive integer');
  }
}

module.exports = fizzbuzz;
