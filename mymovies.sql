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
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_data`
--

LOCK TABLES `login_data` WRITE;
/*!40000 ALTER TABLE `login_data` DISABLE KEYS */;
INSERT INTO `login_data` VALUES (31,'lollo','kebabb'),(32,'lollo','kebabb'),(33,'lollo','kebabb'),(34,'lollo','kebabb'),(35,'lollo','kebab'),(36,'lollo','kebab'),(37,'lollo','kebab'),(38,'lollo','kebab'),(39,'lollo','kebab'),(40,'lollo','kebab'),(41,'lollo','kebab'),(42,'asdas','asdd'),(43,'asdas','asdd'),(44,'asdas','asdd'),(45,'asdas','asdd'),(46,'asdas','asdd'),(47,'asdas','asdd'),(48,'jami','jami'),(49,'Laura','laura');
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
  `movieName` varchar(200) NOT NULL,
  `movieComment` text NOT NULL,
  `movieWatched` varchar(50) DEFAULT NULL,
  `movieRating` decimal(3,1) DEFAULT NULL,
  `poster_image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_reviews`
--

LOCK TABLES `movie_reviews` WRITE;
/*!40000 ALTER TABLE `movie_reviews` DISABLE KEYS */;
INSERT INTO `movie_reviews` VALUES (24,'CODA - 2021','Testing','2022-07-10T10:12:47.000Z',NULL,'https://image.tmdb.org/t/p/original/BzVjmm8l23rPsijLiNLUzuQtyd.jpg'),(25,'Eraser - 1996','Tää oli kyllä hyvä','2000-07-11T10:14:18.000Z',NULL,'https://image.tmdb.org/t/p/original/uu2gBpFElDfxTI6BI9bT4pZ4kvw.jpg'),(26,'True Lies - 1994','Tämän vois itse asiassa katsoa tänään??','2022-07-18T15:57:07.000Z',NULL,'https://image.tmdb.org/t/p/original/pweFTnzzTfGK68woSVkiTgjLzWm.jpg'),(27,'The Batman - 2022','Ihan OK. Hullun pitkä','',NULL,'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg'),(30,'Jurassic Park - 1993','God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.','1998-07-18T16:25:56.000Z',NULL,'https://image.tmdb.org/t/p/original/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg'),(31,'Solo: A Star Wars Story - 2018','Hans Olo','2022-06-26T18:10:46.000Z',NULL,'https://image.tmdb.org/t/p/original/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg'),(32,'The Lord of the Rings: The Two Towers - 2002','Looks like meat\'s back on the menu, boys!','2001-07-18T18:14:32.000Z',NULL,'https://image.tmdb.org/t/p/original/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg'),(33,'Unthinkable - 2010','Tykkäsin.','2021-04-13T18:58:29.000Z',NULL,'https://image.tmdb.org/t/p/original/6yQqguytl10FhImngDHV90Aqewa.jpg'),(34,'Toy Story 4 - 2019','gödfjgkl','2022-07-12T09:08:54.000Z',NULL,'https://image.tmdb.org/t/p/original/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'),(35,'White Men Can\'t Jump - 1992','En oo kattonu.','1993-07-01T17:38:01.000Z',NULL,'https://image.tmdb.org/t/p/original/jnI05Z2Cm9ACEJo8FGen7tdHKLl.jpg');
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

-- Dump completed on 2022-07-21 10:16:15
