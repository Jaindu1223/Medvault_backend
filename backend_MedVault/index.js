const app = require("./app")
const PORT = 2000;

app.get('/',(req,res)=>{
  const { data } = req.body;
 res.send(` Hello ${data}`)
})

app.listen(2000,()=>{
  console.log("Localhost Express running at 2000");
})