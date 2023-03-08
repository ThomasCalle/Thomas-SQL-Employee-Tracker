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
('Manager', 85000.00, 1),
('Assistant Manager', 55000.00, 1),
('Sales Associate', 129000.00, 1),
('Marketing Manager', 90000.00, 2),
('Marketing Coordinator', 75000.00, 2),
('HR Manager', 120000.00, 3),
('HR Coordinator', 85000.00, 3),
('Finance Manager', 95000.00, 4),
('Senior Engineer', 180000.00, 5),
('Software Developer', 85000.00, 5);

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

