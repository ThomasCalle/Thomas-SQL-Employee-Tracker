SELECT depaartment.department_name AS department, reviews.review
FROM 
LEFT JOIN department
ON reviews.department_id = department.id
ORDER BY departments.department_name;
