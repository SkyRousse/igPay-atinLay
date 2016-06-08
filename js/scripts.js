// JavaScript/jQuery Business Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    var english = $("input#english").val();
    var englishArray = english.split(" ");
    console.log(englishArray);
// var translate = function(word) {
//   if () {
//     return true;
//   } else {
//     return false;
//   }
// };

// JavaScript/jQuery User Interface Logic

    var word = $("input#english").val();
    // var result = leapYear(year);

    $(".translation").text(word);

    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    // alert("Great job!");
    $("#result").show();
  });
});
