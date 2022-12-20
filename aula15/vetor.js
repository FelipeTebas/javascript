let num = []

for (let c = 1; c <= 10; c ++) {
    num[c - 1] = c
}

/*for (let pos = 0; pos < num.length; pos ++){
    console.log(num[pos])
}*/

for (let c in num) {
    console.log(num[c])
}

console.log(num)

num.push(15)

console.log(num)

console.log(num.length)