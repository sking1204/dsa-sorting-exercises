


function selectionSort(arr) {
   for(let i =0; i< arr.length; i++){
    let lowest = i;
    
    for(let j= i +1; j < arr.length; j ++){
        if (arr[j] < arr[lowest]){
            lowest =j

        }

    }
    if(lowest !== i){
        //swap
        let temp = arr[i];
        arr[i] = arr[lowest]
        arr[lowest] = temp;
    }
    
   }
   return arr;

}

module.exports = selectionSort;


// [4,20,12,10,7,9]




