// varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)
// letでは再宣言はできない

// constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)
// constも再宣言はできないためletの時と同様のエラーが発生する

// 再代入について
// ※constでは再代入はできない

// varによる再代入
var nickname = "taro"
console.log(nickname)
nickname = "Jiro"
console.log(nickname)

