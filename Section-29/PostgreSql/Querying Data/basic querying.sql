-- only one col
select wheat_production from world_food;

-- multi col
select wheat_production, rice_production from world_food;

-- equal condition
select country from world_food where country = 'India';

-- greater than condition
select country from world_food where wheat_production > 20 or rice_production > 20;

-- Pattern Matching
select country from world_food where country like 'U' || '%';

select country from world_food where country like '%' || 'a';

-- insert data 
INSERT INTO world_food (country, rice_production, wheat_production)
VALUES ('Italy', 1.46, 7.3);

-- create new table into postgres db
CREATE TABLE visited_countries (
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL UNIQUE
);
