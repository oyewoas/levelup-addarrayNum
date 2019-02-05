
// Using ES6 Reduce
const  addArray = (inputArray) => {
     const ifArray = Array.isArray(inputArray);
     if (ifArray)  {
         return inputArray.reduce( (a, b) => {
             return a + b
         }, 0);
     }
};

console.log(addArray([1,2,3]));


// Using for loop
const sumArray =  (inputArray) => {
    const ifArray = Array.isArray(inputArray);
    if (ifArray) {
        let totalSum = 0;
        for (let i=0; i < inputArray.length; i++) {
            totalSum+=inputArray[i];
        }
        return totalSum;
    }

};

console.log(sumArray([1,2,3,4]));


