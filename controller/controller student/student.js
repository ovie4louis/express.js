import express from "express"

const allStudents = (req, res) => {
    res.send("All Students")
};

const newStudents = (req,res) => {
    res.send("create New Student")
};

const updateStudents = (req, res) => {
    res.send("Update Student")
};

const deleteStudents = (req, res) => {
    res.send("Delete Students")
}

export { allStudents, newStudents, updateStudents, deleteStudents }