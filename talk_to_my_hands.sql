-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2022 at 02:15 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `talk_to_my_hands`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin_test', '827ccb0eea8a706c4c34a16891f84e7b');

-- --------------------------------------------------------

--
-- Table structure for table `capstone_user`
--

CREATE TABLE `capstone_user` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `usersurname` varchar(255) NOT NULL,
  `age` int(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `verification` text NOT NULL,
  `verify_status` tinyint(2) NOT NULL DEFAULT 0 COMMENT '0=no,1=yes',
  `verified_email` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `capstone_user`
--

INSERT INTO `capstone_user` (`id`, `username`, `usersurname`, `age`, `email`, `password`, `time`, `verification`, `verify_status`, `verified_email`) VALUES
(55, 'venedict', 'hodrial', 24, 'hoddyhod8@gmail.com', 'bbb8aae57c104cda40c93843ad5e6db8', '2022-01-28 04:47:44', 'e5b7865df4f7e3e25d398a422ce32c0f', 0, NULL),
(59, 'venedict', 'test2', 25, 'almacawile19@gmail.com', '4297f44b13955235245b2497399d7a93', '2022-01-28 04:56:35', 'bb9aba202375ed0a5823eab8028c7923', 0, NULL),
(68, 'admin_test', 'hodrial', 25, 'ho@gmail.com', '4297f44b13955235245b2497399d7a93', '2022-01-28 06:26:39', 'd5ac258829e9e0dfda1d453ddab33dea', 0, NULL),
(69, 'admin_test', 'hodrial', 25, 'ronnielgrana09@gmail.com', '4297f44b13955235245b2497399d7a93', '2022-01-28 06:28:30', '46db75ed17d846e1750628dde8397d64', 0, NULL),
(70, 'admin_test', 'hodrial', 25, 'hodict1@gmail.com', '8ad3fac6c6b3528499d347d924443abb', '2022-01-28 09:16:25', 'a45fbb2ca011d6bfe2756ccdc34bdfce', 0, NULL),
(71, 'qwewqe', 'hodrial', 23, 'qwewqeqe2@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 09:17:43', 'efb7b3092e776cd296582598d45649e3', 0, NULL),
(72, 'qwewqe', 'hodrial', 23, 'qw2@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 09:17:57', '7379e83d351b7e46f713017bb88111ab', 0, NULL),
(73, 'admin_test', 'hodrial', 25, 'hod8@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 09:19:02', 'b57dd531f4ee3aede18dda923a7ccf27', 0, NULL),
(74, 'admin_test', 'hodrial', 25, 'ho8@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 09:44:00', '823e03eb3bd67cf242a34a97e587f847', 0, NULL),
(75, 'admin_test', 'hodrial', 25, 'ronniana09@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 09:44:25', '0859a211df6f6d3e736a96109e2853d1', 0, NULL),
(76, 'admin_test', 'hodrial', 25, 'alcawile19@gmail.com', 'e034fb6b66aacc1d48f445ddfb08da98', '2022-01-28 09:54:41', '597e271fd59ef0f8e31bda71a9f50912', 0, NULL),
(77, 'admin_test', 'hodrial', 25, 'wdhowed8@gmail.com', 'b3ddbc502e307665f346cbd6e52cc10d', '2022-01-28 09:56:58', 'cbfc206af8859305854e2e3201d33544', 0, NULL),
(78, 'sdkjagsfkgj', 'asjfhdjklsafk', 23, 'askja@gmail.com', 'd1c549681b1bd791b056b365aead767c', '2022-01-28 10:02:10', '35d0d6723860c16420d02954283a11f8', 0, NULL),
(79, 'admin_test', 'hodrial', 24, 'vve@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '2022-01-28 10:04:10', 'c09e0eccf15a9e76c4bfa093852a92be', 0, NULL),
(80, 'asdasdas', 'adad', 23, 'adad@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 10:06:41', '4e15a8f6cc90c414d9732711d7a32795', 0, NULL),
(81, 'username', 'surname', 24, 'surname@gmail.cm', '202cb962ac59075b964b07152d234b70', '2022-01-28 10:15:03', 'ebfafd21f72d7144fe16b401bafb1695', 0, NULL),
(82, 'admin_test', 'surname', 23, 'username@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 10:16:34', '8e6bed89cc84ffdde8e84b3356cf1f2d', 0, NULL),
(83, 'username', 'surname', 23, 'usersurname@gmail.com', '4297f44b13955235245b2497399d7a93', '2022-01-28 10:18:51', '3976d07e35d75904c0b16259e627515a', 0, NULL),
(84, 'surname', 'username', 23, 'surnan@gmail.com', '202cb962ac59075b964b07152d234b70', '2022-01-28 10:20:00', 'ef4ab48854256f00c6f35f3f086bcc4e', 0, NULL),
(85, 'hodrial', 'venedict', 25, 'hodrialvenedict1@gmail.com', '4297f44b13955235245b2497399d7a93', '2022-01-29 10:32:07', '98c71fb34eba5f238f5c42d3bba66f48', 1, NULL),
(86, 'Reymar', 'Britania', 21, 'reymarbritania12233@gmail.com', '749d4b626f48346897dd5e42700a5042', '2022-01-29 11:56:51', 'b2ed27bcda0492a375e2dac747fec072', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `forgetpassword`
--

CREATE TABLE `forgetpassword` (
  `USERID` int(100) NOT NULL,
  `CODE` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `leaderboards`
--

CREATE TABLE `leaderboards` (
  `ID` int(11) NOT NULL,
  `USERID` int(100) NOT NULL,
  `NAME` varchar(30) NOT NULL,
  `COUNT` int(11) NOT NULL,
  `HOURS` int(11) NOT NULL,
  `MINUTES` int(100) NOT NULL,
  `SECONDS` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaderboards`
--

INSERT INTO `leaderboards` (`ID`, `USERID`, `NAME`, `COUNT`, `HOURS`, `MINUTES`, `SECONDS`) VALUES
(30, 55, 'venedict', 0, 0, 1, 7),
(31, 85, 'hodrial', 9, 0, 0, 9),
(32, 85, 'hodrial', 35, 0, 0, 35),
(33, 85, 'hodrial', 49, 0, 0, 49);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `capstone_user`
--
ALTER TABLE `capstone_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forgetpassword`
--
ALTER TABLE `forgetpassword`
  ADD KEY `USERID` (`USERID`);

--
-- Indexes for table `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USER` (`USERID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `capstone_user`
--
ALTER TABLE `capstone_user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `leaderboards`
--
ALTER TABLE `leaderboards`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `forgetpassword`
--
ALTER TABLE `forgetpassword`
  ADD CONSTRAINT `forgetpassword_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `capstone_user` (`id`);

--
-- Constraints for table `leaderboards`
--
ALTER TABLE `leaderboards`
  ADD CONSTRAINT `leaderboards_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `capstone_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
