const inquirer = require("inquirer");
const fs = require("fs");
const connection = require("./db/connection");

function menuPrompts() {
  inquirer
    .prompt([
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
    ])
    .then((res) => {
      let selections = res.selections;
      switch (selections) {
        case "VIEW_DEPARTMENTS":
          viewDepartments();
          break;
        case "VIEW_ROLES":
          viewRoles();
          break;
        case "VIEW_EMPLOYEES":
          viewEmployees();
          break;
        case "ADD_DEPARTMENT":
          addDepartment();
          break;
        case "ADD_ROLE":
          addRole();
          break;
        case "ADD_EMPLOYEE":
          addEmployee();
          break;
        default:
          quit();
      }
    });
}

function viewDepartments() {
  console.log("showing all departments.../n");
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    menuPrompts();
  });
}

function viewRoles() {
  console.log("showing all roles.../n");
  connection.query("SELECT * FROM roles", function (err, data) {
    console.table(data);
    menuPrompts();
  });
}

function viewEmployees() {
  console.log("showing all employees.../n");
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    menuPrompts();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What department would you like to add?",
        name: "newDepart",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [res.department],
        function (err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          menuPrompts();
        }
      );
    });
}

function addRole() {}

function addEmployee() {}

function quit() {
  process.exit();
}
function init() {
  menuPrompts();
}
init();
