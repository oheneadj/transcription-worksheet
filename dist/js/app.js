// Get all ids from pages

//Buttons
const grabBtn = document.getElementById("grab-btn");
const pluckBtn = document.getElementById("pluck-btn");
const streamBtn = document.getElementById("stream-btn");
const wentBtn = document.getElementById("went-btn");
const rougeBtn = document.getElementById("rouge-btn");

//Select inputs
const grabSelect = document.getElementById("grab-select");
const pluckSelect = document.getElementById("pluck-select");
const streamSelect = document.getElementById("stream-select");
const wentSelect = document.getElementById("went-select");
const rougeSelect = document.getElementById("rouge-select");

//Alert Boxes
const grabAlert = document.getElementById("grab-alert");
const pluckAlert = document.getElementById("pluck-alert");
const streamAlert = document.getElementById("stream-alert");
const wentAlert = document.getElementById("went-alert");
const rougeAlert = document.getElementById("rouge-alert");

const checkAnswer = () => {
  console.log(grabSelect.value);

  if (grabSelect.value == "[ˈgɹæb]") {
    grabAlert.classList.remove("d-none");
    grabAlert.classList.remove("alert-danger");
    grabAlert.classList.add("alert-success");
    grabAlert.innerText = "This is corect";
  } else {
    grabAlert.classList.remove("d-none");
    grabAlert.classList.remove("alert-success");
    grabAlert.classList.add("alert-danger");
    grabAlert.innerText = "This is wrong";
  }
};

grabBtn.addEventListener("click", checkAnswer);

const words = {
  name: "grab",
};
