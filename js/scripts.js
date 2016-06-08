// JavaScript/jQuery Business Logic
// var translate = function(word) {
//   if () {
//     return true;
//   } else {
//     return false;
//   }
// };

// JavaScript/jQuery User Interface Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    var word = $("input#english").val();
    // var result = leapYear(year);

    $(".translation").text(word + "ay");

    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    alert("Great job!");
    $("#result").show();
  });
});
