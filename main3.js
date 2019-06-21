let string = "Hello Everyone"
let str = string.toLowerCase()
let k=[]
for (let i=0; i<str.length; i++) {
    let c=0   
    for (let h=0; h<k.length; h++){
        if (i===k[h]) {
            i++
            } 
        }
      for (let j=0; j<str.length; j++){
		if (str[i]===str[j]){
            c++    
            k.push(j)
        } 
    }
     let x= ''
     if (c > 1) {
        x += '-' + str[i] + ' x ' + c
        console.log (x)
    }
}

