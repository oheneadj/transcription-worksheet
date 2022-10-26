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

//Funtions to check answers
// Grab
function checkGrabAnswer(alert, select) {
  if (select.value == "[ˈgɹæb]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is corect";
  } else if (select.value == "[ˈgræb]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The English rhotic approximant is represented by turned r.";
  } else if (select.value == "[ˈgɹaeb]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. In IPA, any sequence of vowels indicates a diphthong.";
  } else if (select.value == "[ˈkɹæb]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. That is crab not grab.";
  }
}

// Pluck
function checkPluckAnswer(alert, select) {
  if (select.value == "[ˈpluk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is corect";
  } else if (select.value == "[ˈplək]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The English rhotic approximant is represented by turned r.";
  } else if (select.value == "[ˈplʌk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. In IPA, any sequence of vowels indicates a diphthong.";
  } else if (select.value == "[ˈplʌck]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. That is pluck not lsla.";
  }
}

// Event Listeners
grabBtn.addEventListener("click", () => {
  checkGrabAnswer(grabAlert, grabSelect);
});

pluckBtn.addEventListener("click", () => {
  checkPluckAnswer(pluckAlert, pluckSelect);
});

let word = [
  {
    name: "[ˈgɹæb]",
    prompt: "This is correct",
  },
  {
    name: "[ˈgræb]",
    prompt:
      "Incorrect. The English rhotic approximant is represented by turned r.",
  },
  {
    name: "[ˈgɹaeb]",
    prompt: "Incorrect. In IPA, any sequence of vowels indicates a diphthong.",
  },
  {
    name: "[ˈkɹæb]",
    prompt: "Incorrect. That is crab not grab.",
  },
];
