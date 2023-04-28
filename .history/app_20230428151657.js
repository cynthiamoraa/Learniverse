const express = require("express");
const bodyParser = require("body-parser");
const { sendAirtime, se } = require("./index");

require("dotenv").config();

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (res, req) => {
  res.send("hello world");
});
app.use("/api/sms", SMS);
// app.get("/api/mpesa", get_access_token, accessToken);
// app.post("/api/mpesa", get_access_token, sendSTKPush);
// app.post("/api/mpesa/callbackurl", callBackURL);

app.listen(PORT, async () => {
  console.log(`Server Running ${PORT}`);
});
