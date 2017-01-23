const myVal= process.argv
let myArr1=[]
let myArr2=[]
myArr1.push(Number(myVal[2]))
myArr2.push(Number(myVal[3]))
console.log(myArr1)
console.log(myArr2)
const tipamount=(myArr2/100)*myArr1
console.log(tipamount)
const totalowing=tipamount+Number(myArr1)
console.log(totalowing)