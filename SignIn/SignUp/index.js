const app = require("./app")

const port = 4000;


app.get('/',(req,res)=>{
    const { data } = req.body;
   res.send(` Hello ${data}`)
})

app.listen(4000,()=>{
    console.log("Localhost Express running at 4000");
})