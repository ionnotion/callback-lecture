// silahkan coba coba dengan array dibawah ini

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ["This", "is", "some", "kind", "of", "array"];
const falsyArray = [0, null, undefined, "", false, NaN];
const anyArray = ["Does", 2, "G", "likes", "ba", NaN, "a", "?", true, 100]

// example
numberArray.forEach((el, index, array) => {
    console.log(el, "is the", index, "-th element of this array, out of", array.length - 1)
})