var text = document.getElementById('text');
$(function(){
//タイピングする文字列をここで用意しておく
var textLists = [
    ["全力","zennryoku"],["目安箱","meyasubako"],["数学","suugaku"],["英語","eigo"],
    ["理科","rika"],["簡単","kanntann"],["こんにちは",'konnnitiha'],["すずめ",'suzume'],
    ["篠崎中学校",'sinozakityuugakkou'],["私は誰",'watasihadare'],["俺だよ",'oredayo'],["最近ね",'saikinnne'],
    ["疲れているの",'tukareteiruno'],["頑張れ",'gannbare'],["お母さん",'okaasann'],["猫が好き",'nekogasuki'],
    ["コロナウイルス",'koronauirusu'],["愛を伝えよう",'aiwotutaeyou'],["ネクタイ",'nekutai'],["パソコン",'pasokonn'],
    ["ハッキング",'hakkinngu'],["ソフトバンク",'sohutobannku'],["情報は一番の武器だ","jouhouhaitibannnobukida"],
    ["スイーツ巡り","sui-tumeguri"],["ボールペン","bo-rupenn"],["スマートフォン","suma-tofonn"],["コモドドラゴン","komododoragonn"],
    ["バドミントン部に入ります","badominntonnbunihairimasu"],["メッシのような選手","messinoyounasennsyu"],["プログラミングは役に立つ","puroguraminnguhayakunitatu"],
    ["インスタグラム","innsutaguramu"],["ツイッター","tuitta-"],["歯が欠けた","hagakaketa"],["君には才能がある","kiminihasainougaaru"],["天才","tennsai"],["質問","situmonn"],
    ["大きな声で愛を叫ぶ","ookinakoedeaiwosakebu"],["パンケーキ食べたい","pannke-kitabetai"],["株式会社","kabusikigaisya"],["第二次世界大戦","dainizisekaitaisenn"],
    ["連立方程式","rennrituhouteisiki"],["化学反応式","kagakuhannnousiki"],["硫酸","ryuusann"],["水上置換法","suijoutikannhou"],["言葉は時に武器になる","kotobahatokinibukininaru"],
    ["暇なときは本を読む","himanatokihahonnwoyomu"],["Youtube","youtube"],["あなたはとてもおもしろい","anatahatotemoomosiroi"],["そこには愛があるんか","sokonihaaigaarunnka"],
    ["どこでもドア","dokodemodoa"],["未来は変えられる","miraihakaerareru"],["恋愛は駆け引き","rennaihakakehiki"],["片思いはつらい","kataomoihaturai"],["楽しいを見つけよう","tanosiiwomitukeyou"],
    ["音楽教室","onngakukyousitu"],["猫になりたい","nekoninaritai"],["相対性理論","soutaiseirironn"],["双子葉類","sousiyourui"],["応仁の乱","ouninnnorann"],["平清盛","tairanokiyomori"],
    ["リオネルメッシ","rionerumessi"],["テニス選手","tenisusennsyu"],["もう中学生","moutyuugakusei"],["あいみょん","aimyonn"],["踊る暇があったら発明してえ","odoruhimagaattarahatumeisitee"],["説教するってぶっちゃけ快楽","sekkyousuruttebuttyakekairaku"],
    ["亜寒帯","akanntai"],["原子番号","gennsibanngou"],["周期表","syuukihyou"],["陽子","yousi"],["中性子","tyuuseisi"],["水酸化ナトリウム","suisannkanatoriumu"],["ポケモンはおもしろい","pokemonnhaomosiroi"],["なんて日だ","nanntehida"],
    ["大河ドラマ","taigadorama"],["力学的エネルギー","rikigakutekienerugi-"],["ナダル","nadaru"],["リコーダー","riko-da-"],["サイレント","sairennto"],["マスタード","masuta-do"],["システムエンジニア","sisutemuennzinia"],
    ["長篠の戦い","nagasinonotatakai"],["よろしくお願いいたします","yorosikuonegaiitasimasu"],["承知いたしました","syoutiitasimasita"],["平等院鳳凰堂","byoudouinnhououdou"],["大阪城","oosakajou"],["ワトソンくん","watosonnkunn"],
    ["経済教育","keizaikyouiku"],["便利な機能","bennrinakinou"],["お薬手帳","okusuritetyou"],["ダウンロード","daunnro-do"],["公式アプリ","kousikiapuri"],["モノカルチャー経済","monokarutya-keizai"],["営業時間","eigyouzikann"],["業務効率化","gyoumukourituka"],
    ["労働時間","roudouzikann"],["ブラック企業","burakkukigyou"],["履歴書","rirekisyo"],["面接官","mennsetukann"],["自動採点","zidousaitenn"],["カラオケ楽しもうぜ","karaoketanosimouze"],["パスワード","pasuwa-do"],["メールアドレス","me-ruadoresu"],
    ["ピアノ協奏曲","pianokyousoukyoku"],["わっしょい","wassyoi"],["夏休みは神","natuyasumihakami"],["青春っていいな","seisyunntteiina"],["高嶺の花","takanenohana"],["勇気をもって告白しよう","yuukiwomottekokuhakusiyou"],["申し訳ございません","mousiwakegozaimasenn"],
    ["広辞苑","kouzienn"],["フックの法則","hukkunohousoku"],["凸レンズ","toturennzu"],["全反射","zennhannsya"],["オームの法則","o-munohousoku"],["溶解度","youkaido"],["対照実験","taisyouzikkenn"],["気孔","kikou"],["リンパ管","rinnpakann"],["ヨウ素液","yousoeki"],
    ["ベネジクト溶液","benezikutoyoueki"],["ヘモグロビン","hemogurobinn"],["セキツイ動物","sekituidoubutu"],["モンテスキュー","monntesukyu-"],["桜田門外の変","sakuradamonngainohenn"],["徴兵令","tyouheirei"],["ワシントン条約","wasinntonnjouyaku"],
    ["グッバイ","gubbai"],["曲を選択するどん","kyokuwosenntakusurudonn"],["キュンです","kyunndesu"],["アーニャ","a-nya"],["なにわ男子","naniwadannsi"],["ここは任せてくれ","kokohamakasetekure"],["たけのこの里派","takenokonosatoha"],["お前しか勝たん","omaesikakatann"],
    ["あなたが必要なの","anatagahituyounano"],["こっちおいで","kottioide"],["お前が一番可愛い","omaegaitibannkawaii"],["ずっと一緒にいよ","zuttoissyoniiyo"],["頑張らなくていいよ","gannbaranakuteiiyo"],["もっと俺に頼りな","mottoorenitayorina"],
    ["髪型変えた？","kamigatakaeta?"],["他の男なんか見るなよ","hokanootokonannkamirunayo"],["あなたといるだけで幸せ","anatatoirudakedesiawase"],["私だけを見て","watasidakewomite"],["あんたのためじゃないんだから","anntanotamejanainndakara"],
    ["過去の自分","kakonozibunn"],["一人暮らし","hitorigurasi"],["ふわとろオムライス","huwatoroomuraisu"],["海老フライ","ebihurai"],["瞬間移動","syunnkannidou"],["タイムスリップ","taimusurippu"],["私は猫です","watasihanekodesu"],["青空バンザイ","aozorabannzai"],
    ["洗濯ばさみ","senntakubasami"],["バスタオル","basutaoru"],["筆記用具","hikkiyougu"],["消しゴム","kesigomu"],["留学生","ryuugakusei"],["セブンイレブン","sebunnirebunn"],["ファミリーマート","famiri-ma-to"],["ローソン","ro-sonn"],
    ["その先にあなたがいる","sonosakinianatagairu"],["手繋ごう","tetunagou"],["メラメラの実","merameranomi"],["人生は坂道","zinnseihasakamiti"],["マクドナルド","makudonarudo"],["アサヒスーパードライ","asahisu-pa-dorai"],["お飲み物はいかがですか","onomimonohaikagadesuka"],
    ["黒船来航","kurohuneraikou"],["過去は大切よ","kakohataisetuyo"],["ナイスパニック","naisupanikku"],["朝からXO","asakaraxo"],["明日どうなるかは分からない","asitadounarukahawakaranai"],["ああでもないこうでもない","aademonaikoudemonai"],
    ["肉食系男子","nikusyokukeidannsi"],["犬はワン","inuhawann"],["これは素晴らしい","korehasubarasii"],["食パンくわえた少女","syokupannkuwaetasyoujo"],["壁ドンってどうなの","kabedonnttedounano"],["ただしイケメンに限る","tadasiikemennnikagiru"],
    ["進撃の巨人","sinngekinokyozinn"],["あなたの一番に","anatanoitibannni"],["いじめはダメ絶対","izimehadamezettai"],["人生は公平ではない","zinnseihakouheidehanai"],["変革せよ","hennkakuseyo"],["ため息は幸せが逃げる","tameikihasiawaseganigeru"],
    ["見聞色の覇気","kennbunnsyokunohaki"],["さっちゃん","sattyann"],["残業代の代わりに仕事減らせよ","zanngyoudainokawarinisigotoheraseyo"],["おいしい給食","oisiikyuusyoku"],["このカフェ最高","konokafesaikou"],["ツンツンデレデレ","tunntunnderedere"],
    ["なにそれおいしいの","nanisoreoisiino"],["頭ポンポン","atamaponnponn"],["おれはジャイアン","orehajaiann"]["ららぽーと","rarapo-to"],["修学旅行","syuugakuryokou"],["看護師","kanngosi"],["海は広いな","umihahiroina"],["命に感謝","inotinikannsya"],
    ["自称天然","zisyoutennnenn"],["人造人間","zinnzouninngenn"],["採血苦手","saiketunigate"],["えへへ","ehehe"],["担当者","tanntousya"],["ちびまる子ちゃん","tibimarukotyann"],["二酸化炭素","nisannkatannso"],["窒素","tisso"],["お疲れ様です","otukaresamadesu"],
    ["初めまして","hazimemasite"],["後悔先に立たず","koukaisakinitatazu"],["めっちゃ好きやねん","mettyasukiyanenn"],["待ってろ今行く","matteroimaiku"],["私を置いてかないで","watasiwooitekanaide"],["隠し事は禁止","kakusigotohakinnsi"],["フフフフレッシュ","huhuhuhuressyu"],
    ["俺じゃなきゃ見逃しちゃうね","orejanakyaminogasityaune"],["宇宙","utyuu"],["最高裁判所","saikousaibannsyo"],["ゲットだぜ","gettodaze"],["理系オタク","rikeiotaku"],["愛してるのサイン","aisiterunosainn"],["監督者会議","kanntokusyakaigi"],["絶対温度","zettaionndo"],
    ["ブラックホール","burakkuho-ru"],["清き一票を","kiyokiippyouwo"],["新製品","sinnseihinn"],["法律事務所","hourituzimusyo"],["ぽんぽこりん","ponnpokorinn"],["一期一会","itigoitie"],["千載一遇","sennzaiitiguu"],["旅のしおり","tabinosiori"],
    ["元カノと復縁","motokanotohukuenn"],["別れたくない","wakaretakunai"],["ちょっと待てよ","tyottomateyo"],["寂しいやんか","samisiiyannka"],["黒魔術","kuromajutu"],["惚れ薬","horegusuri"],["早めのパブロン","hayamenopaburonn"],["紅白歌合戦","kouhakuutagassenn"]];

var ng_word = ["おっぱい","sex","えっち","しね","死","殺","おなにー","オナニー","おなに","せっくす","セックス","まんこ","マンコ","くんに","クンニ","フェラ","ふぇら",
                 "エッチ","えろ","エロ","ちんこ","ちん〇","ま〇こ","マン〇","マ〇コ","ち〇こ","チ〇コ","チンコ","射精","精子","騎乗位","正常位","SM","AV","おちんぽ",
                 "おまんこ","てぃんこ","ぱいずり","ぱい","パイ","オナ","ゲイ","ザーメン","4545","072","コンドーム","シックスナイン","せくろす","セクロス","タマタマ",
                 "でぃるど","ディルド","バイブ","ばいぶ","ハメ","ビッチ","ヤリマン","ヤリチン","ホモ","やりまん","やりちん","レイプ","ロリ","ローター","レズ","ブサイク",
                 "乱交","乳首","ちくび","乳輪","処女","包茎","膣","乳","巨根","性奴隷","コキ","淫乱","潮吹き","痴女","びっち","イク","絶頂","調教","風俗","キモイ","不細工",
                 "ガイジ","キチガイ","ばか","バカ","アホ","あほ","ころす","kill","090","080","070","093"," ","　"];
                 
var ng_leng = ng_word.length;
var ng_flag = 0;
var time;
var all_keykazu = 0; //入力したすべてのキーの数
var timeout = 0; //タイムアウトの時間
var mysec_val;
var start_btn_flag = 0;
var start_flag = 0;
var checkTexts = [];
var count = 1;　//問題数のカウント
var max = 10;　//問題終了の数
var bar_speed = (100/max)*-1;
var correct_cnt = 0;
var kanzi = document.getElementById("kanzi");
var miss_cnt = 0;
var seikaku;
var score; //スコア
var correct_rate;　//正解率
var hue = document.getElementById("syuuryou");
var utuoto = document.getElementById("utuoto");
var matigai = document.getElementById("matigai");
var hanteiID;
var timerID;
var keika_time = 0;
var hantei_flag = 0;
var qs_life = 100;    // 残り問題ライフ初期値
$("#qs_bar").css("width","100%");

//ヘッダータイトルを押したときリロード
// $(".header_title").on("click",function(){
//   location.href = "typing.html";
// });
//   $(".sub").css("display","none");

//スタートボタンをクリックした動作
function startbtn_click(){
  $(".start").css("display","none");
　$(".sub").css("visibility","visible");
  $(".sub").fadeIn(800);
  $(".containar").fadeIn(800);
  start_btn_flag = 1;
  start_type();
  hanteiCheck();
}

document.addEventListener('keydown',function(e){
       if(start_btn_flag == 0){        
            if(e.keyCode == 13 || e.keyCode == 32){
                startbtn_click();
            }
       }else{
           if(e.keyCode == 27){
               location.reload();
           }
       }
});



//スタートボタンを押したとき
$(".start_btn").on("click",function(){
   clearInterval(timerID);
   clearInterval(hanteiID);
   startbtn_click();
});

// $(".q_mozikazu").text(all_keykazu);
$("#kanzi").css("font-size","3.5em");
// $("#kanzi").html("<span id='space'>Spaceキー</span>で始めるよ"+"<br>"+"Are you ready?");

createText();


//タイマーの設定
function start_type(){
//   time = 60;
  $("#mysec").text(keika_time);
  timerID = setInterval(myTime,1000);
}

function hanteiCheck(){
  if(hantei_flag === 0){
    hanteiID = setInterval(hantei,100);
  }

}

 function myTime(){
   // var mysec_val = $("#mysec").val();
   if(start_flag == 1){
    //  time = time - 1;
     speed = (all_keykazu / keika_time ) * 60;
     keika_time++;
// 	 $("#mozisuu").text(speed.toFixed(1));
   }
  }

  function hantei(){
   if(start_flag == 1){
     if(count > max){
         hantei_flag = 1;
         correct_rate_2 = correct_cnt/all_keykazu;
         correct_rate = (correct_rate_2*100).toFixed(2); //正解率の算出
         correct_rate_3 = Math.pow(correct_rate_2,3);
         score = speed*correct_rate_3;
         score = score.toFixed(0);
        //  $(".q_mozikazu").text(score);
         clearInterval(timerID);
         clearInterval(hanteiID);
         hue.currentTime = 0;　//０秒からスタート
         hue.volume = 0.5;
         hue.play();
         $("#qs_frame").css("display","none");
         $("#text").text("");
         $("#kanzi").text("終了");
         window.setTimeout(function(){
             $("#qs_frame").css("display","none");
             $("#score").text(score);
             $("#kanzi").text("");
             $(".end_score").css("display","block");
             $("#score").hide();
             window.setTimeout(function(){
                  $(".mybox").fadeIn(3000);
            },1000);
             window.setTimeout(function(){
                 $("#score").show("bounce",1000);
            },1000);

         }, 1500);
      }else{
           $("#mysec").text(keika_time);
      }
   }
 }

function createText() {
    //文字列をランダムに取得する
    var rnd = Math.floor(Math.random() * textLists.length);

    //前の文字列を削除してから次の文字列を表示する
    text.textContent = '';
    kanzi.textContent = textLists[rnd][0];

    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd][1].split('').map(function(value) {
        var span = document.createElement('span');
        span.textContent = value;
        text.appendChild(span);
        return span;
    });
    textLists.splice(rnd,1);
}

document.addEventListener('keydown', keyDown);
function keyDown(e) {
    if( (65 <= e.keyCode && e.keyCode <=90 ) || (186 <= e.keyCode && e.keyCode <= 226) || e.keyCode == 49 ){
     all_keykazu++;
     if(start_btn_flag == 1){
      //  start_type();
        start_flag = 1;
     }
     if(count > max){

     }
     else{
    //キーボードからの入力は「e.key」に格納されている
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';

         utuoto.currentTime = 0;　//０秒からスタート
         utuoto.volume = 1;
         utuoto.play();
         correct_cnt++;

         // $('.add').animate({'color': 'blue'},50);
         // // $(".add").hide("blind",{direction:"down"},50);
        //0番目の配列要素を削除して、次の1文字を比較対象にする
        checkTexts.shift();

        //配列要素が空っぽになったら次の問題を出す
         if(!checkTexts.length){
          count++;
          if(count > max){
            // setTimeout(function(){
            //   alert("終了です");
            // },100);
            }
          else{
            qsLife(bar_speed);
            createText();
          }
        }
      }
    else{
      if(start_flag == 1){
        miss_cnt++;
        $("#miss").text(miss_cnt);
        matigai.currentTime = 0;　//０秒からスタート
        matigai.volume = 0.4;
        matigai.play();
      }
    }
  }
}
}

// *** 残り問題バー変更処理 ***(questionLife)
function qsLife( value ){
    // qs_lifeの値を算出する
    qs_life += value; 
    if ( qs_life <= 0 ){
        // 算出の結果 0 以下になった場合
        qs_life = 0
        // 0.3秒後に光部分を非表示にする
        setTimeout(function(){
            $("#qs_mark").css("visibility","hidden");
        }, 300)
    } else {
        // 算出の結果 100 を超過した場合
        if ( qs_life > 100 ) {
            qS_life = 100
        }
        // 光部分を表示する
        $("#qs_mark").css("visibility","visible");
    }
    // スタイル(幅)を更新する
    $("#qs_bar").css("width",qs_life + "%");
}

//ゲームとランキングを押したとき
// $(".header_li a").on("click",function(e){
//         e.preventDefault();
//     $(".main").load($(this).attr("href"));
// });

//  $(".main").load("typing.html");

//ニックネーム
$(".rank_text")
   .focus(function(){
    $(".lavel").addClass("rank_lavel_focus");
      $(".lavel").removeClass("rank_lavel");
    })
    .blur(function(){
      var text_val = $(".rank_text").val();
      if(text_val == ""){
        $(".lavel").addClass("rank_lavel");
        $(".lavel").removeClass("rank_lavel_focus");
      }
    });

//ニックネームとスコアをPHPに送る
function get(){
    text_val = $(".rank_text").val();
    $.get("ranking.php",{
        name : text_val,
        score : score
    },function(){
        window.setTimeout(function(){
          $(".mybox").fadeOut(600); 
          $(".main").fadeOut(1000);
        },500);
        window.setTimeout(function(){
          $(".main").load("typing.html");
          $(".main").fadeIn(2000);
        },1600);        
    });
};


function ranking_submit() {
    text_val = $(".rank_text").val();
    var val_Upper = text_val.toUpperCase();
    if(text_val == ""){
     alert("ニックネームを入力してください"); 
    }else{
        ng_flag = 0;
        for(var i = 0 ; i < ng_leng; i++){
            if(val_Upper.includes(ng_word[i].toUpperCase())){
                ng_flag = 1;
                alert("NGワードが含まれています");
                break;
            }
        }
        if(ng_flag == 0){
            if(window.confirm( "\' " + text_val + " \'" + " でよろしいですか？")){
                $(this).addClass("active");
                $(".rank_text").blur();
                get();
            }
        }
    }
  }

  $(".rank_text").on("keydown",function(e){
     if(e.keyCode == 13){
         ranking_submit();
     } 
  });

  //ランキングのSUBMITボタンを押したとき
    $(".button")
      .on("mouseenter", function() {
        $(this).addClass("hover");
      })
      .on("mouseleave", function() {
        $(this).removeClass("hover");
      })  
      .on("click", ranking_submit);
      
      




});
