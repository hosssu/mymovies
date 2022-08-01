<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-type: text/plain; charset=utf8mb4_unicode_ci');
include("dbconnect.php");
$conn = OpenCon();
$method = $_SERVER['REQUEST_METHOD'];
$sql = "SELECT * FROM movie_reviews WHERE wlist <> '1' ORDER BY id DESC";
$result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));
$movies = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($movies);

mysqli_close($conn);

?>

