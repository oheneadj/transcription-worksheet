//Get all ids from pages

//Buttons
const breathsBtn = document.getElementById("breaths-btn");
const xrayBtn = document.getElementById("xray-btn");
const coughedBtn = document.getElementById("coughed-btn");
const chandalierBtn = document.getElementById("chandalier-btn");
const throughBtn = document.getElementById("through-btn");
const pageFiveBtn = document.getElementById("pageFiveBtn");

//Select inputs
const breathsSelect = document.getElementById("breaths-select");
const xraySelect = document.getElementById("xray-select");
const coughedSelect = document.getElementById("coughed-select");
const chandalierSelect = document.getElementById("chandalier-select");
const throughSelect = document.getElementById("through-select");

//Alert Boxes
const breathsAlert = document.getElementById("breaths-alert");
const xrayAlert = document.getElementById("xray-alert");
const coughedAlert = document.getElementById("coughed-alert");
const chandalierAlert = document.getElementById("chandalier-alert");
const throughAlert = document.getElementById("through-alert");

//Functions to check answers

//breaths
function checkbreathsAnswer(alert, select) {
  if (select.value == "[ˈbrɛθs]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect.The English rhotic approximant is represented by turned r.";
  } else if (select.value == "[ˈbɹɛθs]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈbɹeaθs]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The two vowels incorrectly indicate a diphthong.";
  } else if (select.value == "[ˈbɹɛths]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This transcription indicates an alveolar stop followed by a glottal fricative.";
  }
}

//xray
function checkxrayAnswer(alert, select) {
  if (select.value == "[ˈɛksɹe]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈeksray]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The intial and final vowels are wrong, along with the [r].";
  } else if (select.value == "[ˈɛxre]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. IPA [x] indicates a voiceless velar fricative.";
  } else if (select.value == "[ˈeksɹe]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Listen again to the initial vowel.";
  }
}

//coughed
function checkcoughedAnswer(alert, select) {
  if (select.value == "[ˈkaft]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈkafd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Check the voicing of the final stop.";
  } else if (select.value == "[ˈcaft]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This doesn't represent the voiceless velar stop.";
  } else if (select.value == "[ˈkafed]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The final two symbols do not represent the final sound of this word.";
  }
}

//chandalier
function checkchandalierAnswer(alert, select) {
  if (select.value == "[ˈʃændəliɹ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Recheck the position of stress.";
  } else if (select.value == "[ʃændəˈliɹ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[shændəˈliɹ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. IPA [sh] indicates a sequence of an [s] and an [h].";
  } else if (select.value == "[ʃandəˈliɹ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The first vowel is produced farther to the front.";
  }
}

//through
function checkthroughAnswer(alert, select) {
  if (select.value == "[ˈthɹu]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Watch out for English th!";
  } else if (select.value == "[ˈθru]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Don't forget that the English rhotic is transcribed with a turned r.";
  } else if (select.value == "[ˈθɹew]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. [ew] does not represent the high back rounded vowel in through. ";
  } else if (select.value == "[ˈθɹu]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  }
}

// Page 2

//All Event Listeners
//Page 1
breathsBtn.addEventListener("click", () => {
  checkbreathsAnswer(breathsAlert, breathsSelect);
});

xrayBtn.addEventListener("click", () => {
  checkxrayAnswer(xrayAlert, xraySelect);
});

coughedBtn.addEventListener("click", () => {
  checkcoughedAnswer(coughedAlert, coughedSelect);
});

chandalierBtn.addEventListener("click", () => {
  checkchandalierAnswer(chandalierAlert, chandalierSelect);
});

throughBtn.addEventListener("click", () => {
  checkthroughAnswer(throughAlert, throughSelect);
});

// Page 2

// Utility Function
function allAnswersCorrect() {
  if (
    breathsSelect.value == "[ˈbɹɛθs]" &&
    xraySelect.value == "[ˈɛksɹe]" &&
    coughedSelect.value == "[ˈkaft]" &&
    throughSelect.value == "[ˈθɹu]" &&
    chandalierSelect.value == "[ʃændəˈliɹ]"
  ) {
    pageFiveBtn.classList.remove("d-none");
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
//     prompt: "Incorrect. That is crab not breaths.",
//   },
// ];
