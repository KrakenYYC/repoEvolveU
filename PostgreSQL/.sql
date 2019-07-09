-- Database: Basic

-- DROP DATABASE "Basic";

CREATE DATABASE "Basic"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	
	
	
-- create mindfuel templates
-- this will ultimately be up to 4 tables
-- this is the industry presentation

CREATE TABLE activity (
	pk_a SERIAL PRIMARY KEY,
	wv_name VARCHAR(60),
	wv_uid INT,
	custom_id VARCHAR(15),
	open_date DATE,
	close_date DATE,
	expiry_date DATE,
	status BOOLEAN,
	enroll_size INT
);
	
CREATE TABLE teacher (
	pk_t SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	wv_id VARCHAR(6),
	email VARCHAR(60)
);
	
CREATE TABLE student (
	pk_s SERIAL PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	pic_pwd CHAR(4) NOT NULL,
	progress BOOLEAN
);
	
CREATE TABLE roster (
	pk_a INT REFERENCES activity (pk_a),
	pk_t INT REFERENCES teacher (pk_t),
	pk_s INT REFERENCES student (pk_s)
	PRIMARY KEY (pk_a, pk_t, pk_s)		
);


DROP TABLE roster
DROP TABLE teacher
DROP TABLE student
DROP TABLE activity

CREATE TABLE directors (
	director_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	date_of_birth DATE,
	nationality VARCHAR(20)
);
SELECT * FROM directors;

CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	gender CHAR(1),
	date_of_birth DATE,
);

SELECT * FROM actors;
ALTER actors

CREATE TABLE movies (
	movie_id SERIAL PRIMARY KEY,
	movie_name VARCHAR(50) NOT NULL,
	movie_length INT,
	movie_lang VARCHAR(20),
	release_date DATE,
	age_certificate VARCHAR(5),
	director_id INT REFERENCES directors (director_id)	
);

CREATE TABLE movie_revenues (
	revenue_id SERIAL PRIMARY KEY,
	movie_id INT REFERENCES movies (movie_id),
	domestic_takings NUMERIC (6,2),
	international_takings NUMERIC (6,2)
);

CREATE TABLE movies_actors (
	movie_id INT REFERENCES movies (movie_id),
	actor_id INT REFERENCES actors (actor_id),
	PRIMARY KEY (movie_id, actor_id)
);
SELECT * FROM movies_actors;

CREATE TABLE owners_pets (
	id INT SERIAL PRIMARY KEY,
	first_name CHARVAR(30),
	last_name CHARVAR(30),
	city CHARVAR(30),
	state CHAR(2)
);
SELECT * FROM owners_pets;

CREATE TABLE pets (
	id INT SERIAL PRIMARY KEY,
	species CHARVAR(30),
	full_name CHARVAR(30),
	age INT,
	id REFERENCES owners_pets (id)
);

ALTER TABLE owners_pets
ALTER COLUMN email CHARVAR(30)
ALTER COLUMN last_name CHARVAR(50)
