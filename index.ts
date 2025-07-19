const express =require ("express");
const app = express()


app.get("/" ,(req,res)=>{
	res.json({
	"message":"Get:endpoint"
	})
})

app.post("/" ,(req,res)=>{
	res.json({
	"message":"Post:endpoint"
	})
})

app.listen(3000)
