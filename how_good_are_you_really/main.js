function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, cur) => acc + cur, yourPoints) / ++classPoints.length < yourPoints;

  // return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length; // a diffrent point of view, but not sure is a correct answer in terms of math.
}

module.exports = betterThanAverage;
