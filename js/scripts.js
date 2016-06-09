// JavaScript/jQuery Business Logic
var vowel = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var illegalCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "|", "\\", "/", "~", "[", "]", "{", "}"];
var allowedPunctuation = [".", "?", "!", ","];

var illegalInput = false;
var multiWord = false;
var stringsArray = [];




function pigLatin(englishArray) {
  debugger;
  englishArray = englishArray.toString().split("");
  for (var index = 0; index < englishArray.length; index++) {
    if (illegalCharacters.includes(englishArray[index])) {
      illegalInput = true;
    }
    else if (englishArray[index] === " ") {
      multiWord = true;
    }
  }
  if (illegalInput) {
    alert("bad input");
  }
  else if (multiWord) {
    stringsArray = englishArray.split(" ");
    var pigArray = [];
    pigArray = stringsArray.map(function(word) {
      return pigTranslator(word);
    });
    var result = pigArray.join(' ');
    return result;
  }
  else {
    // return pigTranslator(string);
  }

  if(englishArray[0] === "a" || englishArray[0] === "e" || englishArray[0] === "i" || englishArray[0] === "o" || englishArray[0] === "u") {
  // pigArray = pigArray.concat(englishArray);
  // // pigArray.push("a", "y");

} else {
  var secondVowel = false;
    for(var index = 0; index < englishArray.length; index += 0) {
      if (englishArray[index] !== vowel[0] && englishArray[index] !== vowel[1] && englishArray[index] !== vowel[2] && englishArray[index] !== vowel[3] && englishArray[index] !== vowel[4]) {
        debugger;
        pigArray.push(englishArray.shift());
      }
      else{
        secondVowel = true;
      }

      if (secondVowel){
        break;

      }
      // pigArray = englishArray.concat(pigArray);
    }
  }
  pigArray.push("a", "y");
  pigArray = englishArray.concat(pigArray);
return pigArray.join("");
console.log(pigArray);
};



// begin JMDelight's code
var inputTranslator = function(input) {
  illegalInput = false;
  multiWord = false;
  for (i = 0; i < string.length; i++) {
    if (illegalCharacters.includes(string[index])) {
      illegalInput = true;
    }
    else if (string[index] === " ") {
      multiWord = true;
    }
    //may want to refactor to have a different default case? else?
  }
  if (illegalInput) {
    alert("bad input");
  }
  else if (multiWord) {
    stringsArray = string.split(" ");
    var pigArray = [];
    pigArray = stringsArray.map(function(word) {
      return pigTranslator(word);
    });
    var result = pigArray.join(' ');
    return result;
  }
  else {
    return pigTranslator(string);
  }
};
//end JMDelight's code



// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();

    var englishString = $("input#english").val();
    var englishLowerCase = englishString.toLowerCase();
    var englishArray = englishLowerCase.split(" ");
    pigArray = pigLatin(englishArray)

    $(".translation").text(pigArray);
    $("#result").show();
  });
});
