-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2023 at 04:27 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `countries`
--

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `flag_img` varchar(255) NOT NULL,
  `flag_name` varchar(255) NOT NULL,
  `flag_official` varchar(255) NOT NULL,
  `flag_desc` varchar(255) NOT NULL,
  `flag_pop` int(11) NOT NULL,
  `flag_timezone` varchar(255) NOT NULL,
  `flag_continent` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `flag_img`, `flag_name`, `flag_official`, `flag_desc`, `flag_pop`, `flag_timezone`, `flag_continent`) VALUES
(1, '/assets/np.png', 'Nepali', 'Federal Democratic Republic of Nepali', 'The flag of Nepal is the world\'s only non-quadrilateral flag of a sovereign country. It takes the shape of two adjoining right-angled triangles and has a crimson red field with deep blue edges. Within the smaller upper triangle is an emblem of the upper h', 29136808, 'UTC+05:45', 'Asia'),
(2, '/assets/ki.png', 'Kiribati', 'Independent and Sovereign Republic of Kiribati', 'The flag of Kiribati is divided into two halves. While the upper half has a red field, at the center of which is a yellow frigate bird flying over the top half of a rising yellow sun with seventeen visible rays, the lower half is composed of six horizonta', 6031187, 'UTC+05:00', 'Asia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
