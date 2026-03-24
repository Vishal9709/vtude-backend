import express from "express"
import upload from "../middleware/multer.js"
import { signIn, signOut, singUp } from "../controller/authController.js"

const authRouter = express.Router()

authRouter.post("/signup" , upload.single("photoUrl"),singUp)
authRouter.post("/signin", signIn)
authRouter.get("/signout", signOut)

export default authRouter