var sd = require('./index')

var data = [2, 4, 4, 4,  5,  5,  7, 9]

// Get mean
console.log(sd.mean(data));

// Standard deviation (N-1)
console.log(sd.standardDeviation(data));

// Standard deviation (N)
console.log(sd.populationStandardDeviation(data))

