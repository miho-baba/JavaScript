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

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい。');
// alert('あなたの選んだ手は、' + user_hand + 'です。')
// ※下記は、上記の内容に相手のじゃんけんの手をランダムに選択する関数を追加した物である
// function getJShand(){
  // let js_hand_num = Math.floor( Math.random() ＊３ );

  // if(js_hand_num == 0){
    // js_hand = "グー";
  // } else if(js_hand_num == 1){
    // js_hand = "チョキ";
  // } else if(js_hand_num == 2){
    // js_hand = "パー";
  // }

  // return js_hand;
// }

// ※上記の内容を応用し、入力されたグー・チョキ・パーと、javaScriptで生成した
// ランダムなじゃんけんの手を比べ、勝ち・負け・引き分けの結果を表示させる。
// 下記の内容がその記述です。

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい。');
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// ユーザの手とjavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);
// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if (js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js) {
  let winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    } else if (js == "パー") {
      winLoseStr = "勝ち";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}
