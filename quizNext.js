$(function(){
    let end_img = ["img/man_1.jpg","img/man_2.jpg","img/man_3.jpg","img/man_4.jpg","img/woman_1.jpg","img/woman_2.jpg","img/woman_3.jpg","img/woman_4.jpg",]
    let img_rand = Math.floor(Math.random() * end_img.length);
    let $end_img = document.querySelector(".end_img");
    $end_img.setAttribute('src', end_img[img_rand]);
    // let list_num = Math.floor(Math.random() * question_list.length);
    let q_num = 0;　//問題数
    let correct_cnt = 0; //正解数
    const max_q = 5;
    const $header = document.querySelector(".header");
    const $question = document.querySelector(".question");
    const correct = document.getElementById("correct");
    correct.currentTime = 0;
    const incorrect = document.getElementById("incorrect");
    incorrect.currentTime = 0;
    const $option = document.querySelectorAll(".option");
    const $opt_text = document.querySelectorAll(".opt_text");
    const $select = document.querySelector(".select");
    const correct_img = document.getElementById("correct_img");
    const incorrect_img = document.getElementById("incorrect_img");
    const speech = document.querySelector(".speech");
    const end = document.querySelector(".end");
    const nextBtn = document.querySelector(".next_btn");
    const answer = document.querySelector(".answer");

    
    // 選択肢並び替え
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
        nextBtn.style.visibility = "hidden";
        answer.style.visibility = "hidden";
        for(i = 0; i < 4 ; i ++){
            $question.innerHTML = question_list[q_num]["question"];
            $opt_text[i].textContent = question_list[q_num]["select"][i];
        };
        $question.animate(
            [
                { opacity: 0 },
                { opacity: 1 },
            ],
            {
                duration:400,
                fill:"forwards"
            }
        );
        for(i=0 ; i < 4 ; i++){
            $opt_text[i].animate(
                [
                    { opacity: 0 },
                    { opacity: 1 },
                ],
                {
                    duration:400,
                    fill:"forwards"
                }
            );
        }
    }
    setQuestion();

    //リロード
    $header.addEventListener("click",function(){
        location.reload();
    });
    
    
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
        nextBtn.style.visibility = "hidden";
        answer.style.visibility = "hidden";
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
        speech.innerHTML = max_q + " 問中 " + correct_cnt + " 問正解です";
    }
    
    function next(){
        nextBtn.addEventListener("click",function(){
            if( q_num < max_q){
                setQuestion();
            }else{
                window.setTimeout(dispMsg, 800);
            }
    });
    }
    next();
    //正誤判定
    for(i = 0;i < 4 ; i++){
        $option[i].onclick = function(){
                if(question_list[q_num]["answer"] == this.textContent){
                    correct.play();  // 再生
                    correct_img.style.visibility = "visible";
                    correctImg();
                    q_num++;
                    correct_cnt++;
                    nextBtn.style.visibility = "visible";
                    next();
                }else{
                    nextBtn.style.visibility = "visible";
                    incorrect.play();
                    incorrect_img.style.visibility = "visible";
                    incorrectImg();
                    answer.innerHTML = question_list[q_num]["answer"];
                    answer.style.visibility = "visible";
                    answer.animate(
                        [
                            { opacity: 0 },
                            { opacity: 1 },
                        ],
                        {
                            duration:400,
                            fill:"forwards"
                        }
                    );
                    q_num++;
                    next();
                }
        };
    }
    ;
    
    
});