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
// var nickname = "taro"
// console.log(nickname)
// nickname = "Jiro"
// console.log(nickname)

// letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "Jiro"
// console.log(nickname)

// constによる再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "Jiro"
// console.log(nickname)

// スコープについて
// グローバルスコープとローカルスコープがある

// varのスコープ
// varでは関数スコープ(ローカルスコープ)、グローバルスコープの変数を宣言できる

// var str = "webcamp" //グローバルスコープ

// function foo() {
  // console.log(str)
  // var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)
// 56行目の定義が間違っていた場合検証ツールでもエラーが確認できる

// letのスコープ
// 例１
// function foo() {
  // let x = "webcamp"
  // {
    // let y = "hello webcamp"
  // }
  // console.log(x)
  // console.log(y)
// }

// foo()
// ブロック外から参照したためエラーになる

// 例２
for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log(i)
// ブロック外から参照したためエラーになる
