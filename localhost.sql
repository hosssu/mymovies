-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 31.07.2022 klo 23:34
-- Palvelimen versio: 5.7.38-cll-lve
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `killerpi_mymovies`
--
CREATE DATABASE IF NOT EXISTS `killerpi_mymovies` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `killerpi_mymovies`;

-- --------------------------------------------------------

--
-- Rakenne taululle `login_data`
--

CREATE TABLE `login_data` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Vedos taulusta `login_data`
--

INSERT INTO `login_data` (`id`, `username`, `password`) VALUES
(1, 'jami', 'jami');

-- --------------------------------------------------------

--
-- Rakenne taululle `movie_reviews`
--

CREATE TABLE `movie_reviews` (
  `id` int(11) NOT NULL,
  `movieName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `movieComment` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `movieRating` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `movieWatched` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `poster_image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `movie_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `movieOverview` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `wlist` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vedos taulusta `movie_reviews`
--

INSERT INTO `movie_reviews` (`id`, `movieName`, `movieComment`, `movieRating`, `movieWatched`, `poster_image`, `movie_id`, `username`, `movieOverview`, `wlist`) VALUES
(90, 'The Black Phone - 2022', '', '', '', 'https://image.tmdb.org/t/p/original/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg', '756999', 'jami', 'Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killerâ€™s previous victims. And they are dead set on making sure that what happened to them doesnâ€™t happen to Finney.', 1),
(91, 'Total Recall - 2012', '', '', '', 'https://image.tmdb.org/t/p/original/fucmGeZYM4yzqJUnDTc4pKQNCej.jpg', '64635', 'jami', 'Welcome to Rekall, the company that can turn your dreams into real memories. For a factory worker named Douglas Quaid, even though he\'s got a beautiful wife who he loves, the mind-trip sounds like the perfect vacation from his frustrating life - real memories of life as a super-spy might be just what he needs. But when the procedure goes horribly wrong, Quaid becomes a hunted man. Finding himself on the run from the police - controlled by Chancellor Cohaagen, the leader of the free world - Quaid teams up with a rebel fighter to find the head of the underground resistance and stop Cohaagen. The line between fantasy and reality gets blurred and the fate of his world hangs in the balance as Quaid discovers his true identity, his true love, and his true fate.', 1),
(93, 'Escape Room - 2019', 'Piti jÃ¤ttÃ¤Ã¤ kesken, kun oli niin paskaa nÃ¤yttelemistÃ¤. Hohhoijjakkaa.', '1', '2022-07-31T13:42:40.693Z', 'https://image.tmdb.org/t/p/original/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg', '522681', 'jami', 'Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.', 0),
(95, 'Guardians of the Galaxy Vol. 3 - 2023', '', '', '', 'https://image.tmdb.org/t/p/original/cVrr7gSBD0w3ZuCnUrnShKB2OIC.jpg', '447365', 'jami', 'Star-Lord, still reeling from the loss of Gamora, must rally his team to defend the universe along with protecting one of their own. A mission that, if not completed, could lead to the end of the Guardians as we know them.', 1),
(96, 'The Gentlemen - 2019', 'Guy Ritchien parhaimmistoa', '5', '2022-07-31T20:24:42.053Z', 'https://image.tmdb.org/t/p/original/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg', '522627', 'jami', 'American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that heâ€™s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login_data`
--
ALTER TABLE `login_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie_reviews`
--
ALTER TABLE `movie_reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login_data`
--
ALTER TABLE `login_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movie_reviews`
--
ALTER TABLE `movie_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
