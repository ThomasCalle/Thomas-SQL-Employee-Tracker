const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker database.`)

);

console.log(`
 _______ _                                          ______    _                _     
|__   __| |                                 ___    |  ____|  (_)              | |    
   | |  | |__   ___  _ __ ___   __ _ ___   ( _ )   | |__ _ __ _  ___ _ __   __| |___ 
   | |  | '_ \ / _ \| '_ ' _ \ / _' / __|  / _ \/\ |  __| '__| |/ _ \ '_ \ / _' / __|
   | |  | | | | (_) | | | | | | (_| \__ \ | (_>  < | |  | |  | |  __/ | | | (_| \__ \
   |_|  |_| |_|\___/|_| |_| |_|\__,_|___/  \___/\/ |_|  |_|  |_|\___|_| |_|\__,_|___/
                                                                                     
                                                                                     
  _____  ____  _        ______                 _                         _______             _             
 / ____|/ __ \| |      |  ____|               | |                       |__   __|           | |            
| (___ | |  | | |      | |__   _ __ ___  _ __ | | ___  _   _  ___  ___     | |_ __ __ _  ___| | _____ _ __ 
 \___ \| |  | | |      |  __| | '_ ' _ \| '_ \| |/ _ \| | | |/ _ \/ _ \    | | '__/ _' |/ __| |/ / _ \ '__|
 ____) | |__| | |____  | |____| | | | | | |_) | | (_) | |_| |  __/  __/    | | | | (_| | (__|   <  __/ |    _ 
|_____/ \___\_\______| |______|_| |_| |_| .__/|_|\___/ \__, |\___|\___|    |_|_|  \__,_|\___|_|\_\___|_|   |_|   
                                        | |             __/ |                                              
                                        |_|            |___/                                           `);

// function to start the application
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    db.end();
                    console.log("Goodbye!");
                    break;
            }
        });
}


// upload iPhone work from tuesday

