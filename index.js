const app = require("./app")
const PORT = 3000;

app.get('/',(req,res)=>{
  const { data } = req.body;
 res.send(` Hello ${data}`)
})

app.listen(3000,()=>{
  console.log("Localhost Express running at 3000");
})