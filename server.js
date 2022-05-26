const inquirer = require("inquirer");
const connection = require("./db/connection");
const figlet = require("figlet");
const table = require("table");

figlet("EMPLOYEE SYSTEM", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

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
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE",
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
        case "UPDATE_EMPLOYEE_ROLE":
          updateEmployeeRole();
          break;
        default:
          quit();
      }
    });
}

function viewDepartments() {
  console.log("showing all departments.../n");
  //selects everything from departments table
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    menuPrompts();
  });
}

function viewRoles() {
  console.log("showing all roles.../n");
  //selects everything from roles table
  connection.query("SELECT * FROM roles", function (err, data) {
    console.table(data);
    menuPrompts();
  });
}

function viewEmployees() {
  console.log("showing all employees.../n");
  //selects everything from employees table
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
      {
        type: "input",
        message: "What is the department id?",
        name: "newDepartId",
      },
    ])
    .then(function (res) {
      //grabs input and adds it to the db
      connection.query(
        //adds to db using sql syntax and parameterized query after it
        `INSERT INTO department (id, name) VALUES (?, ?)`,
        [res.newDepartId, res.newDepart],
        function (err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          menuPrompts();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        message: "enter role id:",
        type: "number",
        name: "role_id",
      },
      {
        message: "enter role title:",
        type: "input",
        name: "title",
      },
      {
        message: "enter role salary:",
        type: "number",
        name: "salary",
      },
      {
        message: "enter department ID:",
        type: "number",
        name: "department_id",
      },
    ])
    .then(function (res) {
      //adds user input to roles table
      connection.query(
        //adds to db using sql syntax and parameterized query after it
        "INSERT INTO roles (id, title, salary, department_id) values (?, ?, ?, ?)",
        [res.roles_id, res.id, res.title, res.salary, res.department_id],
        function (err, data) {
          console.table(data);
        }
      );
      menuPrompts();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_Name",
        message: "What is the employees first name?",
      },
      {
        type: "input",
        name: "last_Name",
        message: "What is the employees last name?",
      },
      {
        type: "number",
        name: "role_Id",
        message: "What is the employees role ID",
      },
      {
        type: "number",
        name: "manager_Id",
        message: "What is the employees manager's ID?",
      },
    ])
    .then(function (res) {
      connection.query(
        //adds to db using sql syntax and parameterized query after it
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [res.first_Name, res.last_Name, res.role_Id, res.manager_Id],
        function (err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          menuPrompts();
        }
      );
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        message:
          "which employee would you like to update? (use first name only for now)",
        type: "input",
        name: "name",
      },
      {
        message: "enter the new role ID:",
        type: "number",
        name: "role_id",
      },
    ])
    .then(function (res) {
      connection.query(
        "UPDATE employee SET role_id = ? WHERE first_name = ?",
        [res.role_id, res.name],
        function (err, data) {
          console.table(data);
        }
      );
      menuPrompts();
    });
}

//stops application
function quit() {
  process.exit();
}
//runs on start
function init() {
  menuPrompts();
}
init();
