CREATE TABLE `user_class` (
    `NO` bigint NOT NULL AUTO_INCREMENT ,
    `학년` bigint NOT NULL, 
    `학기` bigint NOT NULL, 
    `교과목명` text NOT NULL,
    `이수구분` text NOT NULL,
    `선택영역` text DEFAULT NULL,
    `학점` double NOT NULL,
    `이론` double DEFAULT NULL,
    `실습` double DEFAULT NULL,
    `user_id`bigint DEFAULT NULL,
    PRIMARY KEY (`NO`)
) ENGINE=InnoDB DEFAULT CHARSET = utf8;