CREATE DATABASE chubb;

CREATE TABLE users (id INTEGER,`name` VARCHAR(50));
CREATE TABLE codekata (id INTEGER,problem_solved INTEGER,user_name VARCHAR(50));
CREATE TABLE attendance (id INTEGER,present_days INTEGER,user_name VARCHAR(50));
CREATE TABLE topics (id INTEGER,topic_name VARCHAR(50),user_name VARCHAR(50));
CREATE TABLE tasks (id INTEGER,task_name VARCHAR(50),user_name VARCHAR(50));
CREATE TABLE company_drives (id INTEGER,cmpany_name VARCHAR(50),user_name VARCHAR(50));
CREATE TABLE mentors (id INTEGER,mentors_name VARCHAR(50),student_name VARCHAR(50));
CREATE TABLE students_activated_courses (id INTEGER,students_activated_courses_name VARCHAR(50),student_name VARCHAR(50));
CREATE TABLE courses (id INTEGER,courses_name VARCHAR(50),student_name VARCHAR(50));

INSERT INTO users (id,`name`) VALUES (1,"Mayank"),(2,"tomas"),(3,"roger"),(4,"max"),(5,"charles");
INSERT INTO codekata (id,problem_solved,user_name) VALUES (1,22,"Mayank"),(2,17,"tomas"),(3,6,"roger"),(4,32,"max"),(5,13,"charles");
INSERT INTO attendance (id,present_days,user_name) VALUES (1,5,"Mayank"),(2,8,"tomas"),(3,2,"roger"),(4,8,"max"),(5,12,"charles");
INSERT INTO topics (id,topic_name,user_name) VALUES (1,"sql","Mayank"),(2,"nosql","Mayank"),(3,"js","roger"),(4,"python","max"),(5,"nodejs","charles");
INSERT INTO tasks (id,task_name,user_name) VALUES (1,"task1","Mayank"),(2,"task2","Mayank"),(3,"task3","roger"),(4,"task4","max"),(5,"task5","charles");
INSERT INTO company_drives (id,cmpany_name,user_name) VALUES (1,"abc","Mayank"),(2,"xyz","Mayank"),(3,"tcs","roger"),(4,"accenture","max"),(5,"chubb","charles");
INSERT INTO mentors (id,mentors_name,student_name) VALUES (1,"guvi1","Mayank"),(2,"guvi2","Mayank"),(3,"guvi3","roger"),(4,"guvi4","max"),(5,"guvi5","charles");
INSERT INTO students_activated_courses (id,students_activated_courses_name,student_name) VALUES (1,"aws","Mayank"),(2,"cloud","Mayank"),(3,"competitive programming","roger"),(4,"ml","max"),(5,"azure","charles");
INSERT INTO courses (id,courses_name,student_name) VALUES (1,"aws","Mayank"),(2,"cloud","Mayank"),(3,"competitive programming","roger"),(4,"ml","max"),(5,"python","charles");

SELECT user_name,problem_solved FROM codekata; 
SELECT user_name,COUNT(cmpany_name) FROM company_drives GROUP BY(user_name);
SELECT students_activated_courses_name,courses_name,courses.student_name FROM students_activated_courses,courses WHERE courses.student_name="Mayank" GROUP BY(courses_name);
AND students_activated_courses.student_name = courses.student_name; 

SELECT mentors_name FROM mentors;
SELECT mentors_name,COUNT(student_name) FROM mentors GROUP BY(mentors_name);
