-- Active: 1730209103320@@127.0.0.1@5432@secrets@public
CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100)
)

SELECT * FROM users

INSERT INTO users (email,password) VALUES ('a','b');

SELECT * FROM users WHERE email='email@gmail.com' AND password='asdas' 