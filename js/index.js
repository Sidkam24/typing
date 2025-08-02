$(function(){

  
//ヘッダータイトルを押したときリロード
$(".header_title").on("click",function(){
   location.href = "index.html";
});

//ゲームを押したとき
$(".header_li a").on("click",function(e){
        e.preventDefault();

    $(".main").load($(this).attr("href"),function(){
        $(this).hide().fadeIn(500);
    });
});

// //ランキングを押したとき
// $(".rank_li a").on("click",function(e){
//         e.preventDefault();
//     $(".main").load($(this).attr("href"),function(){
//         $(this).hide().fadeIn(500);
//     });
// });
     $(".main").load("typing.html",function(){
     $(this).hide().fadeIn(500);
     }); 
});