<?php
require "db.php";

$sql = "select * from shops";
$result = $mysqli->query($sql);
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1">
        <tr>
            <td>編號</td>
            <td>店名</td>
            <td>地址</td>
            <td>評分</td>
            <td>推薦</td>
            <td>網址</td>
            <td>lng</td>
            <td>lat</td>
        </tr>
<?php while($row = $result->fetch_assoc()) { ?>
        <tr>
            <td><?= $row["shop_id"] ?></td>
            <td><?= $row["shop_name"] ?></td>
            <td><?= $row["address"] ?></td>
            <td><?= $row["rate"] ?></td>
            <td><?= $row["recommend"] ?></td>
            <td><?= $row["url"] ?></td>
            <td><?= $row["lng"] ?></td>
            <td><?= $row["lat"] ?></td>
        </tr>
<?php } ?>
    </table>
</body>
</html>