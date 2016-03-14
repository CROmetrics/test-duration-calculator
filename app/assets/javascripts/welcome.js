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

    var errors = 0;
    $("#existing_conversions, #versions, #improvement, #percent, #visitors").removeClass("error");
    if (isNaN($("#existing_conversions").val()) || $("#existing_conversions").val() > 100 || $("#existing_conversions").val() <= 0 || $("#existing_conversions").val() === "") {
        $("#existing_conversions").addClass("error");
        errors++;
    }
    if (isNaN($("#versions").val()) || $("#versions").val() <= 0 || $("#versions").val() === "") {
        $("#versions").addClass("error");
        errors++;
    }
    if ($("#improvement").val() === "" || isNaN($("#improvement").val()) || $("#improvement").val() <= 0) {
        $("#improvement").addClass("error");
        errors++;
    }
    if ($("#percent").val() === "" || isNaN($("#percent").val()) || $("#percent").val() <= 0 || $("#percent").val() > 100) {
        $("#percent").addClass("error");
        errors++;
    }
    if ($("#visitors").val() === "" || isNaN($("#visitors").val()) || $("#visitors").val() < 0) {
        $("#visitors").addClass("error");
        errors++;
    }
    if (errors > 0) {
        $("#results").html("<strong>" + Infinity + "</strong> days");
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
