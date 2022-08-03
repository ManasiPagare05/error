import {Router} from 'express'

const router=Router()

router.post("/",(res,req)=>{
    try {
        const {username,password}=req.body
        console.log(username,password)
        res.status(200).send({message:'Login Successful'})
    } catch (error) {
        console.log(error)
    }
})

export default router;
