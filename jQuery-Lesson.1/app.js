/* ※上から下へスライドさせる記述
$(function(){
  $('.box1').slideDown();
});
*/
/* 下から上へスライドさせる記述
$(function(){
  $('.box1').slideUp();
});
*/
/* 非表示の要素をjQueryで表示させる記述
$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
}); */

/* 表示されている要素をjQueryで非表示にする記述
$(function(){
  $('.box1').hide();
}); */

/* 確認問題
上記のプログラムを改良して、以下のような動作を実現させる。
①要素を上から下へスライドさせた後、赤色の正方形を青色の長方形(幅200px、高さ100px)に変更する。
②①の後、下から上へスライドさせる */
$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});
