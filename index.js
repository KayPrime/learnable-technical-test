// sample array
const arr = [5,4,5,4,5,4,4,5,3,3,3,2,2,1,5];

function nth_most_rate(list, n) {
    // create an object whose key will represent a unique number in the array and value will be the number of occurence of that number.
    let counts = {};

    // loop through the array
    for (let i = 0; i < list.length; i++) {
        const index = list[i];
        if (index in counts) {
            counts[index] += 1;
        } else {
            counts[index] = 1;
        };
    };

    // create a new array to hold keys and value from the counts object as a single array
    const sortable = [];

    // loop through the counts objects and store key value pairs as a single array
    for (let x in counts) {
        sortable.push([x, counts[x]]);
    }

    // sort the sortable array base on rarity, the rarest number is top.
    sortable.sort((a, b) => a[1] - b[1]);

    // loop through the sorted array to find the rarity of the number inputed by checking it's matching index
    for (let x in sortable) {
        if (sortable[x][0] === `${n}`) {
            return parseInt(x) + 1;
        }
    };
};

// test
console.log(nth_most_rate(arr, 2));