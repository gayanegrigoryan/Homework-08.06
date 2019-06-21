// var string = "Hello world"
// var newString = string.substring (6,11)
// console.log (newString)

let string = "Hello world"
function substring (start,end) {
    let newString = ""
    for (let i=start; i<end; i++) {
        newString += string[i]
    } 
    console.log (newString)
}

substring (0,5)
substring (3,7)
substring (6,11)