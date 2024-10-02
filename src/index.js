const express = require("express");
const routes = require("./routes/router");
//api
const app = express();


app.set("PORT", process.env.PORT || 2000);

app.use(express.json());


app.use('/api/v1', routes);

app.listen(app.get("PORT"), ()=>{
    console.log(`application available at : http://localhost:${app.get("PORT")}`)
})