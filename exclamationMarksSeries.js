// Description:
// Remove all exclamation marks from the end of sentence.
// 
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function removeAllExcl (str){
    return str.replace(/!+$/, '')
}

console.log(removeAllExcl('!merhaba!'))