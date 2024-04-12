// 1.given length and breath a of rectangle, return thee area of rectangle
// function printAreaofRectangle(length,breath){
//     return length*breath;
// }
// const area=(printAreaofRectangle(10,20));
// console.log("area of rectangel is",area);


// 2.take a number and print the square of the number.
// function printSquare(num){
//     return num*num;
// }
// const result=(printSquare(7));
// console.log(result);

// 3.take two number and only print the integer part when a is divided by b
// function printInteger(a,b){
//     let div=a/b
//     let p=Math.floor(div)
//     return p;
// }
// const result=(printInteger(15,2));
// console.log(result);

// 4.take a number and print out thee last digit of the number
// function printLastDigit(num){
//     let p=num%10;
//     return p;
// }
// const result=(printLastDigit(678));
// console.log(result);

// 5.take a number and find the cube of that number
// function printCube(num){
//     return num**3;
// }
// const result=(printCube(8));
// console.log(result);
 
// 6.take a three digit number and print the reverse of that number.
// function printReverse(num){
//     let add=0
//         while(num>0){
//             let p=num%10;
//             add=add*10+p;
//             num=Math.floor(num/10)
//         }
//         return add;
// }
// const result=(printReverse(576));
// console.log(result);

// // 7.take a number and print out the first digit of the number.
// function printFirstDigit(num){
//     while(num>0){
//         if(num<10){
//             return num;
//         }
//         num=Math.floor(num/10);
//     }
//     return q;
    
// }
// const result =(printFirstDigit(365));
// console.log(result);

// 8.take a number and return the sum  of the first and last  digit.
function printSum(num){
    let r=num%10;
    while(num>=10){
        
        num=Math.floor(num/10);
    }
     return r+num;
}
console.log(printSum(44755));



// 9.take a salary of five employees and print the average salary of all the employees.
// function printAverage(s1,s2,s3,s4,s5){
//     let avg=s1+s2+s3+s4+s5/5;
//     return avg;
// }
// const result=(printAverage(12,46,67,79,69));
// console.log(result);

// 10. take two  number and swap them 
// function printSwap(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("a:",a,"b:",b);
// }

// printSwap(5,7);
