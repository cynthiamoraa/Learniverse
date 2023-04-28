const express = require("express");
const bodyParser = require("body-parser");
const { ussd } = require("./index");
const { accessToken, sendSTKPush, callBackURL } = require("./stkpush");
const get_access_token = require("./utils/Accesstoken");
require("dotenv").config();

const app = express();
const PORT = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", ussd);
app.get("/api/mpesa", get_access_token, accessToken);
app.post("/api/mpesa", get_access_token, sendSTKPush);
app.post("/api/mpesa/callbackurl", callBackURL);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
