const Waiter = require("./waiter.js")

const input = [1, 2, 3];
let finalInput = [];

new Waiter((data, completion) => {
    finalInput.push(data * 2);
    completion()
}).execute(input).then(() => {
    console.log(finalInput);
});
