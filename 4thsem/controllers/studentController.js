const { json } = require("express");
const db = require("../config/db.js");

const getAllStudent = async (req, res) => {
  // res.json({ message: "All users are exported" });
  // let sql = "select * from student_data";

  try {
    let sql = "select * from students";
    const [data] = await db.query(sql);
    res.status(200).json({ message: "Get all Users", details: data });
  } catch (error) {
    console.error("Error while fetching data", error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const createStudent = async (req, res) => {
  try {
    const sql = "insert into students (name,address,faculty) values(?)";
    const { name, address, faculty } = req.body;
    const userData = await db.query(sql, [name, address, faculty]);
    res.status(200).json({ message: "user created successfully !!" });
  } catch (error) {
    console.error("Failed to create user!!");
    res.status(500).json({ err: "Intenal server Error" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    let sql = `select * from students where id =` + id;
    const [data] = await db.query(sql);
    res.status(200).json({
      message: `Student with id ${req.params.id} is found.`,
      details: data,
    });
  } catch (error) {
    console.error("Error while searching user data!");
    res.status(500).json({ err: "Internal server Error" });
  }
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
