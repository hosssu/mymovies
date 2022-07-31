<?php
header('Access-Control-Allow-Origin: *');
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "admin";
 $db = "mymovies_jami";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   

?>