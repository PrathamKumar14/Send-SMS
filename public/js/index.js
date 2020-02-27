
//jshint esversion:6

const inputNumber = document.getElementById("number");
const textMessage = document.getElementById("msg");

document.getElementById("button").addEventListener("click", handleClick, false);

const socket = io();
socket.on("smsStatus", function(data){
  document.getElementById("responsive").innerHTML = "<h5>Message sent to " + data.number + "</h5>";
});

function handleClick() {
  const number = inputNumber.value.replace(/\D/g, "");
  const text = textMessage.value;

  fetch("/", {
    method: "post",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({number: number, text: text})
  })
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });
}
