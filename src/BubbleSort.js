'use strict';

/**
 * Bubble Sort
 * @param arr {Array}
 * */
module.exports = function BubbleSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
};
