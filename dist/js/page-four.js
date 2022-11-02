//Get all ids from pages

//Buttons
const breathsBtn = document.getElementById("breaths-btn");
const xrayBtn = document.getElementById("xray-btn");
const coughedBtn = document.getElementById("coughed-btn");
const chandalierBtn = document.getElementById("chandalier-btn");
const throughBtn = document.getElementById("through-btn");
const pageFourBtn = document.getElementById("pageFourBtn");

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
  if (select.value == "[ˈspaɪked]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Phonetically, this word does not end in [ed].";
  } else if (select.value == "[ˈspaikt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. The diphthong does not end quite so high.";
  } else if (select.value == "[ˈspikt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This would give you speaked.";
  } else if (select.value == "[ˈspaɪkt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  }
}

//xray
function checkxrayAnswer(alert, select) {
  if (select.value == "[ɹatn̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. If you listen carefully, you will hear that there is no [t], just glottal stop followed by [n].";
  } else if (select.value == "[ɹoʔn̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Don't let the spelling get in they way of how you transcribe the vowels.";
  } else if (select.value == "[ˈɹaʔn̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "ɹotten") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This is orthogrpahic, not phonetic.";
  }
}

//coughed
function checkcoughedAnswer(alert, select) {
  if (select.value == "[ˈjand]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈyand]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Double check how we transcribe the palatal approximant.";
  } else if (select.value == "[ˈyawnd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The first letter doesn't represent a palatal glide, and this word does not contain a bilabial approximant.";
  } else if (select.value == "[ˈjaned]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There is no silent e in IPA.";
  }
}

//chandalier
function checkchandalierAnswer(alert, select) {
  if (select.value == "[ˈfons]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Listen to the voicing of the final sound.";
  } else if (select.value == "[ˈfonz]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈphonz]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This word doesn't start with a bilabial stop.";
  } else if (select.value == "[ˈfonez]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There is no silent e in IPA.";
  }
}

//through
function checkthroughAnswer(alert, select) {
  if (select.value == "[ɪnˈklud]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect.The nasal consonant assimilates in place of articulation to the following stop.";
  } else if (select.value == "[ɪŋˈklud]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[iŋˈklud]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The first vowel is not pronounced as high and front as [i].";
  } else if (select.value == "[ɪŋˈclud]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. English does not use the sound represented by IPA [c].";
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
    breathsSelect.value == "[ˈspaɪkt]" &&
    xraySelect.value == "[ˈɹaʔn̩]" &&
    coughedSelect.value == "[ˈjand]" &&
    throughSelect.value == "[ɪŋˈklud]" &&
    chandalierSelect.value == "[ˈfonz]"
  ) {
    pageFourBtn.classList.remove("d-none");
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
