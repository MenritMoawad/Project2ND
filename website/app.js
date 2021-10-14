/* Global Variables */
// const apiKey = "d9e02d02ab4a0ca79ffc8dcde9a86162";
// const url = "api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const btn = document.querySelector("#generate");
btn.addEventListener("click", generateFn);

function generateFn() {
  const zipValue = document.querySelector("#zip").value;
  if (zipValue.length === 0) {
    alert("Please enter zip code");
  } else {
    const apiKey = "d9e02d02ab4a0ca79ffc8dcde9a86162";
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipValue}&appid=${apiKey}`;
    getData(url)
      .then(function (data) {
        postData("/addData", {
          temp: data.main.temp,
          date: newDate,
          feelings: feelings.value,
        });
      })
      .then(function () {
        updateUI();
      });
  }
}

const getData = async function (u) {
  // zip code value = 10001 works on postman
  //https was missing from the url
  const res = await fetch(u);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error: " + error);
  }
};
const postData = async (url = "/addData", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error" + error);
  }
};

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("content").innerHTML = allData.userResponse;
  } catch (error) {
    console.log("error"+ error);
  }
};
