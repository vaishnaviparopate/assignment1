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

// second task
// 1. Write a program that checks if a given number is even or odd.
// function printEvenOdd(num){
//     if (num%2==0){
//         return "it is even number"
//     }
//     return "it is odd number"
// }
// console.log(printEvenOdd(57));

// 2. Create a function that takes two numbers as parameters and returns the larger one.
// function printLarge(num1,num2){
//     if (num1>num2){
//         return num1;
//     }
//     return num2;
// }
// console.log(printLarge(6,8));

// 3. Write a function that determines if a given year is a leap year.
function printLeapYear(num){
    if (num%400==0){
        return `${num} is leap year`;
    }
    else if(num %4==0 && num%100!=0){
        return`${num} is not leap year`;
    }
    return "not leap year";
      
}
console.log(printLeapYear(2022));

// 4. Implement a program that checks whether a given character is a vowel or consonant.
// function checkVowel(ch){
//     if (ch=='a'|| ch=='e' || ch=='i' || ch=='o' ||ch=='u' && ch=='A'|| ch=='E' || ch=='I' || ch=='O' ||ch=='U'){
//         return "it is vowel"
//     }
//     return "it is consonant"
// }
// console.log(checkVowel("O"));

// 5. Create a function that takes three numbers as input and returns the largest among them.
// function printLargest(num1,num2,num3){
//     if (num1>num2 && num1>num3){
//         return num1;
//     }
//     else if(num2>num1 && num2>num3){
//         return num2;
//     }
//     return num3;
// }
// console.log(printLargest(4,8,3));

// 6. Write a program that checks if a given number is positive, negative, or zero.
// function printNummber(num){
//     if(num<0){
//         return "it is negative number"
//     }
//     else if(num==0){
//         return "it is zero"
//     }
//     return "it is positive number"
// }
// console.log(printNummber(-8));

// 7. Implement a function that calculates the grade of a student based on their score.
    // function printScore(score){
    //     if(score>=90){
    //         return "A";
    //     }
    //     else if(score>=80){
    //         return "B";
    //     }
    //     else if(score>=70){
    //         return "C"
    //     }
    //     else if(score<=60 && score<60){
    //         return "D"
    //     }
    // }
    // console.log(printScore(78));

//  8. Create a program that determines if a given string is a palindrome
function palindrome(s){
    let l= s.length
    let j=l-1
    for(let i=0;i<l/2;i++){
        if(s[i]!=s[j]){
            return false;
        }
        j=j-1;
    }
    return true;
}
const str ='man';
const ans = palindrome(str)
if(ans){
    console.log('palindrome');
}
else{
    console.log("not palindrome")
}

// 9. Write a function that checks whether a person is eligible to vote based on their age.
// function checkAge(age){
//     if(age>=18){
//         return "eligible for vote"
//     }
//     return "not eligible for vote"
// }
// console.log(checkAge(78));

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
// function printAngle(s1,s2,s3){
//     if(s1==s2 && s2==s3 ){
//         return "equilateral triangle";
//     }
//     else if(s1==s2 && s1==s3 && s2==s3){
//         return "isosceles triangle"
//     }
//     return "scalene triangle"
// }
// console.log(printAngle(69,90,90));

// 8. Create a program that determines if a given string is a palindrome.
// function printPalindrome(num){
//     let add=0
//     let  num1=num;
//     while(num>0){
//         let p=num%10;
//         add=add*10+p;
//         num=Math.floor(num/10)
        
//     }
//     if (num==num1){
//         return "it is palindrome";
//     }
//     return "it is not palindrome"
    
// }
// console.log(printPalindrome(151))


















