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

// 複数の関数について
// 入力ダイアログで値を入力する

// メイン部分
// let promptStr = prompt('何か好きな文字を入力してください。');

// 入力された文字列をアラートで表示
// alert(promptStr);

// 複数の関数を定義する
// 下記の内容は、入力した値を処理する関数を作成した物である

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい。');
alert('あなたの選んだ手は、' + user_hand + 'です。')
// ※下記は、上記の内容に相手のじゃんけんの手をランダムに選択する関数を追加した物である
function getJShand(){
  let js_hand_num = Math.floor( Math.random() ＊３ );

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}
