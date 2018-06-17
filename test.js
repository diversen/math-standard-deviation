var sd = require('./index')

var data = [14,15,9,1]

// Get mean
console.log(sd.mean(data));

// Standard deviation (N-1)
console.log(sd.standardDeviation(data));

// Standard deviation (N)
console.log(sd.populationStandardDeviation(data))

