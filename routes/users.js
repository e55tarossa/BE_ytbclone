import express from "express"
import { update ,deleteUser, getUser, subscribe, unsubscribe, like, dislike } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()

//Update user
router.put("/:id",verifyToken, update)
//Delete user
router.delete("/:id",verifyToken ,deleteUser)
//Get User
router.get("/find/:id", getUser)
//subcribe a user
router.put("/sub/:id",verifyToken, subscribe)
//ubsubcribe a user
router.put("/unsub/:id",verifyToken, unsubscribe)
//like a video
router.put("/like/:videoId",verifyToken ,like)
//dislike a video
router.put("/dislike/:videoId",verifyToken ,dislike)

export default router;