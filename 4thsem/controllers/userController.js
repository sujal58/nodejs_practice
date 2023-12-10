const getAllUser = (req, res) => {
  res.json({ message: "Get all users details" });
};

const createUser = (req, res) => {
  res.json({ message: "User created successfully!!" });
};

const getUserById = (req, res) => {
  res.json({ message: `Details of user with id ${req.params.id} is found` });
};

const updateUser = (req, res) => {
  res.json({
    message: `User with id ${req.params.id} is updated successfully!!`,
  });
};

const deleteUser = (req, res) => {
  res.json({
    message: `User with id ${req.params.id} is deleted successfully!!`,
  });
};

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
