import express from "express"

import { 
    allStudents, 
    newStudents, 
    updateStudents, 
    deleteStudents 
} from "../controller student/student.js"

const router = express.Router()

router.get("/all", allStudents);
router.post("/create", newStudents);
router.put("/Update", updateStudents);
router.delete("/delete", deleteStudents);


export default router;