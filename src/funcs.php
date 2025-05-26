<?php
    echo "<h2>Задание 1</h2>";
    $a = 6;
    $b = 13;

    echo "a = $a<br>";
    echo "b = $b<br><br>";
    if ($a >= 0 && $b >= 0) {
        echo "Разность: " . ($a - $b);
    } elseif ($a < 0 && $b < 0) {
        echo "Произведение: " . ($a * $b);
    } else {
        echo "Сумма: " . ($a + $b);
    }


    echo "<h2>Задание 2</h2>";
    $a = 5;

    echo "a = $a<br><br>";
    switch ($a) {
        case 0: echo "0<br>";
        case 1: echo "1<br>";
        case 2: echo "2<br>";
        case 3: echo "3<br>";
        case 4: echo "4<br>";
        case 5: echo "5<br>";
        case 6: echo "6<br>";
        case 7: echo "7<br>";
        case 8: echo "8<br>";
        case 9: echo "9<br>";
        case 10: echo "10<br>";
        case 11: echo "11<br>";
        case 12: echo "12<br>";
        case 13: echo "13<br>";
        case 14: echo "14<br>";
        case 15: echo "15<br>"; break;
    }


    echo "<h2>Задание 3</h2>";
    function add($x, $y) {
        return $x + $y;
    }

    function subtract($x, $y) {
        return $x - $y;
    }

    function multiply($x, $y) {
        return $x * $y;
    }

    function divide($x, $y) {
        return $y != 0 ? $x / $y : "Делить на 0 нельзя";
    }

    $a = 8;
    $b = 2;

    echo "a = $a<br>";
    echo "b = $b<br><br>";
    echo "Сумма: " . add($a, $b) . "<br>";
    echo "Разность: " . subtract($a, $b) . "<br>";
    echo "Произведение: " . multiply($a, $b) . "<br>";
    echo "Деление: " . divide($a, $b) . "<br>";


    echo "<h2>Задание 4</h2>"; // используем функции созданные для задания 3
    function mathOperation($arg1, $arg2, $operation) {
        switch ($operation) {
            case 'add':
                return add($arg1, $arg2);
            case 'subtract':
                return subtract($arg1, $arg2);
            case 'multiply':
                return multiply($arg1, $arg2);
            case 'divide':
                return divide($arg1, $arg2);
            default:
                return "Неизвестная операция";
        }
    }

    $a = 14;
    $b = 7;
    $op = 'divide';

    echo "a = $a<br>";
    echo "b = $b<br>";
    echo "operation = $op<br><br>";
    echo "Результат $op: " . mathOperation($a, $b, $op) . "<br>";


    echo "<h2>Задание 6</h2>";
    function power($val, $pow) {
        if ($pow == 0) return 1;
        return $val * power($val, $pow - 1);
    }

    $a = 2;
    $b = 8;

    echo "a = $a<br>";
    echo "b = $b<br><br>";

    echo "$a в степени $b = " . power($a, $b) . "<br>";
?>