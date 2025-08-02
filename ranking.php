<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=de">
    <title>ランキング</title>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
　  <script>
　  $(function(){
　    const correctPass = "Sid.kam24"; 
　    $(".del_btn").on("click",function(){
　       $(this).scrollTop(0);
　      let del_pass = window.prompt("パスワードを入力してください");
　      if(del_pass == correctPass){
　          let data_id = $(this).data("id");
            $.get("del.php",{
                id : data_id
            },function(){
                $(".main").load("del.php",function(){
                    $(this).hide().fadeIn(500);
                });
            });
　      }else if(del_pass !== ""){
　          alert("キャンセルされました");
　      }else{
　          alert("パスワードが違います");
　      }
　    });
　   // $(".top_back").on("click",function(){
　   //    $(".table_container").scrollTo(0, 0);
　   // });
　  });
　  </script>
</head>
<body>
    <link rel="stylesheet" type="text/css" href="css/rank.css">
<!--<header>-->
<!--    <div class="header_title">-->
<!--        <span><img src="picture/typing.jpeg" alt=""></span>-->
<!--        <div>タイピングゲーム</div>-->
<!--    </div>-->
<!--</header>-->
<!--<div class="top_back">戻る</div>-->

<div class="container">
<div class="rank_main">
    <?php
    //データベースユーザー
    $user = "ictjdbpi_sid_kam";
    $password = "Sid.kam24";
    //利用するデータベース
    $dbName = "ictjdbpi_ranking";
    //MySQLサーバ
    $host = "localhost:3306";
    //MySQLのDSN文字列
    $dsn = "mysql:host={$host};dbname={$dbName};charset=utf8";
    //MySQLデータベースに接続する
    try{
        //ニックネームとスコアを受け取る
        $pdo = new PDO($dsn,$user,$password);
        //プリペアドステートメントのエミュレーションを無効にする
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        //例外がスルーされる設定にする
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        if(isset($_GET['name']) == true && isset($_GET['score']) == true){
            $name = $_GET['name'];
            $score = $_GET['score'];
            $sql = "INSERT member (name,score) VALUES('$name',$score)";
            $stm = $pdo->prepare($sql);
            $stm->execute();
        }
        //SQL文を作る
        $sql = "SELECT * FROM member ORDER BY score DESC";
        //プリペアドステートメントを作る
        $stm = $pdo->prepare($sql);
        //SQL文を実行する
        $stm->execute();
        //結果の取得
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        //テーブルの行
        echo "<div class='table_container'><table class='table'>";
        echo "<tr class='table_title'>";
        echo "<th class='th'>","順位","</th>";
        echo "<th class='th'>","ニックネーム","</th>";
        echo "<th class='th'>","スコア","</th>";
        echo "<th class='th'></th>";        
        echo "</tr>";
        //値を取り出して行に表示
        // echo "<tbody>";
        $rank = 1;
        foreach($result as $row){
            echo "<tr class='tr'>";
            if($rank == 1){
              echo "<td><img src='picture/rank_1.png'></td>";
            }else if($rank == 2){
              echo "<td><img src='picture/rank_2.png'></td>";
            }else if($rank == 3){
              echo "<td><img src='picture/rank_3.png'></td>";
            }else{
              echo "<td>",$rank,"</td>";
            }
            echo "<td>",$row["name"],"</td>";
            echo "<td>",$row["score"],"</td>";
            echo "<td><img src='picture/delete3.png' data-id='".$row["id"]. "' alt='削除' class='del_btn'></td>";
            echo "</tr>";
            $rank++;
        }
        // echo "</tbody>";
        echo "</table></div>";



    } catch(Exception $e){
        echo "<span>エラーがありました。</span><br>";
        echo $e->getMessage();
        exit();
    }
    ?>
</div>
</div>
</body>
</html>