# fs1010_Final_Project

### Source Code

The front end of this project is developed on reactjs, the backend is developed on Nodejs and for database we have used MySql.

# SetUp

Copy .env.example and rename to .env inside backend folder.

## Available Scripts

To start the backend and frontend, you can run:

### `npm start`

when running the backend file if you run into error then try install all these things

### `npm i esm`, `npm i dotenv`, `npm i cors`, `npm i jsonwebtoken`, `npm i bcryptjs`, `npm i mysql`, `npm i uuid`

when running the react app if you run into error then run:

### `npm install`

############

### For Admin login USERNAME is admin and PASSWORD is password@123

Most of our SQL statement is in the dbhandler folder under backend folder.

## mysql USERNAME is root and PASSWORD is password.

All the sql files are under dbHandler folder

Sql code in admindbHandler

### Line 3 creating admin username and password `INSERT INTO sql_portfolio.admin_user SET ?`

### Line 23 for admin login `SELECT * FROM sql_portfolio.admin_user WHERE name = ? `

Sql code in contactdbHandler

### Line 3 to get all the entries from contact us data base `SELECT * FROM sql_portfolio.contact_entries`

### Line 22 to get add new entry in contact us data base `INSERT INTO sql_portfolio.contact_entries SET ?`

### Line 42 to delete entry in contact us data base `DELETE FROM sql_portfolio.contact_entries WHERE id = ?`

### Line 62 to update entry in contact us data base `UPDATE sql_portfolio.contact_entries SET phoneNumber = ?, email = ? WHERE id = ?`

Sql code in projectdbHandler

### Line 3 to get project from project database `SELECT * FROM sql_portfolio.projects`

### Line 20 to get project by ID from project database `SELECT image,title,link FROM sql_portfolio.projects WHERE project_id =?`

### Line 40 to add project into project database `INSERT INTO sql_portfolio.projects SET ?`

### Line 61 to delete project from project database `DELETE FROM sql_portfolio.projects WHERE project_id = ?`

### Line 81 to update project in project database `UPDATE sql_portfolio.projects SET image = ?, title = ?,link=? WHERE project_id = ?`
