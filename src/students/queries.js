const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExist = "SELECT * FROM students WHERE email = $1"
const addStudent = "INSERT INTO students (name,email,age,dob) VALUES($1,$2,$3,$4)"
const deleteStudent ="DELETE FROM students WHERE id = $1";
const updateStudent ="UPDATE students SET column1 = value1, column2 = value2...., columnN = valueN WHERE id = $1"
module.exports={
    getStudents,
    getStudentById,
    checkEmailExist,
    addStudent,
    deleteStudent,
    updateStudent,
}