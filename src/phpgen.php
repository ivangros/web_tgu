<?php
    $title = "Главная страница";
    $header = "Добро пожаловать!";
    $currentYear = date("Y");
?>

<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title><?= $title ?></title>
    </head>
    <body>
        <h1><?= $header ?></h1>
        <h2>Сегодня <?= $currentYear ?> год</h2>
    </body>
</html>