CREATE TABLE `devices` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `category_id` VARCHAR( 255 ) NOT NULL ,
  `color` VARCHAR( 16 ) NOT NULL ,
  `part_number` INT UNSIGNED NOT NULL
) ENGINE = MYISAM;

CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `name` VARCHAR( 128 ) NOT NULL 
) ENGINE = MYISAM;

INSERT INTO `categories` VALUES(LAST_INSERT_ID(), 'Lampadas');
INSERT INTO `categories` VALUES(LAST_INSERT_ID()+1, 'Ventiladores');
INSERT INTO `categories` VALUES(LAST_INSERT_ID()+2, 'Tomadas');

INSERT INTO `devices` VALUES(LAST_INSERT_ID(), 1, 'blue', 1);
INSERT INTO `devices` VALUES(LAST_INSERT_ID()+1, 1, 'red', 2);
INSERT INTO `devices` VALUES(LAST_INSERT_ID()+2, 2, 'red', 3);
INSERT INTO `devices` VALUES(LAST_INSERT_ID()+3, 2, 'green', 2);
