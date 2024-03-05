
const app = require("./app")
const PORT = 9000;

app.get('/',(req,res)=>{
  const { data } = req.body;
 res.send(` Hello ${data}`)
})

app.listen(9000,()=>{
  console.log("Localhost Express running at 9000");
})