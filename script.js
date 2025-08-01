let question_list = [
    {
        question:"植物の発芽条件とは、水と空気と何か。",
        select:["光","適切な温度","肥料","土"],
        answer:"適切な温度"
    },
    {
        question:"日本の食料自給率は次のうちどれが適切か答えなさい",
        select:["11％~20%","21％~30%","31％~40%","41％~50%"],
        answer:"31％~40%"
    },
    {
        question:"次のうち、栽培に適した良い土の条件に当てはまらないのはどれか。",
        select:["保水性","通気性","排水性","強酸性"],
        answer:"強酸性"
    },
    {
        question:"肥料の３要素に当てはまらないものはどれか。",
        select:["窒素","リン","カリウム","カルシウム"],
        answer:"カルシウム"
    },
    {
        question:"次のうち、すじまきが適している野菜を答えなさい。",
        select:["レタス","ダイコン","アサガオ","コマツナ"],
        answer:"コマツナ"
    },
    {
        question:"次の文章のカッコに適している語句を選びなさい。<br>茎が伸びてきたら倒れないように支柱にそわせ（　　　　）に結ぶ",
        select:["８の字","しっかり","ゆるく","きつく"],
        answer:"８の字"
    },
    {
        question:"「オクラ」は何科か。",
        select:["ナス科","アオイ科","キジカクシ科","ウリ科"],
        answer:"アオイ科"
    },
    {
        question:"「ジャガイモ」は何科か。",
        select:["イモ科","ナス科","ヒガンバナ科","ヒルガオ科"],
        answer:"ナス科"
    },
    {
        question:"「サツマイモ」は何科か。",
        select:["イモ科","ナス科","ヒルガオ科","イネ科"],
        answer:"ヒルガオ科"
    },
    {
        question:"水やりはどのタイミングで行うのが一番適切か。",
        select:["朝","昼間","夕方","夜"],
        answer:"朝"
    },
    {
        question:"「ジャガイモ」は何科か。。",
        select:["イモ科","ナス科","ヒガンバナ科","ヒルガオ科"],
        answer:"ナス科"
    },
    {
        question:"「サツマイモ」は何科か。",
        select:["イモ科","ナス科","ヒルガオ科","イネ科"],
        answer:"ヒルガオ科"
    }
    
];
let end_img = ["img/man_1.jpg","img/man_2.jpg","img/man_3.jpg","img/man_4.jpg","img/woman_1.jpg","img/woman_2.jpg","img/woman_3.jpg","img/woman_4.jpg",]
let img_rand = Math.floor(Math.random() * end_img.length);
let $end_img = document.querySelector(".end_img");
$end_img.setAttribute('src', end_img[img_rand]);
// let list_num = Math.floor(Math.random() * question_list.length);
let q_num = 0;　//問題数
let correct_cnt = 0; //正解数
const max_q = 5;
const $question = document.querySelector(".question");
const correct = document.getElementById("correct");
correct.currentTime = 0;
const incorrect = document.getElementById("incorrect");
incorrect.currentTime = 0;
const $option = document.querySelectorAll(".option");
const $select = document.querySelector(".select");
const correct_img = document.getElementById("correct_img");
const incorrect_img = document.getElementById("incorrect_img");
const speech = document.querySelector(".speech");
const end = document.querySelector(".end");

// 選択肢の並び替え
function arrayShuffle(array) {
    for(let i = (array.length - 1); 0 < i; i--){
  
      // 0〜(i+1)の範囲で値を取得
      let r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替えを実行
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }
 arrayShuffle(question_list);
 arrayShuffle(question_list[q_num]["select"]);

 //問題の出題
function setQuestion(){
    for(i = 0; i < 4 ; i ++){
        $question.innerHTML = question_list[q_num]["question"];
        $option[i].textContent = question_list[q_num]["select"][i];
    };
}
setQuestion();

//リロード
function Reload(){
    location.reload();
}


//〇のフェードイン・アウト
function correctImg(){
    correct_img.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
            { opacity: 0 },
        ],
        {
            duration:800,
            fill:"forwards"
        }
    );
};

//×のフェードイン・アウト
function incorrectImg(){
    incorrect_img.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
            { opacity: 0 },
        ],
        {
            duration:800,
            fill:"forwards"
        }
    );
};

//終了のメッセージ
function dispMsg(){
    $question.style.visibility = "hidden";
    $select.style.visibility = "hidden";
    end.style.visibility = "visible";
    end.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration:800,
            fill:"forwards"
        }
    );
    // $question.animate(
    //     [
    //         { opacity: 1 },
    //         { opacity: 0 },
    //     ],
    //     {
    //         duration:300,
    //         fill:"forwards"
    //     }
    // );
    // $select.animate(
    //     [
    //         { opacity: 1 },
    //         { opacity: 0 },
    //     ],
    //     {
    //         duration:300,
    //         fill:"forwards"
    //     }
    // );
    speech.innerHTML = max_q + " 問中 " + correct_cnt + " 問正解です";

}

//正誤判定
for(i = 0;i < 4 ; i++){
    $option[i].onclick = function(){
            if(question_list[q_num]["answer"] == this.textContent){
                correct.play();  // 再生
                correct_img.style.visibility = "visible";
                correctImg();
                q_num++;
                correct_cnt++;
                if( q_num < max_q){
                    setQuestion();
                }else{
                    window.setTimeout(dispMsg, 800);
                }
            }else{
                incorrect.play();
                incorrect_img.style.visibility = "visible";
                incorrectImg();
                q_num++;
                if( q_num < max_q){
                    setQuestion();
                }else{
                    window.setTimeout(dispMsg, 800);
                }
            }
    };
};

