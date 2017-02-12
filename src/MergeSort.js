'use strict';

module.exports = function MergeSort(arr) {
    let len = arr.length;

    if (len < 2)
        return arr;

    let mid   = Math.floor( len / 2 ),
        left  = arr.slice( 0, mid ),
        right = arr.slice( mid );

    return ((left, right) => {
        let result = [];

        while (left.length && right.length)
            left[0] <= right[0] ? result.push( left.shift() ) : result.push( right.shift() );

        while (left.length)
            result.push( left.shift() );

        while (right.length)
            result.push( right.shift() );

        return result;
    })( MergeSort( left ), MergeSort( right ) );
};
