INSERT INTO department (id, name)
VALUES 
(100, "FrontEndD"),
(200, "BackEndD"),
(300, "ProjectManagerD");


INSERT INTO roles (id, title, salary, department_id)
VALUES 
(1, "juniorDev", 60000, 1),
(2, "Front-End Developer", 80000, 1),
(3, "Front-End Developer", 80000, 1),
(4, "Front-End Developer", 80000, 1),
(5, "Back-End Developer", 100000, 2),
(6, "Back-End Developer", 100000, 2),
(7, "Back-End Developer", 100000, 2),
(8, "Full Stack Developer",130000,3);

INSERT INTO employee (id, first_name, last_name,role_id, manager_id)
VALUES 
(1, "Fernando", "Martinez", 1, 145),
(2, "Jesus", "Ochoa", 2, 652),
(3, "Michael", "Sackyta", 3, 785),
(4, "Edwin", "Hernandez", 4, 528),
(5, "Alexis", "Garcia", 5, 478),
(6, "Thomas", "Rameriez", 6, 341),
(7, "Sebastion", "Plata", 7, 951),
(8, "Alexander", "Jimenez", 8, 168);