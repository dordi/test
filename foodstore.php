<?php

header("Content-Type: text/xml");
echo "<?xml version='1.0' encoding='UTF-8' standalone='yes'?>";
echo "<response>";
    $food = $_GET['food'];
    $foodArray = array('tuna', 'bacon', 'beef', 'loaf', 'ham');
    if (in_array($food, $foodArray)) {
        echo 'we do have ' . $food . '!';
    } elseif ($food == '') {
        echo 'nothing entred';
    } else {
        echo 'sorry we do not sell any ' . $food;
    }
echo "</response>";
