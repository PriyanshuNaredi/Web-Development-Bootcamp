-- Active: 1730209103320@@127.0.0.1@5432@school
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE Table contact_details (
    id INTEGER REFERENCES student(id) UNIQUE,
    tel TEXT,
    address TEXT
);

-- Data --
INSERT INTO student (first_name, last_name)
VALUES ('Angela', 'Yu');
INSERT INTO contact_details (id, tel, address)
VALUES (1, '+123456789', '123 App Brewery Road');

-- Inner Join --
SELECT * 
FROM student
JOIN contact_details
ON student.id = contact_details.id

