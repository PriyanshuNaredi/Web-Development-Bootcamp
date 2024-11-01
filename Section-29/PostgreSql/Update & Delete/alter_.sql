-- Active: 1730209103320@@127.0.0.1@5432@school@public
SELECT * from student

-- Alter - change structure of Table
/*
ALTER Table ,table_name>
    <do something>
*/
-- table name change
ALTER table student
    RENAME TO students;

-- table data type change
ALTER TABLE user 
    ALTER COLUMN first_name TYPE VARCHAR(20);

-- table structure change
ALTER TABLE contact_details
    ADD email TEXT;


/* 
Using ALTER command to convert pre-existing table
CREATE TABLE example (
    a INT,
    B INT,
    C INT,
);
To This 
CREATE TABLE example (
    a INT,
    B INT,
    C INT,
UNIQUE (a,c)
);
*/

ALTER TABLE visited_countries
    ADD UNIQUE (user_id, country_code);







