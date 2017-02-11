'use strict';

const InsertionSort = require( './InsertionSort' );

module.exports = function BucketSort(arr) {
    let len = arr.length;
    let max = arr.reduce( (x, y) => x > y ? x : y );
    let min = arr.reduce( (x, y) => x < y ? x : y );

    // default bucket size
    const BUCKET_SIZE = 5;

    let count   = Math.floor( (max - min) / BUCKET_SIZE ) + 1;
    let buckets = new Array( count );

    // buckets initialize
    for (let i = 0; i < count; i++) {
        buckets[i] = [];
    }

    arr.map( item => buckets[Math.floor( (item - min) / BUCKET_SIZE )].push( item ) );
    arr.length = 0;

    buckets.map( bucket => InsertionSort( bucket ) && bucket.map( item => arr.push( item ) ) );

    return arr;
};
