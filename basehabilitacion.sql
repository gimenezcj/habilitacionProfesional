-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: habilitacion
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

LOCK TABLES `estaciones` WRITE;
/*!40000 ALTER TABLE `estaciones` DISABLE KEYS */;
INSERT INTO `estaciones` VALUES (1,'Zoo','Esta en el zoo',-34.91,-57.937,'2021-12-17 16:19:30','2021-12-17 16:19:30'),(2,'UTN','UTN FRLP',-34.904,-57.9253,'2021-12-17 16:20:04','2021-12-17 16:20:04');
/*!40000 ALTER TABLE `estaciones` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `estacionesestados` WRITE;
/*!40000 ALTER TABLE `estacionesestados` DISABLE KEYS */;
INSERT INTO `estacionesestados` VALUES (1,1,4,0,0,5,15,45,'2021-12-21 02:02:10','2021-12-21 02:02:10','2021-12-21 02:02:10'),(2,1,1,3,4,5,15,45,'2021-12-21 04:35:01','2021-12-21 04:35:01','2021-12-21 04:35:01'),(3,2,2,2,2,5,14,45,'2021-12-21 02:02:10','2021-12-21 02:02:10','2021-12-21 02:02:10'),(4,1,1,1,1,5,10,80,'2021-12-21 02:02:11','2021-12-21 02:02:11','2021-12-21 02:02:11'),(5,1,2,2,2,10,15,70,'2021-12-21 02:02:12','2021-12-21 02:02:12','2021-12-21 02:02:13'),(6,1,3,3,3,15,25,50,'2021-12-21 02:02:14','2021-12-21 02:02:14','2021-12-21 02:02:14'),(7,1,4,4,4,25,50,15,'2021-12-21 02:02:15','2021-12-21 02:02:15','2021-12-21 02:02:15'),(8,1,0,0,0,0,0,90,'2021-12-21 02:02:16','2021-12-21 02:02:16','2021-12-21 02:02:16'),(9,1,1,0,4,5,15,45,'2022-01-02 19:27:55','2022-01-02 19:27:55','2022-01-02 19:27:55'),(10,1,1,1,4,5,15,45,'2022-01-02 19:28:22','2022-01-02 19:28:21','2022-01-02 19:28:21'),(11,1,1,4,4,5,15,45,'2022-01-02 19:29:51','2022-01-02 19:29:51','2022-01-02 19:29:51'),(12,1,1,4,4,5,15,45,'2022-01-02 19:34:17','2022-01-02 19:34:17','2022-01-02 19:34:17'),(13,1,1,4,4,5,15,45,'2022-01-02 19:36:57','2022-01-02 19:36:57','2022-01-02 19:36:57'),(14,1,1,4,4,5,15,45,'2022-01-02 19:38:46','2022-01-02 19:38:46','2022-01-02 19:38:46'),(15,1,1,4,4,5,15,45,'2022-01-02 19:39:26','2022-01-02 19:39:26','2022-01-02 19:39:26'),(16,1,1,4,4,5,15,45,'2022-01-02 19:39:54','2022-01-02 19:39:54','2022-01-02 19:39:54'),(17,1,1,1,4,5,15,45,'2022-01-02 19:40:11','2022-01-02 19:40:11','2022-01-02 19:40:11'),(18,1,1,1,4,5,15,45,'2022-01-02 19:41:12','2022-01-02 19:41:12','2022-01-02 19:41:12'),(19,1,1,1,4,5,15,45,'2022-01-02 19:41:17','2022-01-02 19:41:17','2022-01-02 19:41:17'),(20,1,1,1,4,5,15,45,'2022-01-02 19:41:23','2022-01-02 19:41:23','2022-01-02 19:41:23'),(21,1,1,1,4,5,15,45,'2022-01-02 19:42:23','2022-01-02 19:42:23','2022-01-02 19:42:23'),(22,1,1,1,4,5,15,45,'2022-01-02 19:43:14','2022-01-02 19:43:14','2022-01-02 19:43:14'),(23,1,1,1,4,5,15,45,'2022-01-02 19:43:41','2022-01-02 19:43:41','2022-01-02 19:43:41'),(24,1,1,1,4,5,15,45,'2022-01-02 19:43:46','2022-01-02 19:43:46','2022-01-02 19:43:46'),(25,1,1,1,4,5,15,45,'2022-01-02 19:44:16','2022-01-02 19:44:16','2022-01-02 19:44:16'),(30,1,1,1,4,5,15,45,'2022-01-03 20:28:06','2022-01-03 20:28:06','2022-01-03 20:28:06'),(33,1,1,1,4,5,15,45,'2022-01-03 20:33:59','2022-01-03 20:33:59','2022-01-03 20:33:59'),(34,1,1,1,4,5,15,45,'2022-01-03 20:34:58','2022-01-03 20:34:58','2022-01-03 20:34:58'),(35,1,1,1,4,5,15,45,'2022-01-03 20:35:56','2022-01-03 20:35:56','2022-01-03 20:35:56'),(36,1,1,1,4,5,15,45,'2022-01-03 20:36:08','2022-01-03 20:36:08','2022-01-03 20:36:08'),(37,1,1,1,4,5,15,45,'2022-01-03 20:39:38','2022-01-03 20:39:38','2022-01-03 20:39:38'),(38,1,1,1,4,5,15,45,'2022-01-03 20:39:59','2022-01-03 20:39:59','2022-01-03 20:39:59'),(39,1,1,1,4,5,15,45,'2022-01-03 20:40:24','2022-01-03 20:40:24','2022-01-03 20:40:24'),(40,1,1,2,4,5,15,45,'2022-01-03 20:40:53','2022-01-03 20:40:53','2022-01-03 20:40:53'),(41,1,1,2,4,5,15,45,'2022-01-03 20:41:09','2022-01-03 20:41:09','2022-01-03 20:41:09'),(42,1,1,2,4,5,15,45,'2022-01-03 20:41:30','2022-01-03 20:41:30','2022-01-03 20:41:30'),(43,1,1,2,4,5,15,45,'2022-01-03 20:41:36','2022-01-03 20:41:36','2022-01-03 20:41:36'),(44,1,1,2,4,5,15,45,'2022-01-03 20:45:09','2022-01-03 20:45:09','2022-01-03 20:45:09'),(45,1,1,2,4,5,15,45,'2022-01-03 20:45:54','2022-01-03 20:45:54','2022-01-03 20:45:54'),(46,1,1,2,4,5,15,45,'2022-01-03 20:46:58','2022-01-03 20:46:58','2022-01-03 20:46:58'),(47,1,1,2,4,5,15,45,'2022-01-03 20:49:36','2022-01-03 20:49:36','2022-01-03 20:49:36'),(48,1,1,2,4,5,15,45,'2022-01-03 20:49:56','2022-01-03 20:49:56','2022-01-03 20:49:56'),(49,1,1,2,4,5,15,45,'2022-01-03 20:49:59','2022-01-03 20:49:59','2022-01-03 20:49:59'),(50,1,1,2,4,5,15,45,'2022-01-03 20:50:30','2022-01-03 20:50:30','2022-01-03 20:50:30'),(51,1,1,2,4,5,15,45,'2022-01-03 20:52:03','2022-01-03 20:52:03','2022-01-03 20:52:03'),(52,1,1,2,4,5,15,45,'2022-01-03 20:57:07','2022-01-03 20:57:07','2022-01-03 20:57:07'),(53,1,1,2,4,5,15,45,'2022-01-03 21:00:05','2022-01-03 21:00:05','2022-01-03 21:00:05'),(54,1,1,2,4,5,15,45,'2022-01-03 21:03:51','2022-01-03 21:03:51','2022-01-03 21:03:51'),(55,1,1,2,4,5,15,45,'2022-01-03 21:04:36','2022-01-03 21:04:36','2022-01-03 21:04:36'),(56,1,1,2,4,5,15,45,'2022-01-03 21:09:57','2022-01-03 21:09:57','2022-01-03 21:09:57'),(57,1,1,1,4,5,15,45,'2022-01-03 21:48:40','2022-01-03 21:48:40','2022-01-03 21:48:40'),(58,1,1,2,4,5,15,45,'2022-01-03 21:49:47','2022-01-03 21:49:47','2022-01-03 21:49:47'),(59,1,1,1,4,5,15,45,'2022-01-03 21:50:42','2022-01-03 21:50:42','2022-01-03 21:50:42'),(60,1,1,1,4,5,15,45,'2022-01-03 21:53:04','2022-01-03 21:53:04','2022-01-03 21:53:04'),(61,1,1,3,4,5,15,45,'2022-01-03 21:54:47','2022-01-03 21:54:47','2022-01-03 21:54:47'),(62,1,1,2,4,5,15,45,'2022-01-03 21:54:57','2022-01-03 21:54:57','2022-01-03 21:54:57'),(63,1,1,1,4,5,15,45,'2022-01-03 21:55:05','2022-01-03 21:55:05','2022-01-03 21:55:05'),(64,1,1,0,4,5,15,45,'2022-01-03 21:55:12','2022-01-03 21:55:12','2022-01-03 21:55:12'),(65,1,1,0,4,5,15,45,'2022-01-03 21:55:15','2022-01-03 21:55:15','2022-01-03 21:55:15'),(66,1,1,4,4,5,15,45,'2022-01-03 21:55:42','2022-01-03 21:55:42','2022-01-03 21:55:42'),(67,1,1,4,4,5,15,45,'2022-01-03 21:55:46','2022-01-03 21:55:46','2022-01-03 21:55:46'),(68,1,1,1,4,5,15,45,'2022-01-03 21:56:01','2022-01-03 21:56:01','2022-01-03 21:56:01'),(69,1,1,4,4,5,15,45,'2022-01-03 21:58:40','2022-01-03 21:58:40','2022-01-03 21:58:40'),(70,1,1,1,4,5,15,45,'2022-01-03 21:58:46','2022-01-03 21:58:46','2022-01-03 21:58:46'),(71,1,1,3,4,5,15,45,'2022-01-03 21:59:09','2022-01-03 21:59:09','2022-01-03 21:59:09'),(72,1,1,0,4,5,15,45,'2022-01-04 02:03:10','2022-01-04 02:03:10','2022-01-04 02:03:10'),(73,1,1,0,4,5,15,45,'2022-01-04 02:04:11','2022-01-04 02:04:11','2022-01-04 02:04:11'),(74,1,1,2,4,5,15,45,'2022-01-04 02:05:25','2022-01-04 02:05:25','2022-01-04 02:05:25'),(75,1,1,4,4,5,15,45,'2022-01-04 02:08:58','2022-01-04 02:08:58','2022-01-04 02:08:58'),(76,1,1,4,4,5,15,45,'2022-01-04 02:09:11','2022-01-04 02:09:11','2022-01-04 02:09:11'),(77,1,1,2,4,5,15,45,'2022-01-04 02:10:04','2022-01-04 02:10:04','2022-01-04 02:10:04'),(78,1,1,2,4,5,15,45,'2022-01-04 02:14:03','2022-01-04 02:14:03','2022-01-04 02:14:03'),(79,1,1,0,4,5,15,45,'2022-01-04 02:14:10','2022-01-04 02:14:10','2022-01-04 02:14:10'),(80,1,1,4,4,5,15,45,'2022-01-04 02:16:41','2022-01-04 02:16:41','2022-01-04 02:16:41'),(81,1,1,0,4,5,15,45,'2022-01-04 02:18:38','2022-01-04 02:18:38','2022-01-04 02:18:38'),(82,1,1,0,4,5,15,45,'2022-01-04 02:19:50','2022-01-04 02:19:50','2022-01-04 02:19:50'),(83,1,1,0,4,5,15,45,'2022-01-04 02:22:37','2022-01-04 02:22:37','2022-01-04 02:22:37'),(84,1,1,3,4,5,15,45,'2022-01-04 02:27:09','2022-01-04 02:27:09','2022-01-04 02:27:09'),(85,1,1,3,4,5,15,45,'2022-01-04 02:27:30','2022-01-04 02:27:30','2022-01-04 02:27:30'),(86,1,1,3,4,5,15,45,'2022-01-04 02:28:51','2022-01-04 02:28:51','2022-01-04 02:28:51'),(87,1,1,3,4,5,15,45,'2022-01-04 02:29:31','2022-01-04 02:29:31','2022-01-04 02:29:31'),(88,1,1,3,4,5,15,45,'2022-01-04 02:30:02','2022-01-04 02:30:02','2022-01-04 02:30:02'),(89,1,1,3,4,5,15,45,'2022-01-04 02:30:03','2022-01-04 02:30:03','2022-01-04 02:30:03'),(90,1,1,3,4,5,15,45,'2022-01-04 02:30:04','2022-01-04 02:30:04','2022-01-04 02:30:04'),(91,1,1,3,4,5,15,45,'2022-01-04 02:30:13','2022-01-04 02:30:13','2022-01-04 02:30:13'),(92,1,1,2,4,5,15,45,'2022-01-04 02:31:08','2022-01-04 02:31:08','2022-01-04 02:31:08'),(93,1,1,1,4,5,15,45,'2022-01-04 02:31:17','2022-01-04 02:31:17','2022-01-04 02:31:17'),(94,1,1,1,4,5,15,45,'2022-01-04 02:32:44','2022-01-04 02:32:44','2022-01-04 02:32:44'),(95,1,1,1,4,5,15,45,'2022-01-04 02:36:13','2022-01-04 02:36:13','2022-01-04 02:36:13'),(96,1,1,4,4,5,15,45,'2022-01-04 02:36:21','2022-01-04 02:36:21','2022-01-04 02:36:21'),(97,1,1,1,4,5,15,45,'2022-01-04 02:39:25','2022-01-04 02:39:25','2022-01-04 02:39:25'),(98,1,1,1,4,5,15,45,'2022-01-04 02:39:46','2022-01-04 02:39:46','2022-01-04 02:39:46'),(99,1,1,2,4,5,15,45,'2022-01-04 02:39:51','2022-01-04 02:39:51','2022-01-04 02:39:51'),(100,1,1,3,4,5,15,45,'2022-01-04 02:39:55','2022-01-04 02:39:55','2022-01-04 02:39:55'),(101,1,3,4,4,25,15,45,'2022-01-04 02:39:59','2022-01-04 02:39:59','2022-01-04 02:39:59'),(102,1,2,0,4,20,15,45,'2022-01-04 02:40:05','2022-01-04 02:40:05','2022-01-04 02:40:05'),(103,1,2,1,4,15,15,45,'2022-01-04 02:40:10','2022-01-04 02:40:10','2022-01-04 02:40:10'),(104,1,1,2,4,10,15,45,'2022-01-04 02:40:14','2022-01-04 02:40:14','2022-01-04 02:40:14'),(105,1,1,3,4,5,15,45,'2022-01-04 02:40:18','2022-01-04 02:40:18','2022-01-04 02:40:18'),(106,2,1,3,4,5,15,45,'2022-01-04 02:41:08','2022-01-04 02:41:08','2022-01-04 02:41:08'),(107,2,1,1,4,5,15,45,'2022-01-04 02:41:17','2022-01-04 02:41:17','2022-01-04 02:41:17'),(108,2,1,1,4,5,15,45,'2022-01-04 02:41:26','2022-01-04 02:41:26','2022-01-04 02:41:26'),(109,2,1,1,4,5,15,45,'2022-01-04 02:41:28','2022-01-04 02:41:28','2022-01-04 02:41:28'),(110,2,1,2,4,5,15,45,'2022-01-04 02:41:35','2022-01-04 02:41:35','2022-01-04 02:41:35'),(111,2,1,0,4,5,5,45,'2022-01-09 01:01:45','2022-01-09 01:01:45','2022-01-09 01:01:45'),(112,1,1,0,4,5,5,45,'2022-01-09 01:02:03','2022-01-09 01:02:03','2022-01-09 01:02:03'),(113,1,1,4,4,5,35,45,'2022-01-09 01:04:56','2022-01-09 01:04:56','2022-01-09 01:04:56'),(114,1,1,3,4,5,25,45,'2022-01-09 01:10:36','2022-01-09 01:10:36','2022-01-09 01:10:36'),(115,1,4,3,4,5,25,45,'2022-01-09 01:11:17','2022-01-09 01:11:17','2022-01-09 01:11:17'),(116,1,4,3,0,5,25,45,'2022-01-09 01:11:33','2022-01-09 01:11:33','2022-01-09 01:11:33'),(117,1,4,3,0,5,25,45,'2022-01-09 01:11:39','2022-01-09 01:11:39','2022-01-09 01:11:39'),(118,2,1,4,2,5,5,45,'2022-01-28 23:06:08','2022-01-28 23:06:08','2022-01-28 23:06:08'),(119,2,1,2,4,5,5,45,'2022-01-28 23:06:58','2022-01-28 23:06:58','2022-01-28 23:06:58'),(120,2,1,2,2,5,5,45,'2022-01-28 23:08:05','2022-01-28 23:08:05','2022-01-28 23:08:05'),(121,2,1,2,1,5,5,45,'2022-01-28 23:08:09','2022-01-28 23:08:09','2022-01-28 23:08:09'),(122,2,1,2,0,5,5,45,'2022-01-28 23:08:14','2022-01-28 23:08:14','2022-01-28 23:08:14'),(123,2,1,1,0,5,5,45,'2022-01-28 23:08:24','2022-01-28 23:08:24','2022-01-28 23:08:24'),(124,2,1,3,0,5,5,45,'2022-01-28 23:08:43','2022-01-28 23:08:43','2022-01-28 23:08:43'),(125,2,1,0,0,5,2,45,'2022-01-28 23:10:17','2022-01-28 23:10:17','2022-01-28 23:10:17'),(126,2,1,1,0,5,8,45,'2022-01-28 23:10:33','2022-01-28 23:10:33','2022-01-28 23:10:33');
/*!40000 ALTER TABLE `estacionesestados` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Javier Gimenez','gimenezcj@gmail.com','123','javier.jpg','','2022-01-26 00:02:36','2022-01-26 00:02:36');

/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-28 21:00:56