const express = require("express");
const app = express();
app.use(express.static("src"));
app.get("/",(req,res)=>{
 res.sendFile("index.html")
})
app.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});
