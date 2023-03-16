// #1
function someFunction(something) {
    console.log("do something");
    return something
}

// #2
const anotherWay = (something) => {
    console.log(something);
    return something
}

// #3
const youCanAlsoWriteLikeThis = (something) => something
// note that #3 automatically returns without the keyword return


// #4
const yetAnotherWay = function(something) {
    console.log(something)
    return something
}
