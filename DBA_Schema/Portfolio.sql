-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sql_portfolio
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `admin_user`
--

DROP TABLE IF EXISTS `admin_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_user` (
  `id` char(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` char(100) DEFAULT NULL,
  `confirmPassword` char(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_user`
--

LOCK TABLES `admin_user` WRITE;
/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES ('4f124afc-3842-4aed-a3e7-fc042cdbe9f1','admin','$2a$10$Cn73c0VUDkV8XgZjuJCyRePypQEagKBi/bzrqfiVqTm7fwe6aN/yK','$2a$10$Cn73c0VUDkV8XgZjuJCyRePypQEagKBi/bzrqfiVqTm7fwe6aN/yK','admin@gmail.com'),('81f0d605-449e-499a-b9f1-842bee42f274','karan','$2a$10$7LyG64KeHLoE7lyCl1.9QORyqJtMganGNv7nT5Xb7p.h45uM7U4Xq','$2a$10$7LyG64KeHLoE7lyCl1.9QORyqJtMganGNv7nT5Xb7p.h45uM7U4Xq','karan.chauhan619@gmail.com'),('d0a47400-f255-421b-8e36-6ba148571cc0','karan','$2a$10$lFoQ5YRNFsRpphTgPTlHvOYAIEiJYm767mfmbad229mbCFEDX5jUy','$2a$10$lFoQ5YRNFsRpphTgPTlHvOYAIEiJYm767mfmbad229mbCFEDX5jUy','karan.chauhan619@gmail.com');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_entries`
--

DROP TABLE IF EXISTS `contact_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_entries` (
  `id` char(45) DEFAULT NULL,
  `name` char(45) DEFAULT NULL,
  `phoneNumber` char(45) DEFAULT NULL,
  `email` char(45) DEFAULT NULL,
  `content` char(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_entries`
--

LOCK TABLES `contact_entries` WRITE;
/*!40000 ALTER TABLE `contact_entries` DISABLE KEYS */;
INSERT INTO `contact_entries` VALUES ('3f9d742a-d299-4dc2-af6a-598cb6069568','karan','(647) 789456','chauhan.karan3544@gmail.com','sadsafdsafdsfasfsdf'),('9395a1c6-d760-4f74-a0fb-acbd3423e4b3','karan','(647) 123456','chauhan.karan3544@gmail.com','asddfdsadfFasfd'),('ec4a1fd6-a64c-49e6-ac8d-d1b607fa49b2','ikbal','647789123','kchauhan@reena.org','asdasfdsafasdgfsfdg');
/*!40000 ALTER TABLE `contact_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(225) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `link` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg','NETFLIX CLONE','https://netflix-clone-ff599.web.app/'),(2,'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg','AMAZON CLONE','https://clone-1a927.web.app/'),(3,'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg','SPOTIFY CLONE','test'),(4,'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg','COMING SOON',NULL),(9,'tes','test','test');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resume_file`
--

DROP TABLE IF EXISTS `resume_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resume_file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(100) DEFAULT NULL,
  `resume_file` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resume_file`
--

LOCK TABLES `resume_file` WRITE;
/*!40000 ALTER TABLE `resume_file` DISABLE KEYS */;
INSERT INTO `resume_file` VALUES (3,'resume','KARAN_CHAUHAN_Full_Stack_Developer_Resume.pdf');
/*!40000 ALTER TABLE `resume_file` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-22 16:59:10
