CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employee (
    PRIMARY KEY (id),
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
);
DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Jose', 1000),
(2, 'Maria', 1500),
(3, 'Eduardo', 2000),
(4, 'Yineth', 2500);