# CRUD_application

Basic CRUD application

Learners
--------------
learner_name (string)
learner_email (string)
learner_password (string)

Login: Learner
Generates a JWT Token

ROUTES:
----------------
Create Learner
Login Learner
Create Courses ->JWT
Fetch All Courses -> JWT
Fetch Course By ID from Courses -> JWT
Fetch Course By Field from Courses -> JWT
Delete Course By ID from Courses -> JWT

Collection: 
Courses
------------
course_Id (string)
course_name(string)
course_description(string)

Only available with JWT Token from learners login