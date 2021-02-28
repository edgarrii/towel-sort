
// You should implement your task here.

module.exports = function towelSort (matrix) {
      if (matrix.isArray()) {
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i] == 0) {
          return matrix[i];
        } else {
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
  }
}
