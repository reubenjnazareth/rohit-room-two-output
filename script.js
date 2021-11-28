var checkButton = document.querySelector("#check-button");
var propertyFirst = document.querySelectorAll(".property1")
var propertySecond = document.querySelectorAll(".property2")

var apiURL = "https://api.thingspeak.com/channels/966231/feeds.json?api_key=ERWGXVTZZX4ZU1M1&results=2";


function clickHandler() {
  // console.log("clicked")

  fetch(apiURL)
  .then(response => response.json())
  .then(json => {
    propertyFirst[0].innerText = json.feeds[0].field1;
    propertySecond[0].innerText = json.feeds[1].field1;

    propertyFirst[1].innerText = json.feeds[0].field2;
    propertySecond[1].innerText = json.feeds[1].field2;

    propertyFirst[2].innerText = json.feeds[0].field3;
    propertySecond[2].innerText = json.feeds[1].field3;
  })
}






checkButton.addEventListener("click", clickHandler)