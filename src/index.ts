'use strict'
// A custom function that can compare two values of any type
module.exports = function isEqualArraysIgnoreOrder(a: any, b: any): boolean {
    // if the values are strictly equal, return true
    if (a === b) {
        return true;
    }

    // if the values have different types, return false
    if (typeof a !== typeof b) {
        return false;
    }

    // if both values are arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        // if they have different lengths, return false
        if (a.length !== b.length) {
            return false;
        }

        // for each element in a
        for (let elem of a) {
            // a flag to indicate if the element is found in b
            let found = false;

            // for each element in b
            for (let other of b) {
                // recursively compare the elements
                if (isEqualArraysIgnoreOrder(elem, other)) {
                    // if they are equal, set the flag to true and break the loop
                    found = true;
                    break;
                }
            }

            // if the element is not found in b, return false
            if (!found) return false;
        }

        // otherwise return true
        return true;
    }

    // if both values are objects
    if (typeof a === "object" && typeof b === "object") {
        // get the keys of a
        let keys1 = Object.keys(a);

        // get the keys of b
        let keys2 = Object.keys(b);

        // compare the keys as sorted arrays
        if (!isEqualArraysIgnoreOrder(keys1.sort(), keys2.sort())) {
            return false;
        }

        // for each key in a
        for (let key of keys1) {
            // recursively compare the values at that key
            if (!isEqualArraysIgnoreOrder(a[key], b[key])) {
                return false;
            }
        }

        // otherwise return true
        return true;
    }

    // if none of the above cases match, return false
    return false;
}