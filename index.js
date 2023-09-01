// Ans of no 1
let ques1 = document.getElementById("q1")
   function createCounter(){
    var counter = 0;

    function increaseCounter() {
        return counter += 1;
    };

    return increaseCounter;
}

var counterFunction = createCounter();
 alert(counterFunction());
 alert(counterFunction());
 alert(counterFunction());
 alert(counterFunction());
 ques1.textContent = `Counter value: ${counterFunction()}
 Counter value: ${counterFunction()}
 Counter value: ${counterFunction()}
 Counter value: ${counterFunction()}`;
 console.log(ques1)

//  Ans of no 2
let ques2 = document.getElementById("q2")
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    ques2.textContent +=` ${count}\n `; // log linear count
    console.log(count)
  }
  ques2.textContent += `${count}\n`// log outer count
  console.log(count)
})();

// Ans of no 3

let ques3 = document.getElementById("q3")
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
    ques3.textContent += ' ' + i + '\n';
      console.log(i); // Will log 0 ,1, 2
    }, 1000);
  }

//   Ans of no 4


function calculateRectangleArea(length) {
    function innerFunction(breadth) {
        return length * breadth;
    }

    return innerFunction;
}

const length = 10;
const calculateArea = calculateRectangleArea(length);
const breadth = 5;
const area = calculateArea(breadth);

document.getElementById("q4").innerHTML = "The area of the rectangle is: " + area;
console.log("The area of the rectangle is: " + area)

// Ans of no 5

function createCounter() {
    let counter = 0; 

    function increaseCounter() {
        counter++; 
        return counter; 
    }

    return increaseCounter; 
}


const incrementCounter = createCounter();
const firstIncrement = incrementCounter();
const secondIncrement = incrementCounter();
const thirdIncrement = incrementCounter();

document.getElementById("q5").innerHTML = "Counter value: " + thirdIncrement;
console.log("Counter value: " + thirdIncrement)

// Ans of no 6

var a = 12;
(function () {
  alert(a);
  let ques6 = document.getElementById("q6")
document.getElementById("q6").innerHTML = "The value of 'a' is: " + a;
})();
console.log(a)


// Ans of no 7

var a = 10;

var x = (function () {
    var a = 12;
    return function () {
        var outputElement = document.getElementById("q7");
    
        outputElement.textContent = "The value of 'a' is: " + a;
    };
})();

x();

// Ans of no 8

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    var result =
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar;
        document.getElementById("q8").innerHTML = result
        console.log(result)
    
    })(456);
})(123);