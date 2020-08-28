// Code your solution here!

function printString(myString){
   console.log(myString[0])

    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {

        return true
    }
}


function reverseString(string) {
    if (string === "") {
      return "";
    } else {
    // recursive function is calling on a sub-problem
      return reverseString(string.substr(1)) + string.charAt(0);
    }
  }

  function isPalindrome(string){


  }

  function addUpTo(arr){

  }

  function maxNum(arr){

  }

  function arrIncludes(arr, element){
      
  }