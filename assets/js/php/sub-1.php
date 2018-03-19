<?php

$username = $_POST['username'];

$data = ['abc1234','acb4321','cba1234567'];

if(in_array($username,$data)){
	echo '{"success":1}';
}else{
	echo '{"success":0}';
}