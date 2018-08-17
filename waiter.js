module.exports = Waiter;

/*
If your processor function performs any async operations, your data may end up out of sync.
Always sort your data on completion when using an async-based processor.
*/
function Waiter(processor) {
    let completed = 0;
    let size = 0;

    this.execute = function(input) {
        return new Promise((resolve) => {
            size = input.length;

            if (size === 0) {
                resolve()
                return;
            }

            for (let x = 0; x < size; x++) {
                processor(input[x], completion);
            }

            function completion() {
                completed += 1;

                if (completed === size) {
                    resolve()
                }
            }
        });
    };
}
