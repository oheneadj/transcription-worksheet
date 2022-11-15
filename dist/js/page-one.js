//Get all ids from pages

//Buttons
const blueBtn = document.getElementById("blue-btn");
const specialBtn = document.getElementById("special-btn");
const uglyBtn = document.getElementById("ugly-btn");
const woodBtn = document.getElementById("wood-btn");
const aethesticBtn = document.getElementById("aethestic-btn");
const agoBtn = document.getElementById("ago-btn");
const hereBtn = document.getElementById("here-btn");
const orderBtn = document.getElementById("order-btn");

const pageOneBtn = document.getElementById("pageOneBtn");

//Select inputs
const blueSelect = document.getElementById("blue-select");
const specialSelect = document.getElementById("special-select");
const uglySelect = document.getElementById("ugly-select");
const woodSelect = document.getElementById("wood-select");
const aethesticSelect = document.getElementById("aethestic-select");
const agoSelect = document.getElementById("ago-select");
const hereSelect = document.getElementById("here-select");
const orderSelect = document.getElementById("order-select");

//Alert Boxes
const blueAlert = document.getElementById("blue-alert");
const specialAlert = document.getElementById("special-alert");
const uglyAlert = document.getElementById("ugly-alert");
const woodAlert = document.getElementById("wood-alert");
const aethesticAlert = document.getElementById("aethestic-alert");
const agoAlert = document.getElementById("ago-alert");
const hereAlert = document.getElementById("here-alert");
const orderAlert = document.getElementById("order-alert");

//Functions to check answers
//blue
function checkblueAnswer(alert, select) {
  if (select.value == "[Blu]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is corect";
    allAnswersCorrect();
  } else if (select.value == "[Bue]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[Blʊ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  }
}

//special
function checkspecialAnswer(alert, select) {
  if (select.value == "[spəʒl]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[spəʃɛl]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ˈspɛʃəl]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  }
}

//ugly
function checkuglyAnswer(alert, select) {
  if (select.value == "[ʊgli]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ʊglə]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ˈʌgli]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is Correct";
    allAnswersCorrect();
  }
}

//wood
function checkwoodAnswer(alert, select) {
  if (select.value == "[ˈwud]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ˈwʊd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[woʊd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  }
}

//aethestic
function checkaethesticAnswer(alert, select) {
  if (select.value == "[əˈsθɛtɪk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ɛˈsθɛtɪk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[iːsˈθɛtɪk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  }
}

//ago
function checkagoAnswer(alert, select) {
  if (select.value == "[əˈgoʊ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is corect";
    allAnswersCorrect();
  } else if (select.value == "[əˈgo]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ɑgoʊ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  }
}

//here
function checkhereAnswer(alert, select) {
  if (select.value == "[hər]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[hɝr]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[Hir]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  }
}

//order
function checkorderAnswer(alert, select) {
  if (select.value == "[ordɝ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. ";
  } else if (select.value == "[ɑrder]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect.";
  } else if (select.value == "[ˈɔrdər]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is Correct";
    allAnswersCorrect();
  }
}

// Page 2

//All Event Listeners
//Page 1
blueBtn.addEventListener("click", () => {
  checkblueAnswer(blueAlert, blueSelect);
});

specialBtn.addEventListener("click", () => {
  checkspecialAnswer(specialAlert, specialSelect);
});

uglyBtn.addEventListener("click", () => {
  checkuglyAnswer(uglyAlert, uglySelect);
});

woodBtn.addEventListener("click", () => {
  checkwoodAnswer(woodAlert, woodSelect);
});

aethesticBtn.addEventListener("click", () => {
  checkaethesticAnswer(aethesticAlert, aethesticSelect);
});

agoBtn.addEventListener("click", () => {
  checkagoAnswer(agoAlert, agoSelect);
});

hereBtn.addEventListener("click", () => {
  checkhereAnswer(hereAlert, hereSelect);
});

orderBtn.addEventListener("click", () => {
  checkorderAnswer(orderAlert, orderSelect);
});

// Page 2

// Utility Function
function allAnswersCorrect() {
  if (
    blueSelect.value == "[Blu]" &&
    specialSelect.value == "[ˈspɛʃəl]" &&
    uglySelect.value == "[ˈʌgli]" &&
    woodSelect.value == "[ˈwʊd]" &&
    aethesticSelect.value == "[ɛˈsθɛtɪk]" &&
    agoSelect.value == "[əˈgoʊ]" &&
    hereSelect.value == "[Hir]" &&
    orderSelect.value == "[ˈɔrdər]"
  ) {
    pageOneBtn.classList.remove("d-none");
  }
}

// let word = [
//   {
//     name: "[ˈgɹæb]",
//     prompt: "This is correct",
//   },
//   {
//     name: "[ˈgræb]",
//     prompt:
//       "Incorrect. The English rhotic approximant is represented by turned r.",
//   },
//   {
//     name: "[ˈgɹaeb]",
//     prompt: "Incorrect. In IPA, any sequence of vowels indicates a diphthong.",
//   },
//   {
//     name: "[ˈkɹæb]",
//     prompt: "Incorrect. That is crab not blue.",
//   },
// ];
