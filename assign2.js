const myVal= process.argv
let myArr=[]
myArr.push(Number(myVal[2]))

myArr.push(Number(myVal[3]))
console.log(myArr)
for (let i = 0, sum = 0; i <= myArr.length; sum += myArr[i++])
{
    console.log(sum)
}
    ;