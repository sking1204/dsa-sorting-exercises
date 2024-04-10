/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length-1){

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
    // Swap without destructuring
    let temp = arr[swapIdx];
    arr[swapIdx] = arr[i];
    arr[i] = temp;
  }
}

// Swap the pivot from the start to the swapPoint
let temp = arr[start];
arr[start] = arr[swapIdx];
arr[swapIdx] = temp;

console.log(arr)

return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

/* if left is greater than right, we know the array is not sorted */


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);          
    quickSort(arr, pivotIndex + 1, right);  
    
  }
  return arr;
}


//[4, 20, 12, 10, 7, 9]

module.exports = {pivot,quickSort};