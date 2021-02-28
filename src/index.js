
// You should implement your task here.

module.exports = function towelSort (matrix) {
     if (Array.isArray(matrix) == true) {
    if (matrix.length == 0) {
      return [];
    }
      let mass = [];
      mass = matrix[0];
      for (let i = 1; i < matrix.length; i++) {
        if (i % 2 == 0) {
           mass = mass.concat(matrix[i]);
        } else mass = mass.concat(matrix[i].reverse());
      }
    return mass;
  }
}
