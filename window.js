var personName = 'Timittra'; // global variable
function add(num1, num2){ //global function
    var result = num1 + num2; 
    // result = num1 + num2; here the keyword var is not used, so implicitly we make it global
    // window.result = num1+ num2;  also make it global
    // console.log('result is', result); local variable scope
    console.log("Call from inside", personName); 
    function double(num){ //local function
        return num * 2; 
    }
    var total = double(result); 
    return total; 
}
// console.log("Call from outside before calling function", result);  while result is global from local and calls before function call then it is error
var sum = add(13, 21); 
console.log(sum); 
// console.log("Call from outside", result); but this is not error as the function is already called while result is global from local. 