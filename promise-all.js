const { log, timer, timerEnd } = require('./utils/console-functions');

function makePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 200); // calling youtube api needs almost 200ms
    }).then(function() {
        // do something
    });
}

const promises = [];
const count = 1000000;  // change this
for(i=1;i<count;i++){
    const promise = makePromise();
    promises.push(promise);
}

log("number of promises: ", count);
timer("check promise all");
Promise.all(promises)
    .then(() => {
        log("done");
        timerEnd("check promise all");
    })