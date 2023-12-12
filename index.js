function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function named() {
        console.log('That guy is named Robin.')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('What is that guy\'s name?')
    }
}