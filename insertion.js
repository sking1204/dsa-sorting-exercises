function insertionSort(arr) {
    for(let i=1; i < arr.length; i ++){
        let key = arr[i];
        let j = i-1;
        
        while ( j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
    


}

module.exports = insertionSort;

//[4,20,12,10,7,9]

