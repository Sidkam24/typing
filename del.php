<?php
try{
        //データベースユーザー
    $user = "ictjdbpi_sid_kam";
    $password = "Sid.kam24";
    //利用するデータベース
    $dbName = "ictjdbpi_ranking";
    //MySQLサーバ
    $host = "localhost:3306";
    //MySQLのDSN文字列
    $dsn = "mysql:host={$host};dbname={$dbName};charset=utf8";
    $pdo = new PDO($dsn,$user,$password);
    $stmt = $pdo->prepare("DELETE FROM member WHERE id = :id");
    $stmt->execute(array(":id" => $_GET["id"]));
    echo "削除しました";
}catch(Exception $e){
    echo "エラーが発生しました：". $e->getMessage();
}


?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>削除完了</title>
    </head>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script>
     $(function(){
      $(".back").on("click",function(){
        $(".main").load("ranking.php",function(){
            $(this).hide().fadeIn(500);
        });
      })
     }); 
    </script>
    <body>
        <input type="button" class="back" value="元に戻る">
    </body>
</html>