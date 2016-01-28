
function prime_calc(form) {
var input=parseInt(form.number.value);
if (isNaN(input) || input < 0) {
form.result.value=(form.inputber.value + " is invalid");
}
if (input == 1 || input == 2) {
form.result.value=(input + " is prime!");
}
for (var i=2;i<input;i++) {
if (input % i == 0) {
var prime="yes";
form.result.value=(input + " is not prime.  It is divisible by " + i + ".");
break;
}
if (input % i != 0) var prime="no";
}
if (prime == "no") form.result.value=(input + " is prime!");
} 
