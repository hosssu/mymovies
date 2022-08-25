<?php
header('Access-Control-Allow-Origin: *');
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "killerpi";
 $dbpass = "G#k.&P{2nP#}";
 $db = "killerpi_mymovies";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   

?>