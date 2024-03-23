const app = require("./app")
const PORT = 3001;

app.get('/',(req,res)=>{
  const { data } = req.body;
 res.send(` Hello ${data}`)
})

app.listen(3001,()=>{
  console.log("Localhost Express running at 3001.");
})