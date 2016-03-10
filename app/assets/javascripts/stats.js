function stats(
  // ui: https://test-duration-calculator.herokuapp.com/
  existingConversions, // e.g., `5` for 5%
  minImprovement, // e.g., `10` for 10%
  numberVariations, // e.g., `2` for control + 1variation
  percentVisitorsIncluded, // e.g., `100` for 100% for all traffic
  dailyVisitors // e.g., `2000` for 2000 visitors
) {

  var meanSize = existingConversions / 100.0;
  var effectSize = meanSize * minImprovement / 100.0;
  var variantSize = meanSize + effectSize;
  var variance = meanSize * (1 - meanSize) + variantSize * (1 - variantSize);
  var significance = 90.0;
   
  var perVariationResult = 2.0 * ( significance / 100.0 ) * variance / Math.pow(effectSize,2) * Math.log(1 + Math.sqrt(variance) / effectSize)
  
  var numberOfVariations = parseFloat(numberVariations);
  var percent = parseFloat(percentVisitorsIncluded) / 100;
  var perDayVisit = parseInt(dailyVisitors) * percent;

  var result = perVariationResult * (numberOfVariations);
  result = Math.round(result.toPrecision(2) / perDayVisit);
  return result;
}
