// WAP to check if a number is palindrome.


let n1 = 10;
let reverse = 0;

while(n1>0){
    console.log('isPalindrome');
    const d = n1%10;
    reverse = reverse*10 + d;
    n1 = parseInt(26/10);
}

console.log('is not Palindrome');

// WAP to check if a number is armstrong.

function isArmstrong(n1){
    if (n1 < 100 || n1 > 999){
        return false;
    }
}
let n = 0;
let temp = n1
while(temp >0){
    console.log('isArmstrong');
    let digit = temp % 10;
    n1 = parseInt(temp/10);
}
return n === n1

console.log('is not Armstrong');


