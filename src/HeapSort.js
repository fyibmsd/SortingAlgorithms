'use strict';

class HeapSort {
    static buildMaxHeap(arr) {
        HeapSort.len = arr.length;

        for (let i = Math.floor( HeapSort.len / 2 ); i >= 0; i--) {
            HeapSort.heapify( arr, i );
        }
    }

    static heapify(arr, i) {
        let left    = i * 2 + 1,
            right   = i * 2 + 2,
            largest = i;

        if (left < HeapSort.len && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < HeapSort.len && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            HeapSort.swap( arr, i, largest );
            HeapSort.heapify( arr, largest );
        }
    }

    static swap(arr, i, j) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
    }

    static heapSort(arr) {
        HeapSort.buildMaxHeap( arr );

        for (let i = HeapSort.len - 1; i > 0; i--) {
            HeapSort.swap( arr, 0, i );
            HeapSort.len--;
            HeapSort.heapify( arr, 0 );
        }

        return arr;
    }
}

module.exports = HeapSort.heapSort;
