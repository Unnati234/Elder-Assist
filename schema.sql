-- Elder Assist database schema
-- Based on the queries in server.js. Compare with your own database using
-- SHOW CREATE TABLE users; (and contacts, emergencies) before committing.

CREATE DATABASE IF NOT EXISTS elder_assist;
USE elder_assist;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,          -- bcrypt hash
  role VARCHAR(20) NOT NULL DEFAULT 'user' -- 'user' or 'admin'
);

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255),
  message TEXT,
  reply TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  replied_at DATETIME NULL
);

CREATE TABLE IF NOT EXISTS emergencies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(255),
  user_name VARCHAR(100),
  page VARCHAR(100),
  note TEXT
);
