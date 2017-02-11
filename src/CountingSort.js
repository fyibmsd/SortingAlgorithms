'use strict';

module.exports = function CountingSort(arr) {
    let max_value    = arr.reduce( (x, y) => x > y ? x : y ),
        bucket_len   = max_value + 1,
        bucket       = new Array( bucket_len ),
        sorted_index = 0,
        len          = arr.length;

    for (let i = 0; i < len; i++) {
        if (!bucket[arr[i]])
            bucket[arr[i]] = 0;

        bucket[arr[i]]++;
    }

    for (let j = 0; j < bucket_len; j++) {
        while (bucket[j] > 0) {
            arr[sorted_index++] = j;
            bucket[j]--;
        }
    }

    return arr;
};
