ALTER TABLE users ADD COLUMN secret TEXT;

SELECT secret FROM users WHERE email = 'priyanshu@gmail.com'
