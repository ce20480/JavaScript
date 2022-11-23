function MergeSort(arr){
    // if (Array.isArray(arr)){
    if (arr.length < 2){
        return arr;
    }
    // divide and conquer approach keeps recursively calling mergesort until there is an array of length 1 and then builds the sorted list with the function merge
    const midIndex = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,midIndex);
    const rightArr = arr.slice(midIndex,arr.length);

    return merge(MergeSort(leftArr), MergeSort(rightArr))
    // }
}

function merge(leftArr, rightArr){
    // if (Array.isArray(leftArr) && Array.isArray(rightArr)){ this line is only useful if dealing with undefined values/arrays 
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        if (leftArr[leftIndex] < rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex])
            leftIndex += 1
        } else{
            resultArr.push(rightArr[rightIndex])
            rightIndex += 1
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))//forgot to add a line to account for the last element in one of the lists
    // }
}

let arr = [12, 3, 16, 6, 5, 1];// test output
console.log(MergeSort(arr))