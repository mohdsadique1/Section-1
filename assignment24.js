
// write a program to check if a num is perfect square.

let n =10;
let sqrt = n*0.5

if (Number.isInteger(sqrt));{
    console.log('Perfect square');
}

//  WAP to print all perfect squares in range of 50 to 1000;
for (let i = 50; i <= 1000; i++){
    let sqrt = i ** 0.5;
    if (Number.isInteger(sqrt)){
        console.log(i);
    }
}

//  WAP to print all prime numbers;

for (let num = 50; num <= 1000; num++){
    
    let prime = true;

    for (let i =2; i < num; i++){
        if (num % i === 0) {
            // console.log('not prime');
            prime = false;
            break;
        }
    }

    if (prime) console.log(num);

}


// 2. WAP to give grade according to marks 

let num = 45;

if ( num <=100 && num>= 90){
    console.log('A+ Grade');
}
else if (num <=90 && num>= 80){
    console.log('A Grade');
}
else if (num <80 && num>= 70){
    console.log('B+ Grade');
}
else if (num <70 && num>= 60){
    console.log('B Grade');
}
else if (num <60 && num>= 50){
    console.log('C Grade');
}
else if(num <=50 && num>= 0){
    console.log('F');
}