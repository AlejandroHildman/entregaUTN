-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-02-2024 a las 14:43:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `abogacia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'SANCIONAN LA NUEVA LEY DE MINISTERIOS', 'En la Ciudad de Buenos Aires se creó la cartera de Infraestructura y se desdobla Justicia y Seguridad. Juraron dos nuevos legisladores.', 'La Legislatura de la Ciudad sancionó este jueves una nueva ley de Ministerios para adaptarla a las previsiones del nuevo jefe de Gobierno, Jorge Macri, quien asume el cargo el 10 de diciembre en reemplazo de Horacio Rodríguez Larreta.\r\n\r\nEn el nuevo organigrama, desaparece el ministerio de Gobierno, que pasa a ser Secretaría con funciones agregadas, y se crea el ministerio de Infraestructura, que tendrá a su cargo lo atinente a tránsito, transporte y obras públicas. A su vez, se crearon los nuevos ministerios de Justicia y de Seguridad, que hasta ahora conformaban una misma unidad ministerial.\r\n\r\nHabrá diez ministerios coordinados por una Jefatura de Gabinete. Ellos serán: Hacienda y Finanzas; Justicia, Seguridad; Salud; Educación; Desarrollo Económico; Cultura; Desarrollo Humano y Hábitat; Espacio Público e Higiene Urbana; Infraestructura.'),
(8, 'Licencias para la abogacía litigante: un derecho postergado', 'La reglamentación de un régimen que contemple motivos de enfermedad, accidente, cuidado de hijo o hija recién nacido o violencia de género durante los procesos judiciales es una solicitud imprescindible', 'La abogacía es uno de los pilares de la democracia y merece ser reconocida como tal. En el Consejo de la Magistratura, las abogadas y abogados de todo el país tenemos la posibilidad de estar representados en 4 de sus 20 integrantes. Por lo tanto, somos parte de ese equilibrio de pesos y contrapesos institucionales. Un equilibrio que garantice una justicia federal, equitativa y un rumbo claro hacia la igualdad real de oportunidades.\r\n\r\nEn ese contexto, cada abogado y abogada que recorre 24/7 los pasillos de los tribunales todos los días, la mayoría de las veces con escasos recursos y esquivando obstáculos de un sistema judicial poco ágil y arcaico, lleva en su profesión una vocación de responsabilidad social. Una vocación que vigila en primera persona los derechos de la ciudadanía y que siempre estará al pie del cañón para velar por una sociedad justa, equitativa, y donde no haya privilegios elitistas.\r\n\r\nPor eso resulta necesario custodiar también los intereses de los trabajadores del derecho. Somos los primeros que cuidamos al ciudadano, velando por su legítima defensa, y nos enorgullece esa responsabilidad social. Como tal, la misma debe ser llevada a cabo en las mejores condiciones posibles para la defensa del cliente, y una licencia laboral para la abogacía litigante privada es un derecho necesario a la hora de jerarquizar la defensoría.'),
(9, 'Federico Sturzenegger defendió la Ley Ómnibus y el mega DNU en un seminario en Harvard: qué dijo', 'El autor intelectual del decreto de desregulación económica aseguró que la única manera de “cambiar la estructura de poder” es “drenarle los recursos a los grupos de interés”.', 'Federico Sturzenegger, asesor presidencial y autor intelectual del mega DNU de desregulación económica, defendió la Ley Ómnibus y las medidas económicas del gobierno de Javier Milei en un seminario de la Universidad de Harvard.\r\n\r\n\r\nLuego de la fallida negociación por el proyecto de ley Bases, Sturzenegger aseguró que la manera de vencer a quienes votaron en contra es “empobrecer a los grupos de interés y drenarles los recursos”. “Si lo hacés, tenés una chance de ganarles”, agregó.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
