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
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz');
      continue;
    }

    if (i % 3 === 0) {
      arr.push('fizz');
      continue;
    }
    if (i % 5 === 0) {
      arr.push('buzz');
      continue;
    }

    arr.push(i);
  }

  return arr;
}

module.exports = fizzbuzz;
