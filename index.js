//write your code here
const replaceWithYerr = (arr, start = 0, end = arr.length - 1) => {
    let replaced = [];
    for (let i = 0; i < arr.length; i++) {
        // replaced += arr;
        if (i >= start && i < start + end) {
            replaced.push("yerr")
        }
        else {
            replaced.push(arr[i]);
        }
    }
    return replaced;
}

const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

console.log(replaceWithYerr(months)) 
