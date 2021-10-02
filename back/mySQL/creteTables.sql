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