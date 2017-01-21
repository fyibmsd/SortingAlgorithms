'use strict';

/**
 * Quick Sort
 * @param arr {Array}
 * */
module.exports = function QuickSort(arr) {
    let len = arr.length;
    if (len === 0)
        return arr;

    let pivot = arr[0];
    let left = [], right = [];

    for (let i = 1; i < len; i++)
        arr[i] < pivot ? left.push( arr[i] ) : right.push( arr[i] );

    return QuickSort( left ).concat( [pivot], QuickSort( right ) );
};
