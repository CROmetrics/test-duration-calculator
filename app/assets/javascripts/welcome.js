// Test Duration Calculator

// To do
// Add OUI Dialog for errors
$(function() {
    $("#sample-size-calculator input").on("mousedown keyup", function() {
        validate();
    });
    validate(true);
});

function validate(supress) {
    var errors = "";
    if ($("#existing_conversions").val() === "")
        errors += "- Please enter your expected conversion rate.\n";
    else if (isNaN($("#existing_conversions").val()) || $("#existing_conversions").val() > 100 || $("#existing_conversions").val() <= 0)
        errors += "- Please enter a valid number for the conversion rate.\n";
    if ($("#versions").val() === "")
        errors += "- Please enter the number of combinations you have.\n";
    else if (isNaN($("#versions").val()) || $("#versions").val() <= 0)
        errors += "- Please enter a valid number for the combinations you have.\n";
    if ($("#improvement").val() === "")
        errors += "- Please enter desired change in conversion rate.\n";
    else if (isNaN($("#improvement").val()) || $("#improvement").val() <= 0)
        errors += "- Please enter a valid value for desired change in conversion rate.\n";
    if ($("#percent").val() === "")
        errors += "- Please enter the percentage of visitors to include in the test.\n";
    else if (isNaN($("#percent").val()) || $("#percent").val() <= 0 || $("#percent").val() > 100)
        errors += "- Please enter a valid number for percentage of visitors to include in the test.\n";
    if ($("#visitors").val() === "")
        errors += "- Please enter the average number of visitors on the test page.\n";
    else if (isNaN($("#visitors").val()) || $("#visitors").val() < 0)
        errors += "- Please enter a valid number for the average number of visitors on the test page.\n";
    if (errors.length > 0) {
        if (!supress) {alert(errors);}
        return false;
    } else {
    var result = stats(
      $("#existing_conversions").val(), // existingConversions, // e.g., `5` for 5%
      $("#improvement").val(), // minImprovement, // e.g., `10` for 10%
      $("#versions").val(), // numberVariations, // e.g., `2` for control + 1variation
      $("#percent").val(), // percentVisitorsIncluded, // e.g., `100` for 100% for all traffic
      $("#visitors").val() // dailyVisitors // e.g., `2000` for 2000 visitors
    );
    if (result === 0)
      $("#results").html("Less than a day");
    else
      $("#results").html("<strong>" + result + "</strong> day" + (result > 1 ? "s" : ""));
  }
}
