const express = require("express");
const bodyParser = require("body-parser");
const { sendAirtime, sendSms } = require("./index");

require("dotenv").config();

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/sms", sendSms(re));
app.post("/airtime", sendAirtime(req.body));
// app.get("/api/mpesa", get_access_token, accessToken);
// app.post("/api/mpesa", get_access_token, sendSTKPush);
// app.post("/api/mpesa/callbackurl", callBackURL);

app.listen(PORT, async () => {
  console.log(`Server Running ${PORT}`);
});
