import { PrismaClient } from "@prisma/client";

const express =require ("express");



const app = express()
const prismaClient = new PrismaClient();

app.get("/" ,(req,res)=>{
   
	res.json({
	"message":"Get:endpoint"
	})
})

const data  = app.post ("/" ,async(req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
	res.json({
	"message":"Post:endpoint"
	})
})

app.listen(3000)
