// business logic
// var leapYear = function(year) {
//   if (year === NaN) {
//     return false;
//   }
// };

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    alert("Great job!");
    $("#result").show();
  });
});

// behavior 1 test
// var leapYear = function(year) {
//   return false;
// };

// behavior 2 test
// var leapYear = function(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// behavior 3 test
// var leapYear = function(year) {
//   if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// behavior 3.refactored test
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 != 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// behavior 4 test
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// jQuery User Interface
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     event.preventDefault();
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//     $("#result").text(result);
//   });
// });
