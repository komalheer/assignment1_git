const myVal= process.argv
let myArr=[]
myArr.push(Number(myVal[2]))
myArr.push(Number(myVal[3]))
console.log(myArr)
let sum =0
for (let i = 0; i <= myArr.length; sum += myArr[i++])
{
    console.log(`${sum}`)
        if(sum >=10 && sum <=100)
    {
        console.log(`Sum greater than 10 and less than 100 `)
    }
    
    if(sum >=100 && sum <=1000)
{
    console.log(`Sum greater than 100 but less than 1000`)
    

    }
 
    
if(sum >=1000)
{
    console.log(`Sum greater than 1000`)
 

    }
}