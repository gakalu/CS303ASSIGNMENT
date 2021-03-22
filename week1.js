"use strict"
exports.sum= sum;
exports.multiply= multiply;
exports.maxOfThree=maxOfThree;
exports.findLongestWord=findLongestWord;
exports.reverseArray=reverseArray;
exports.scoreExams=scoreExams;
// //Q1
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number} Maximum
 */
function maxOfThree(a,b,c){
    if(a>b&&a>c){
        return a;
    }else if(b>c){
        return b;
    }else{
        return c;
    }
}
console.log(maxOfThree(40,50,10));
//=============================================================================================
// Q2
/**
 * 
 * @param {number} arr 
 * @returns {number} sum and product
 */
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
     sum+=arr[i];
    }
    return sum;

}
function multiply(arr){
    let product=1
    for(let i=0;i<arr.length;i++){
        product*=arr[i];
       } 
       return product;  
}

// =====================================================================================
// Q3
function findLongestWord(arr){
    let longest=arr[0].length;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>longest);
            longest=arr[i]
    }
    return longest;
}
console.log(findLongestWord(["Getachew","Meron","Akalu","Hailemariam"]));
console.log(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));
//====================================================================================
// Q4
function reverseArray(arr){
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
} 
console.log(reverseArray(["A","B","C"]));
function reverseArrayInPlace(arr){
    for(let i=0;i<arr.length;i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-(i+1)]
    arr[arr.length-(i+1)]=temp;
}
return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]));
//=====================================================================================
//Q5
function scoreExams(studentAnswers,correctAnswers){
    let narr=[];  
for(let i=0;i<studentAnswers.length;i++){
     narr.push(match(studentAnswers[i],correctAnswers));
    }
    return narr;
}
function match(arr1,arr2){
    let count=0;
    for(let i=0;i<arr1.length;i++){
            if(arr1[i]===arr2[i])
            count++;
        }
    return count;
}
const studentAnswers1 = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers1 = [3, 1, 2];
console.log(scoreExams(studentAnswers1,correctAnswers1));


