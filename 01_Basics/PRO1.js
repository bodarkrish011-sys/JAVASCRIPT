console.log("Hello node")

let num = 33
let stringNum = String(num)
console.log(typeof num) //  typeof used to find type of value 
console.log(num)

let str = "35313"
let strToNum = Number(str)
console.log(typeof strToNum)  // if str = "hello" then terminal shows Nan - Not a Number 
console.log(strToNum)

let Num = 1
let NumToBole = Boolean(Num)
console.log(typeof NumToBole)
console.log(NumToBole)

console.log(typeof 11.11)

let num1,num2,num3 
num1=2+2,num2=2+2,num3=2+2
console.table([num1,num2,num3])


let SYNum = Symbol("1223")
let SYNum1 = Symbol("1223")
console.log(Boolean(SYNum==SYNum1))
console.log(Boolean(SYNum1))
