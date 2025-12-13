"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayUtils {
    // Randomly rearranging the array elements
    static shuffle(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // Remove duplicate elements from the array
    static removeDuplicates(array) {
        return [...new Set(array)];
    }
    // Get a random element from the array
    static getRandomElement(array) {
        if (array.length === 0)
            return undefined;
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }
    // Flatten a nested array
    static flatten(array) {
        return array.reduce((acc, val) => acc.concat(val), []);
    }
    // Get the maximum value in a numeric array
    static max(array) {
        if (array.length === 0)
            return undefined;
        return Math.max(...array);
    }
    // Get the minimum value in a numeric array
    static min(array) {
        if (array.length === 0)
            return undefined;
        return Math.min(...array);
    }
    // Calculate the sum of a numeric array
    static sum(array) {
        return array.reduce((acc, val) => acc + val, 0);
    }
    // Calculate the average of a numeric array
    static average(array) {
        if (array.length === 0)
            return undefined;
        const sum = this.sum(array);
        return sum / array.length;
    }
}
exports.default = ArrayUtils;
