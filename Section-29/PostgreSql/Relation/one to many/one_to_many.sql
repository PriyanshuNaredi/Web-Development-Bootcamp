CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

-- one can submit multiple homeworks 
--  one to many : student -> homework
--  many to one : homework -> student

-- Many to One --
CREATE TABLE homework_submission (
  id SERIAL PRIMARY KEY,
  mark INTEGER,
  student_id INTEGER REFERENCES student(id)
);

-- Data --
INSERT INTO homework_submission (mark, student_id)
VALUES (98, 1), (87, 1), (88, 1);

-- Join --
SELECT *
FROM student
JOIN homework_submission 
ON student.id = homework_submission.student_id

SELECT student.id, student.first_name, student.last_name, homework_submission.mark, homework_submission.id
FROM student
JOIN homework_submission 
ON student.id = homework_submission.student_id