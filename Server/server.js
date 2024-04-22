const express = require("express");
const app = express();
const PORT = 3000;
app.use("/",require("./routes/index"));
app.listen(PORT,()=>{
    console.log(`Test server running on port: ${PORT}`);
});