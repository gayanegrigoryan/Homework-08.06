let numbers = [213, 5897, 24, 8, 592]
newNumbers = []
for (k=0; k<numbers.length; k++){
let num = numbers [k]
tiv = []
while (num>0) {
    x = num%10
    num = (num-x)/10
    tiv.push(x)
}
for (i=0; i<tiv.length; i++) {
    for (j=0; j<tiv.length; j++) {
        if (tiv[i] > tiv[j]) {
            let max = tiv[i]
            tiv[i] = tiv [j]
            tiv [j] = max
          }
    }
}
newtiv = []
tiv.forEach(function (value) {
    newtiv += value
})
newNumbers.push (Number(newtiv))} 
console.log(numbers)
console.log(newNumbers)

