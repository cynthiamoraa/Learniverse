const credentials = {
  apiKey: "c0cb33c561019e12e552b9b2e5b266fd8cbf3690b8739846e57d18edd939dd21",
  username: "FGM23",
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

    console.log("smssssss");
    response = `CON you will receive an sms with a link to a document about it shortly \n
    0. Go Back`;
  } else if (text === "3") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,

        message:
          "https://docs.google.com/forms/d/1Gx7sMnqxxs-WXlKdx8k32_GW811mBUWw12Tr4Sk6WP4/prefill",
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