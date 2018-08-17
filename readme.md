# Waiter  ![version](https://img.shields.io/badge/version-1.0.0-red.svg)

Waiter is a tool to perform common data processing operations on an array of data. It is best explained with an example:

```javascript
const Waiter = require("./waiter.js")

const input = [1, 2, 3];
let finalInput = [];

new Waiter((data, completion) => {
    finalInput.push(data * 2);
    completion()
}).execute(input).then(() => {
    console.log(finalInput);
});
```

This snippet will create a Waiter. The input is a "processing function," which understands how you'd like to process or load your data. In this case, we take the given piece of data (an integer), and multiply it by 2.

This will yield the following result in the console:
```
[2, 4, 6]
```
Be advised that your data may become out of sync, or un-sorted when performing async operations (e.g talking to a MySQL or Mongo database). Always sync/sort your data once Waiter has finished your tasks.

Copyright © 2018 Jordan Osterberg. All rights reserved. Licensed under the MIT license.
