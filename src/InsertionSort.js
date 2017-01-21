'use strict';

/**
 * Insertion Sort
 * @param arr {Array}
 * */
module.exports = function InsertionSort(arr) {
    let len = arr.length;
    let prev, current;

    for (let i = 1; i < len; i++) {
        prev = i - 1;
        current = arr[i];

        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] = current;
    }

    return arr;
};
