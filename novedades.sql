-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-08-2024 a las 15:16:08
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `padel_fixit`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_id` varchar(300) DEFAULT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(500) NOT NULL,
  `cuerpo` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `img_id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'hcfvrqqni961tr3gcb4n', 'CARBONO 3K PLANE', 'CARACTERISTICAS', '3K significa que el tejido contiene 3,000 filamentos por haz o hebra.\r\nPlain se refiere al tipo de tejido, que es el tejido plano o simple. Este es uno de los patrones más básicos y comunes donde la urdimbre y la trama se cruzan alternativamente, ofreciendo un balance entre resistencia y ductilidad.\r\nEs ampliamente utilizado en aplicaciones que requieren una buena rigidez y resistencia, como componentes de automóviles, bicicletas, drones y artículos deportivos.\r\n'),
(23, 'alad3nszyhqcsxkbh6zd', 'CARBONO 3K TWIL', 'CARACTERISTICAS:', 'Al igual que el Carbono 3K Plain, el 3K Twill también utiliza 3,000 filamentos.\r\nTwill se refiere a un tipo de tejido que muestra un patrón diagonal, lo que le confiere una mayor drapeabilidad y conformabilidad en comparación con el tejido plano. Esto lo hace ideal para moldear formas complejas.\r\nComúnmente utilizado en la industria aeroespacial, automotriz y en la fabricación de productos recreativos donde se necesitan curvas y formas complejas sin sacrificar la resistencia.'),
(24, 'gtiaoqmizoozfaqcz7ah', 'CARBONO 12K ', 'CARACTERISTICAS:', '12K indica que cada haz contiene 12,000 filamentos, lo que resulta en un tejido más grueso y robusto.\r\nAunque generalmente más pesado que el 3K, el 12K ofrece una mayor rigidez y resistencia a la tracción. Esto lo hace adecuado para aplicaciones estructurales donde la carga y la resistencia son críticas.\r\nSe utiliza en industrias como la construcción, automotriz y en componentes estructurales de aeronaves donde se requieren niveles superiores de resistencia.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
