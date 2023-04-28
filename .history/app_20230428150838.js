const express = require("express");
const bodyParser = require("body-parser");
const { SMS } = require("./index");

require("dotenv").config();

const app = express();
const PORT = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (res, req)=>{
    res.send("hello world")
}
// app.get("/api/mpesa", get_access_token, accessToken);
// app.post("/api/mpesa", get_access_token, sendSTKPush);
// app.post("/api/mpesa/callbackurl", callBackURL);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
