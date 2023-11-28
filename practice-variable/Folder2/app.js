// 関数とは、繰り返し使われる一連の処理を１つにまとめたもの
// 下記のように記述する
// function 関数名(){
  // 処理内容
// }

// 引数と戻り値
// ※入力する値を引数、出力される値を戻り値という
// 下記のように記述する
// function 関数名(引数){
  // 処理
  // return 戻り値;
// }

// 簡単な関数を記述してみる
// function addString(strA){
  // let addStr = "Hello " + strA;
  // return addStr;
// }
// ※この状態のままだと関数を作成しただけなので、18行目の関数を利用する処理を下記に記述し追加する。

// メイン部分
// let alertString;
// 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");
// 変数の中身をアラートで表示する
// alert(alertString);
// 作成した関数
// function addString(strA){
  // let addStr = "Hello " + strA;
  // return addStr;
// }

// 複数の関数で表示出来るようにする
// 入力ダイアログで値を入力する

// メイン部分
let promptStr = prompt('何か好きな文字を入力してください。');

// 入力された文字列をアラートで表示
alert(promptStr);
