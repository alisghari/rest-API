import express from "express"
import { addUser, deletebyid, edit, find, findById, searchh } from "../controllers/userControllers";

const router = express.Router();
router.post("/add", addUser);
router.get("/find", find);
router.get("/:id", findById);
router.post("/findone/:id", edit)
router.delete("/delete/:id", deletebyid)
export default router











