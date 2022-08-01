<?php
header('Access-Control-Allow-Origin: *'); 
include("dbconnect.php");
$conn = OpenCon();
$_POST = json_decode(file_get_contents("php://input"), TRUE);
$username = $_POST["username"];
$password = $_POST["password"];
$sql_check = "SELECT * FROM login_data WHERE username = '$username'"; 
$result = mysqli_query($conn,$sql_check);
$result_detail = mysqli_fetch_all($result, MYSQLI_ASSOC);
if ($result_detail[0] == null) {
    $sql_reg = "INSERT INTO login_data (username, password) VALUES ('$username','$password')";
    mysqli_query($conn,$sql_reg);
    } else {
    echo ("That username already exists!");
     echo json_encode($movies);
    }

CloseCon($conn);
?>
