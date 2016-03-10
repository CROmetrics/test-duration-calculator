function stats(
  // ui: https://test-duration-calculator.herokuapp.com/
  existingConversions, // e.g., `5` for 5%
  minImprovement, // e.g., `10` for 10%
  numberVariations, // e.g., `2` for control + 1variation
  percentVisitorsIncluded, // e.g., `100` for 100% for all traffic
  dailyVisitors // e.g., `2000` for 2000 visitors
) {
  var meanSize;
  var stdDev;
  var power = 0.8416;
  var significance = 1.6449;

  meanSize = existingConversions / 100;
  stdDev = Math.sqrt(meanSize * (1 - meanSize));

  var effectSize = meanSize * minImprovement / 100.0;
  var numberOfVariations = parseFloat(numberVariations);
  var percent = parseFloat(percentVisitorsIncluded) / 100;
  var perDayVisit = parseInt(dailyVisitors) * percent;
  var perVariationResult = Math.pow((4) * (stdDev / effectSize), 2);
  var result = perVariationResult * (numberOfVariations);
  result = Math.round(Math.round(result, 0) / perDayVisit);
  return result;
}
