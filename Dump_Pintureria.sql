-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: pintureria
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idcliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `cuit_cuil` varchar(20) DEFAULT NULL,
  `domicilio` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT 'A',
  PRIMARY KEY (`idcliente`),
  UNIQUE KEY `id_UNIQUE` (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Manuel Jose','Dominguez','20-29876342-3','av. Uruguay 3000','A'),(2,'Antonio Javier','Vegas','20-32521595-3','av. Lopez y Planes 2500','A'),(3,'Luis','Romero','20-42436477-3','av. Santa Catalina 1223','A'),(7,'Alberto Carlos','Testa','20-4567089-4','av. Santa Clara 1223','A'),(8,'Lionel','Messi','234556899','av qatar 2022','A'),(9,'Hugo','Caceres Molina','24-01055512-3','Av. Lavalle 4560','A'),(10,'Jorge','Castro','20-2020202-2','av uruguay 1111','A');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_venta`
--

DROP TABLE IF EXISTS `detalle_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_venta` (
  `iddetalle_venta` int NOT NULL AUTO_INCREMENT,
  `tipo_venta` varchar(45) DEFAULT NULL,
  `tipo_comprobante` varchar(45) DEFAULT NULL,
  `ventas_idventa` int NOT NULL,
  `ventas_idvendedor` int NOT NULL,
  `ventas_idcliente` int NOT NULL,
  `ventas_idproducto` int NOT NULL,
  `fecha` date DEFAULT NULL,
  `total` decimal(15,2) DEFAULT NULL,
  PRIMARY KEY (`iddetalle_venta`,`ventas_idventa`,`ventas_idvendedor`,`ventas_idcliente`,`ventas_idproducto`),
  UNIQUE KEY `iddetalle_venta_UNIQUE` (`iddetalle_venta`),
  KEY `fk_detalle_venta_ventas1_idx` (`ventas_idventa`,`ventas_idvendedor`,`ventas_idcliente`,`ventas_idproducto`),
  CONSTRAINT `fk_detalle_venta_ventas1` FOREIGN KEY (`ventas_idventa`, `ventas_idvendedor`, `ventas_idcliente`, `ventas_idproducto`) REFERENCES `ventas` (`idventa`, `idvendedor`, `idcliente`, `idproducto`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_venta`
--

LOCK TABLES `detalle_venta` WRITE;
/*!40000 ALTER TABLE `detalle_venta` DISABLE KEYS */;
INSERT INTO `detalle_venta` VALUES (4,'contado efectivo','factura A',1,1,2,3,'2023-01-02',30000.00),(5,'contado efectivo','factura A',2,1,3,2,'2023-01-02',3000.00),(6,'contado efectivo','factura A',3,2,1,1,'2023-01-03',15000.00),(7,'contado efectivo','factura A',4,2,1,2,'2023-01-03',1500.00);
/*!40000 ALTER TABLE `detalle_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `idmarca` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` char(1) DEFAULT 'A',
  PRIMARY KEY (`idmarca`),
  UNIQUE KEY `idmarca_UNIQUE` (`idmarca`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Tersuave','Hogar y Obra','A'),(2,'Rakoton','Hogar y Obra','A'),(3,'Rosarpin','Rodillos y Pinceles','A');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas_productos`
--

DROP TABLE IF EXISTS `marcas_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas_productos` (
  `idmarca` int NOT NULL,
  `idproducto` int NOT NULL,
  PRIMARY KEY (`idmarca`,`idproducto`),
  KEY `fk_marcas_has_productos_productos1_idx` (`idproducto`),
  KEY `fk_marcas_has_productos_marcas1_idx` (`idmarca`),
  CONSTRAINT `fk_marcas_has_productos_marcas1` FOREIGN KEY (`idmarca`) REFERENCES `marcas` (`idmarca`),
  CONSTRAINT `fk_marcas_has_productos_productos1` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas_productos`
--

LOCK TABLES `marcas_productos` WRITE;
/*!40000 ALTER TABLE `marcas_productos` DISABLE KEYS */;
INSERT INTO `marcas_productos` VALUES (2,1),(3,2),(1,3),(3,4),(3,5),(1,6);
/*!40000 ALTER TABLE `marcas_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `precio_unidad` decimal(15,2) DEFAULT NULL,
  `estado` char(1) DEFAULT 'A',
  PRIMARY KEY (`idproducto`),
  UNIQUE KEY `idproducto_UNIQUE` (`idproducto`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Latex Interior/Exterior Rakoton ','Latex Interior 24 LTS',15000.00,'A'),(2,'Rodillo Lana nº 18','Rodillo Premium ',1000.00,'A'),(3,'Enduido Interior 20 kg','Enduido Interior Tersuave',10000.00,'A'),(4,'Rodillo Lana nº 15','Rodillo Económico Lana',850.00,'A'),(5,'Pincel nº15 V2','Pincel número 15 Económico',500.00,'A'),(6,'Latex Exterior 20 LTS','Latex interior premium',25000.00,'A'),(7,'Pincel nº8','Pincel Fileteo',300.00,'A');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `idproveedor` int NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(45) NOT NULL,
  `cuit_cuil` varchar(45) DEFAULT NULL,
  `estado` char(1) DEFAULT 'A',
  PRIMARY KEY (`idproveedor`),
  UNIQUE KEY `idproveedor_UNIQUE` (`idproveedor`),
  UNIQUE KEY `razon_social_UNIQUE` (`razon_social`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'Disal SRL','20-202020-3','A'),(2,'Rosarpin SA','20-244025-3','A'),(3,'Rakoton SA','20-192250-4','A'),(4,'Prueba Lunes SRL','20-4567891-4','A'),(5,'Colores Argentinos SA','23-456-895','A'),(9,'Colorin SRL','23-4452123-3','A'),(10,'MJH Pinceles','2345367','A'),(11,'Troya SRL','23-2323232323-2','A');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores_marcas`
--

DROP TABLE IF EXISTS `proveedores_marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores_marcas` (
  `idproveedor` int NOT NULL,
  `idmarca` int NOT NULL,
  PRIMARY KEY (`idproveedor`,`idmarca`),
  KEY `fk_proveedores_has_marcas_marcas1_idx` (`idmarca`),
  KEY `fk_proveedores_has_marcas_proveedores1_idx` (`idproveedor`),
  CONSTRAINT `fk_proveedores_has_marcas_marcas1` FOREIGN KEY (`idmarca`) REFERENCES `marcas` (`idmarca`),
  CONSTRAINT `fk_proveedores_has_marcas_proveedores1` FOREIGN KEY (`idproveedor`) REFERENCES `proveedores` (`idproveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores_marcas`
--

LOCK TABLES `proveedores_marcas` WRITE;
/*!40000 ALTER TABLE `proveedores_marcas` DISABLE KEYS */;
INSERT INTO `proveedores_marcas` VALUES (1,1),(3,2),(2,3);
/*!40000 ALTER TABLE `proveedores_marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `estado` char(1) DEFAULT 'A',
  `fecha_creacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `idusuario_UNIQUE` (`idusuario`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `user_UNIQUE` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'LautaroGonzalez','lautarogon2020@gmail.com','1234','A',NULL),(2,'Ezegon23','12345@gmail.com','Ezegon@gmail.com','A','2023-02-18 19:39:12'),(4,'Prueba123','undefined','$2b$10$4VdT77KExtwulBtgE0ojpeXdsziMxpau9tOva8W9in63xEm.DY41.','B','2023-02-24 16:10:09'),(5,'Prueba12345','correo@gmail.com','$2b$10$c2WcVIK2FRCOr3wZGektMe4bvG00cXXCBbXwF8IUHRFQN0tfqULDe','A','2023-02-24 17:09:00'),(6,'Domingo2602','Domingo2602@gmail.com','$2b$10$Lkju6d28D9v2dCxQ/HlESOPzrP5nSd2v8rw2r0prB1augfPfrkc76','B','2023-02-26 18:21:42'),(8,'Testabc','test@gmail.com','$2b$10$V0DUPg0Pf5k2/sgDsaOkMug.EekVhhWIcetlWl.hwZhvn71LDfn8G','A','2023-02-26 20:51:42'),(110,'Viernes32','viernes@gmail.com','$2b$10$rw4/Wnw953somJNzs.ots.jJKLvHTgqbfoUM.8IYu/Ec4S3Ug6FH.','A','2023-03-03 10:52:33'),(111,'boca2023','boca2023@gmail.com','$2b$10$.2ZUs1BGv6WgqSHMO9iOR.r9gU2156o.xY0Xsq03RBDYCWKRZDxd2','A','2023-03-06 21:40:19'),(114,'langoni','langoni@gmail.com','$2b$10$JxDE4LSp6RfLUmMS1yEdz.2uKvUlOrsUd4L3wJh/3cIhdZB.cdgJq','A','2023-03-06 21:41:35'),(115,'doncasimiro','doncasimiro','$2b$10$yhbbfZUzwxMFdcbezWC4ROjNbi0wPkogiS0NTrqMzuMRUv6ajCYGW','A','2023-03-07 10:30:21'),(116,'miercoles','sdasdasdasd','$2b$10$cTNCWo8FOhwTlexz.UtmpeKxw74Fq9o77m80.7HN9ogMzWZN5r1my','B','2023-03-08 20:23:32'),(118,'Hugon','hugon@gmail','$2b$10$8cB9ZgVor/JGw2vBTf5P0Otsk.JN7QNSD6G0rXBjiliIx0TCQEtYm','A','2023-03-09 10:54:38');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendedores` (
  `idvendedor` int NOT NULL AUTO_INCREMENT,
  `cuit_cuil` varchar(15) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `domicilio` varchar(100) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `estado` char(1) DEFAULT 'A',
  `sexo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idvendedor`),
  UNIQUE KEY `idvendedor_UNIQUE` (`idvendedor`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendedores`
--

LOCK TABLES `vendedores` WRITE;
/*!40000 ALTER TABLE `vendedores` DISABLE KEYS */;
INSERT INTO `vendedores` VALUES (1,'20-4567-3','Eduardo','Gonzalez','Francisco de Haro 4111','1234567','Edugonventas@gmail.com','2019-02-20','A','masculino'),(2,'20-54666-4','Jorge Alberto','Ramirez','3 de Febrero 2340','434356','Ramirez_joseventas@gmail.com','2019-02-27','A','masculino'),(3,'20-87908-4','Alicia','Villas','San Martin 3002','2323454','Aliciavillaventas@gmail.com','2019-02-10','A','femenino'),(4,'20-456798-3','Juan Alberto','Pruebas','Lavalle 2300','123456789','testventasJuan@gmail.com','2023-03-07','A','masculino'),(5,'23-368678-3','Lionel','Scaloni','av qatar 2022','123455678','LionelSca@gmail.com',NULL,'A','Masculino'),(6,'20-4566789-6','Cintia Alicia','Brizuela ','Calle 1034','12345678','Cintiaventas@gmail.com','2022-03-04','A','Femenino'),(7,'22-2222222-2','Lorenzo','Lamas','av siempre viva 1234','1111111111111','lorenzo@gmail.com','2023-03-09','A','masculino');
/*!40000 ALTER TABLE `vendedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `idventa` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `estado` char(1) DEFAULT 'A',
  `idvendedor` int NOT NULL,
  `idcliente` int NOT NULL,
  `idproducto` int NOT NULL,
  `cantidad` double DEFAULT NULL,
  PRIMARY KEY (`idventa`,`idvendedor`,`idcliente`,`idproducto`),
  UNIQUE KEY `idventa_UNIQUE` (`idventa`),
  KEY `fk_ventas_vendedores_idx` (`idvendedor`),
  KEY `fk_ventas_clientes1_idx` (`idcliente`),
  KEY `fk_ventas_productos1_idx` (`idproducto`),
  CONSTRAINT `fk_ventas_clientes1` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`),
  CONSTRAINT `fk_ventas_productos1` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`idproducto`),
  CONSTRAINT `fk_ventas_vendedores` FOREIGN KEY (`idvendedor`) REFERENCES `vendedores` (`idvendedor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (1,'2023-01-02','A',1,2,3,3),(2,'2023-01-02','A',1,3,2,2),(3,'2023-01-03','A',2,1,1,1),(4,'2023-01-03','A',2,1,2,1);
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 15:35:55
