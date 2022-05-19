const inquirer = require("inquirer");
const fs = require("fs");
const connection = require("./db/connection");

function menuPrompts() {
  inquirer.prompt([
    {
      type: "list",
      name: "selections",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View All Employees",
          //might need to change based on db name
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add a Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add a Role",
          value: "ADD_ROLE",
        },
        {
          name: "Add an Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then (res => {

  })
}

//switch
// connection.query('SELECT * FROM roles', function (err, results) {
//     console.log(results);
//   });

//   connection.query('INSERT INTO employee (first_name, last_name, manager_id) VALUES ("David", "Johnson", 146)', function (err, results) {
//     console.log(results);
//   });
