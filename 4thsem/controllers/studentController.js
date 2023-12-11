const getAllStudent = (req, res) => {
  res.json({ message: "All users are exported" });
};

const createStudent = (req, res) => {
  res.json({ message: "Student created successfully" });
};

const getStudentById = (req, res) => {
  res.json({ message: `Student with id ${req.params.id} is found ` });
};

const updateStudent = (req, res) => {
  res.json({
    message: `Student with id ${req.params.id} is updated successfully`,
  });
};

const deleteStudent = (req, res) => {
  res.json({
    message: `Student with id ${req.params.id} is deleted successfully!!!`,
  });
};

module.exports = {
  getAllStudent,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
