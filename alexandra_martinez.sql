-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-12-2021 a las 22:32:25
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alexandra_martinez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desingfull`
--

DROP TABLE IF EXISTS `desingfull`;
CREATE TABLE IF NOT EXISTS `desingfull` (
  `id_webdelevop` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Profesion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_webdelevop`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `desingfull`
--

INSERT INTO `desingfull` (`id_webdelevop`, `Nombre`, `Edad`, `Profesion`) VALUES
(2, 'Eliseo Pérez', 20, 'Web Delevopment'),
(3, 'Eliseo Pérez', 28, 'Back-End'),
(7, 'Eliseo Pérez', 25, 'Front-End'),
(8, 'Christian Enmanuel', 25, 'Back-End'),
(9, 'Alexandra Martínez', 30, 'Web Delevopment'),
(11, 'Ernesto Navarro', 20, 'Maquetador HTML');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
