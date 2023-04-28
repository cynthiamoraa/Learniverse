const credentials = {
  apiKey: "91c378a48d720855d3ee1fbda405a0f50b8fc783257b596ae9f645a06242c450",
  username: "Learniverse",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;
const airtime = AfricasTalking.AIRTIME;

const SMS = (req, res) => {
const { sessionId, phoneNumber, text } = req.body;
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
};



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});