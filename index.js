function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function named() {
        console.log("This function is named.")
    }
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This function has no name.")
    }
}