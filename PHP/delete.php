<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-type: text/plain; charset=utf8mb4_unicode_ci');
include("dbconnect.php");
$conn = OpenCon();
$_POST = json_decode(file_get_contents("php://input"), TRUE);
$movie_id = $_POST["movie_id"];
$username = $_POST["username"];
$movieRating = $_POST["movieRating"];
$id = (int) $movie_id;
$sql = "DELETE FROM movie_reviews WHERE movie_reviews.id = $id"; 
$result = mysqli_query($conn,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
}

CloseCon($conn);
?>