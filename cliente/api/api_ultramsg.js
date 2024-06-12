var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "token": "{TOKEN}",
    "to": "+543517656710",
    "body": "WhatsApp API on UltraMsg.com works good"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.ultramsg.com/{INSTANCE_ID}/messages/chat", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));