-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: mymovies_jami
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `login_data`
--

DROP TABLE IF EXISTS `login_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_data`
--

LOCK TABLES `login_data` WRITE;
/*!40000 ALTER TABLE `login_data` DISABLE KEYS */;
INSERT INTO `login_data` VALUES (48,'jami','jami'),(49,'Laura','laura'),(60,'ville','kebab');
/*!40000 ALTER TABLE `login_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_reviews`
--

DROP TABLE IF EXISTS `movie_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movieName` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `movieComment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `movieWatched` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `movieRating` decimal(3,1) DEFAULT NULL,
  `poster_image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `movie_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_reviews`
--

LOCK TABLES `movie_reviews` WRITE;
/*!40000 ALTER TABLE `movie_reviews` DISABLE KEYS */;
INSERT INTO `movie_reviews` VALUES (24,'CODA - 2021','Testing','2022-07-10T10:12:47.000Z',NULL,'https://image.tmdb.org/t/p/original/BzVjmm8l23rPsijLiNLUzuQtyd.jpg',NULL,'jami'),(25,'Eraser - 1996','Tää oli kyllä hyvä','2000-07-11T10:14:18.000Z',NULL,'https://image.tmdb.org/t/p/original/uu2gBpFElDfxTI6BI9bT4pZ4kvw.jpg',NULL,'jami'),(26,'True Lies - 1994','Tämän vois itse asiassa katsoa tänään??','2022-07-18T15:57:07.000Z',NULL,'https://image.tmdb.org/t/p/original/pweFTnzzTfGK68woSVkiTgjLzWm.jpg',NULL,'ville'),(27,'The Batman - 2022','Ihan OK. Hullun pitkä','',NULL,'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg',NULL,'laura'),(30,'Jurassic Park - 1993','God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.','1998-07-18T16:25:56.000Z',NULL,'https://image.tmdb.org/t/p/original/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg',NULL,'jami'),(31,'Solo: A Star Wars Story - 2018','Hans Olo','2022-06-26T18:10:46.000Z',NULL,'https://image.tmdb.org/t/p/original/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg',NULL,'jami'),(32,'The Lord of the Rings: The Two Towers - 2002','Looks like meat\'s back on the menu, boys!','2001-07-18T18:14:32.000Z',NULL,'https://image.tmdb.org/t/p/original/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',NULL,'jami'),(33,'Unthinkable - 2010','Tykkäsin.','2021-04-13T18:58:29.000Z',NULL,'https://image.tmdb.org/t/p/original/6yQqguytl10FhImngDHV90Aqewa.jpg',NULL,'ville'),(34,'Toy Story 4 - 2019','gödfjgkl','2022-07-12T09:08:54.000Z',NULL,'https://image.tmdb.org/t/p/original/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',NULL,'laura'),(35,'White Men Can\'t Jump - 1992','En oo kattonu.','1993-07-01T17:38:01.000Z',NULL,'https://image.tmdb.org/t/p/original/jnI05Z2Cm9ACEJo8FGen7tdHKLl.jpg',NULL,'jami'),(36,'The Gray Man - 2022','Ihan OK.','2022-07-24T15:56:29.000Z',NULL,'https://image.tmdb.org/t/p/original/13r1DFhfL0qufFjXnrvWuh6qKqH.jpg','725201','laura'),(37,'Rush Hour - 1998','Hehehehe','2000-07-25T15:57:19.000Z',NULL,'https://image.tmdb.org/t/p/original/we7wOLVFgxhzLzUt0qNe50xdIQZ.jpg','2109','laura'),(38,'Toy Story 2 - 1999','Ei ihan niin hyvä kuin ykkönen','2000-08-01T15:57:51.000Z',NULL,'https://image.tmdb.org/t/p/original/eVGu0zsezaSCuN67zgNhzjeNI9Z.jpg','863','laura'),(39,'Avengers: Endgame - 2019','','2019-07-05T18:35:57.000Z',NULL,'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg','299534','jami');
/*!40000 ALTER TABLE `movie_reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-26 16:03:41
