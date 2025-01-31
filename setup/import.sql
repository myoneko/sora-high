-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2025 at 05:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sora_high`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` smallint(6) NOT NULL,
  `element` varchar(20) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `contact_number` varchar(20) NOT NULL DEFAULT '000-000-0000',
  `companion` varchar(50) DEFAULT NULL,
  `admission_date` date NOT NULL,
  `birthday` date DEFAULT NULL,
  `constellation` varchar(50) NOT NULL,
  `class` varchar(8) NOT NULL,
  `about` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `name`, `age`, `element`, `gender`, `contact_number`, `companion`, `admission_date`, `birthday`, `constellation`, `class`, `about`) VALUES
('HDY012', 'Yumi Yamamoto', 15, 'Dendro', 'Female', '000-000-0000', 'Hoshi', '2025-08-28', '2009-01-10', 'Hoshi no Utahime', 'A2', ''),
('HEH002', 'Hikari Kobayashi', 16, 'Electro', 'Female', '000-000-0000', 'Taiyo', '2024-11-05', '2008-12-04', 'Hikari no Megami', 'A2', ''),
('HGR014', 'Riku Watanabe', 15, 'Geo', 'Male', '000-000-0000', 'Sora', '2024-09-10', '2008-05-17', 'Habataki no Tenshi', 'A2', ''),
('HPY021', 'Yui Kato', 15, 'Pyro', 'Female', '000-000-0000', 'Hoshi', '2025-08-28', '2009-01-10', 'Hoshi no Utahime', 'A2', ''),
('IAD026', 'Daiki Mori', 15, 'Anemo', 'Male', '000-000-0000', 'Iwa', '2024-08-28', '2008-08-09', 'Ishi no Kokoro', 'A2', ''),
('IDK011', 'Ken Ueda', 17, 'Dendro', 'Male', '000-000-0000', 'Iwa', '2023-11-10', '2007-01-25', 'Ishi no Kokoro', 'A2', ''),
('IHH022', 'Hibiki Ito', 17, 'Hydro', 'Male', '000-000-0000', 'Raijin', '2023-04-01', '2006-08-21', 'Ikazuchi no Senshi', 'A2', ''),
('IPR006', 'Ren Yamamoto', 15, 'Pyro', 'Male', '000-000-0000', 'Iwa', '2024-08-28', '2008-08-09', 'Ishi no Kokoro', 'A2', ''),
('KAH007', 'Haruka Nakamura', 16, 'Anemo', 'Female', '000-000-0000', 'Yukimura', '2024-04-15', '2007-12-05', 'Kori no Hime', 'A2', ''),
('KAH017', 'Haruto Sato', 17, 'Anemo', 'Male', '000-000-0000', 'Hayate', '2022-09-01', '2006-11-27', 'Kaze no Kokoro', 'A2', ''),
('KCA010', 'Akari Yamamoto', 17, 'Cryo', 'Female', '000-000-0000', 'Hoshizora', '2022-04-05', '2006-02-28', 'Kirameki no Yoru', 'A2', ''),
('KDR013', 'Rika Miura', 16, 'Dendro', 'Female', '000-000-0000', 'Yukimura', '2024-04-15', '2007-12-05', 'Kori no Hime', 'A2', ''),
('KET009', 'Takeru Watanabe', 15, 'Electro', 'Male', '000-000-0000', 'Kumo', '2025-06-15', '2009-03-27', 'Kumo no Shiro', 'A2', ''),
('KHK024', 'Kenji Takahashi', 16, 'Hydro', 'Male', '000-000-0000', 'Kuro', '2023-05-08', '2007-03-29', 'Kurai no Kishi', 'A2', ''),
('MGA015', 'Aoi Suzuki', 17, 'Geo', 'Female', '000-000-0000', 'Midori', '2023-09-15', '2007-02-03', 'Midori no Mori', 'A2', ''),
('MPA005', 'Aika Tanaka', 16, 'Pyro', 'Female', '000-000-0000', 'Mizu', '2024-06-20', '2008-11-12', 'Mizu no Tenshi', 'A2', ''),
('SAK025', 'Kaori Takahashi', 15, 'Anemo', 'Female', '000-000-0000', 'Hana', '2024-05-12', '2008-04-03', 'Sakura no Sei', 'A2', ''),
('SEH018', 'Hana Kobayashi', 15, 'Electro', 'Female', '000-000-0000', 'Sora', '2025-07-12', '2009-10-08', 'Sora no Hana', 'A2', ''),
('SGS001', 'Sakura Tanaka', 15, 'Geo', 'Female', '000-000-0000', 'Hoshi', '2024-05-12', '2008-04-03', 'Sakura no Sei', 'A2', ''),
('TGY023', 'Yumi Kato', 16, 'Geo', 'Female', '000-000-0000', 'Tsuki', '2023-06-15', '2007-06-18', 'Tsukiakari no Utahime', 'A2', ''),
('THS019', 'Sota Suzuki', 15, 'Hydro', 'Male', '000-000-0000', 'Taiyo', '2024-07-22', '2008-01-10', 'Taiyo no Miko', 'A2', ''),
('UHN003', 'Nanami Kimura', 15, 'Hydro', 'Female', '000-000-0000', 'Umi', '2025-04-01', '2009-11-22', 'Umi no Megami', 'A2', ''),
('YCA016', 'Ayame Yoshida', 17, 'Cryo', 'Female', '000-000-0000', 'Yume', '2022-11-10', '2006-07-04', 'Yume no Sekai', 'A2', ''),
('YCK008', 'Kaito Yoshida', 16, 'Cryo', 'Male', '000-000-0000', 'Yukio', '2024-04-08', '2008-07-15', 'Yuki no Ryū', 'A2', ''),
('YCT020', 'Takeshi Ishikawa', 16, 'Cryo', 'Male', '000-000-0000', 'Kage', '2023-10-20', '2007-09-12', 'Yami no Shizuka', 'A2', ''),
('YPA004', 'Aoi Fujiwara', 16, 'Pyro', 'Male', '000-000-0000', 'Kage', '2023-10-20', '2007-09-12', 'Yami no Shizuka', 'A2', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
