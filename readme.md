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

A more concrete and real world example of using Waiter in production against a MySQl database could look like this:

```javascript
database.query({
    sql: "SELECT * FROM products WHERE seller = 'Jordan Osterberg'"
}, function(error, results) {
    // Error handling

    let products = [];

    new Waiter((data, completion) => {
        database.query({
            sql: "SELECT * FROM productMetadata WHERE productId = ?",
            values: [data.id]
        }, function(error, results) {
            products.insert({name: results.name, price: results.price});
            completion();
        })
    }).execute(results).then(() => {
        // Use the products array
    });
})
```

Copyright © 2018 Jordan Osterberg. All rights reserved. Licensed under the MIT license.
