function merge(arr1, arr2) {
    const results = [];
    //pointers
    let i =0;
    let j =0;
    while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }

    }
    while ( i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while ( j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr) {
    //base case for recursive function
    if(arr.length <= 1) return arr;
    const midPoint = Math.floor(arr.length/2)
    const left  =mergeSort(arr.slice(0,midPoint))
    const right  =mergeSort(arr.slice(midPoint))
    return merge(left,right)
}

module.exports = { merge, mergeSort};