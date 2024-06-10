const arrSize=20;
let min = 1;
let max = 100; 
let numArr = [];

for (let i = 0; i <= arrSize; i++) {
    numArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Array size - "+arrSize);

for (let i = 0; i <= arrSize; i++) {
    console.log("["+i+"]"+" - "+numArr[i]);
}
//numArr.some() - for 7
for (let i = 0; i <= arrSize; i++) {
    if(numArr[i]%7==0)
        {
            console.log("The number is a multiple of 7 is - "+numArr[i]+" index - "+i);
        }
}

numArr.sort((a, b) => b - a);
console.log("Sorted arr!");
for (let i = 0; i <= arrSize; i++) {
    console.log("["+i+"]"+" - "+numArr[i]);
}

console.log("Added zero!");
//numArr.fill() - fill array
for (let i = arrSize/2; i <= arrSize; i++) 
{
    numArr[i]=0;
}
for (let i = 0; i <= arrSize; i++) {
    console.log("["+i+"]"+" - "+numArr[i]);
}

console.log("Delete first 3 numbers in arr!");
numArr.splice(0,3);
for (let i = 0; i <= arrSize; i++) {
    console.log("["+i+"]"+" - "+numArr[i]);
} 

//N7
numArr.filter()


//console.log("New array!");
//for (let i = 1; i < arrSize-1; i++) 
//{
//    console.log("["+i+"]"+" - "+numArr[i]);
//} 

let countOfEvenNumbers=0;
for (let i = 0; i <= arrSize; i++) {
    if(numArr[i]%2==0)
        {
            countOfEvenNumbers++;
        }
} 
console.log("Count of even numbers - "+countOfEvenNumbers);
