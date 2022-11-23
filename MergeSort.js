function MergeSort(arr){
    if (arr.length < 2){
        return arr;
    }
    const midIndex = Math.floor(arr.length/2);
    const leftArr = arr.slice[0,midIndex];
    const rightArr = arr.slice[midIndex,arr.length];

    return merge(MergeSort(leftArr), MergeSort(rightArr))
}

function merge(leftArr, rightArr){
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
}