-- UPDATE

/*
UPDATE <table_name>
SET <col_name> = VALUE,
WHERE <Condition>; 
*/

UPDATE users SET first_name = 'Priyanshu' WHERE id = 1;

-- ORDER BY
/*
SELECT * FROM <table name>
ORDER BY <some condition>;
*/

SELECT * FROM users ORDER BY id ASC;