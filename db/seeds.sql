INSERT INTO department (name_)
VALUES 
("FrontEndD"),
("BackEndD"),
("ProjectManagerD");


INSERT INTO roles (id, title, salary, department_id)
VALUES 
(145, "juniorDev", 60000, 1),
(652, "Front-End Developer", 80000, 1),
(785, "Front-End Developer", 80000, 1),
(528, "Front-End Developer", 80000, 1),
(478, "Back-End Developer", 100000, 2),
(341, "Back-End Developer", 100000, 2),
(951, "Back-End Developer", 100000, 2),
(168, "Full Stack Developer",130000,3);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES 
(1, "Fernando", "Martinez", 145),
(2, "Jesus", "Ochoa", 652),
(3, "Michael", "Sackyta", 785),
(4, "Edwin", "Hernandez", 528),
(5, "Alexis", "Garcia", 478),
(6, "Thomas", "Rameriez", 341),
(7, "Sebastion", "Plata", 951),
(8, "Alexander", "Jimenez", 168);