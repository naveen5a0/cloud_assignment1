
function palindrome() {

var inp = document.getElementById('inputdata').value;
    var len = inp.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (inp[i] !== inp[len - 1 - i]) {
            document.getElementById("result2").value=inp+" is not a palindrome"
            return;
        }
    }
    document.getElementById("result2").value=inp+" is a palindrome"
    return;
} 
