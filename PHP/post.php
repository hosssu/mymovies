<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-type: text/plain; charset=utf8mb4_unicode_ci');
include("dbconnect.php");
$conn = OpenCon();
$_POST = json_decode(file_get_contents("php://input"), TRUE);
$movieName = $_POST["movieName"];
$movieComment = $_POST["movieComment"];
$movieWatched = $_POST["movieWatched"];
$poster_image = $_POST["poster_image"];
$movie_id = $_POST["movie_id"];
$username = $_POST["username"];
$movieRating = $_POST["movieRating"];
$movieOverview = $_POST["movieOverview"];
$wlist = $_POST["wlist"];
$wlistId = (int) $wlist;
$find = array("'", "\"");
$replace = array("\'","\\\"");
$keystring = str_replace ($find,$replace,$movieOverview);

$sql = "INSERT INTO movie_reviews (movieName, movieComment, movieRating, movieWatched, poster_image, movie_id, username, wlist, movieOverview) VALUES ('$movieName','$movieComment','$movieRating','$movieWatched','$poster_image','$movie_id','$username', '$wlistId', '$keystring')"; 

$result = mysqli_query($conn,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
} else 

CloseCon($conn);
?>