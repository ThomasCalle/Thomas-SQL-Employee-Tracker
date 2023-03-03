INSERT INTO departments (department_name)
VALUES 
('Sales'),
('Marketing'),
('Human Resources'),
('Finance'),
('Engineering'),
('Information Technology'),
('Customer Service'),
('Research and Development'),
('Legal'),
('Operations');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Manager', 5000.00, 1),
('Assistant Manager', 4000.00, 1),
('Sales Associate', 2500.00, 1),
('Marketing Manager', 4800.00, 2),
('Marketing Coordinator', 3500.00, 2),
('HR Manager', 5200.00, 3),
('HR Coordinator', 3800.00, 3),
('Finance Manager', 6000.00, 4),
('Senior Engineer', 7000.00, 5),
('Software Developer', 5000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tom', 'Brady', 1, 1),
('Thomas', 'The Tank Engine', 2, 1),
('Tom', 'Hanks', 3, 1),
('Thomas', 'Hobbes', 4, 1),
('Tom', 'Cruise', 5, 1),
('Thomas', 'Shelby', 6, 1),
('Tom', 'Ford', 7, 1),
('Thomas', 'Calle', 8, 1),
('Tom', 'Holland', 9, 1),
('Thomas', 'The Apostle', 10, 1);

