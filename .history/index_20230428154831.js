const credentials = {
  apiKey: "91c378a48d720855d3ee1fbda405a0f50b8fc783257b596ae9f645a06242c450",
  username: "Learniverse",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;
const airtime = AfricasTalking.AIRTIME;

const sendAirtime = (req, res) => {
    
  const options = {
    recipients: [
      {
        phoneNumber: req.phoneNumber,
        amount: req.amount,
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
};

const sendSms = (req, res) => {
  console.log("wwwww");
  const options = {
    to: req.phoneNumber,

    message: "l",
  };
  sms
    .send(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { sendSms, sendAirtime };
