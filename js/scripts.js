// JavaScript/jQuery Business Logic
var pigArray = [];
// var vowel = ["a", "e", "i", "o", "u"];
function pigLatin(englishArray) {
  if(englishArray[0] === "a" || englishArray[0] === "e" || englishArray[0] === "i" || englishArray[0] === "o" || englishArray[0] === "u") {
  pigArray = pigArray.concat(englishArray);
  pigArray.push("a", "y");

} else {
    for(var index = 0; index < englishArray.length; index += 1) {
      englishArray.push(englishArray.shift());
      pigArray = pigArray.concat(englishArray);
      pigArray.push("a", "y");
    }
  }
return pigArray.join("");
console.log(pigArray);
};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();

    var englishString = $("input#english").val();
    var englishLowerCase = englishString.toLowerCase();
    var englishArray = englishLowerCase.split("");
    pigArray = pigLatin(englishArray)

    $(".translation").text(pigArray);
    $("#result").show();
  });
});
