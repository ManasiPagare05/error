import {Router} from 'express'

const router=Router()

router.post("/",(res,req)=>{
    try {
        const {username,password,email}=req.body
        console.log(username,password,email)
        res.status(200).send({message:'Register Successful'})
    } catch (error) {
        console.log(error)
    }
})

export default router;