

import Vonage from '@vonage/server-sdk'

const vonage = new Vonage({
  apiKey: "47c4cf9f",
  apiSecret: "6he3rtky8QxUusoA"
})

export const sendSms =async () => {

const from = "Vonage APIs"
const to = "8801865243109"
const text = 'Please verify your account thanks from instagram team'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
}