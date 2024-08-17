function outputNumbers() {
    let number = 20;
    while (number >= 20 && number <= 30) {
        console.log(number);
        number += 0.5;
    }
}

function calculateTheCurrency() {
    const dollar = 26;
    let step = 10;
    do {
        step += 10;
        console.log(`${step} dollars = ${step * dollar} uah.`)
    } while (step < 100) ;
}

function searchNumbers() {
    let N = parseInt(prompt('Enter an integer number.'));

    for (let i = 1; i <= 100; i++) {
        if (i * i < N) {
            console.log(`Square of ${i} = ${i ** 2}`);
        }
    }
}

function checkPrimeNumber(){
    let integerNumber = parseInt(prompt('Enter integer number.'));
    let isPrime = true;
    for (let i=2; i<integerNumber/2; i++){
        if (integerNumber % i ===0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log('Number is prime.')
    } else {
        console.log('Number is not prime.');
    }
}