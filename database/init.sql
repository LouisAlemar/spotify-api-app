create database db;
USE db;
CREATE TABLE IF NOT EXISTS users (

  id              INT unsigned NOT NULL AUTO_INCREMENT,
  first_name      TEXT NULL,
  last_name       TEXT NULL,
  email           TEXT NULL,
  password        TEXT NULL,
  created         TEXT NULL,
  PRIMARY KEY     (id)

);