# Thomas & Friends SQL: Employee Tracker 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description:

Thomas & Friends SQL: Employee Tracker is 'Thomas' and 'Tom' themed SQL employee data base tracker of Thomas Calle's(thats me by the way) fantasy employee famous fictional, non-fictional, characters, celebrities, significant figures team. The interfaces allows non-developers to easily view and interact with information through the command-line of the application stored in an SQL Employee Tracker database. 

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The Challenge:

Create an interfaces that allows non-developers to easily view and interact with information stored in an SQL Employee Tracker database. These interfaces are called content management systems (CMS). Objective is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. Once done, create a walkthrough video that demonstrates the interfaces functionality and acceptance criteria + BONUS acceptance criteria.

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
## GIF.
### Figure 1. GIF Command line interface
![](./assets/images/Demo.GIF)

## Usage Instructions
1. Open the content management systems (CMS) named "Thomas & Friends SQL Employee Tracker".
2. Open 'Intergrated Terminal' on 'server.js' and enter 'node server.js'
3. Use the 'UP' and 'DOWN' arrow keys to navigate the command line. 
4. Click 'enter' or 'return' on your respective choice.
5. Follow all commad line prompts as directed until desired choice has been met.
6. Additionally, for more in-depth instructions [Click Here to Watch.](https://www.youtube.com/watch?v=m9CQxR0AfiQ)

## Repository Link:
[Repository Link 'Click Here'.](https://github.com/ThomasCalle/Thomas-SQL-Employee-Tracker)

## YouTube Walkthrough Video:
[Click Here to Watch.](https://www.youtube.com/watch?v=m9CQxR0AfiQ)

## Screenshots.
### Figure 1. Command line interface
![](./assets/images/Module12-Screenshot.jpg)

## Installation Process
1. Clone or download the zip.folder of the repository: [Thomas' SQL Employee Tracker](https://github.com/ThomasCalle/Thomas-SQL-Employee-Tracker)
2. Install the following: 
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
- MySQL2: [Version 3.1.2](https://www.npmjs.com/package/mysql2)
- Console.table: [Version 0.10.0](https://www.npmjs.com/package/console.table)
3. Open the repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above in section (2) to ensure the cloned documentation will operate.

## Built With
- Saiyan Pride
- Dynamic JavaScript 
- Cfonts: [Cfonts 3.1.1](https://www.npmjs.com/package/cfonts)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
- MySQL2: [Version 3.1.2](https://www.npmjs.com/package/mysql2)
- Console.table: [Version 0.10.0](https://www.npmjs.com/package/console.table)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
1. How to build a command-line application from scratch to manage an employee database, using Node.js, Inquirer, and MySQL.
2. Creating a lengthly content management systems (CMS). 
3. Create direct and coherent walkthrough video that demonstrates the interfaces functionality and acceptance criteria + BONUS acceptance criteria.


### Continued Development:
1. Create 'History'feature that records the date of when employess are 'Added' and 'Removed'.
2. Adjust file/folder sorting, create several child folders for server.js file to better organize and seperate additional inquirer features.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023 Thomas Calle
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

Follow me on Github at [ThomasCalle](https://github.com/ThomasCalle)! Additional questions or concerns? feel free to contact me at thomas.calle@outlook.com.

Until next, adios!

© 2023 [ThomasCalle](https://github.com/ThomasCalle). Confidential and Proprietary. All Rights Reserved.