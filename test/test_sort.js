'use strict';

const Sort     = require('../src');
const unsorted = [31, 41, 59, 26, 53, 58, 97, 93, 23, 84];
const sorted   = [23, 26, 31, 41, 53, 58, 59, 84, 93, 97];
const tester   = ((x, y) => (f) => require('assert').deepEqual(f(x), y))(unsorted, sorted);

describe("Test sort algorithms", () => {
    it("Test bubble sort", () => tester(Sort.bubbleSort));

    it("Test quick sort", () => tester(Sort.quickSort));

    it("Test selection sort", () => tester(Sort.selectionSort));

    it("Test insertion sort", () => tester(Sort.insertionSort));

    it("Test shell sort", () => tester(Sort.shellSort));
});
