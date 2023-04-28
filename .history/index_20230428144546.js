const credentials = {
  apiKey: "",
  username: "Learniverse",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;
const airtime = AfricasTalking.AIRTIME;

function sendAirtime() {
      const options = {
        recipients: [
          {
            phoneNumber: phoneNumber,
            amount: 5,
            currencyCode: "KES",
          },
        ],
      };
      airtime
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendAirtime();

  
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,

        message:
          "l",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();