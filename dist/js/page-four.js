//Get all ids from pages

//Buttons
const spikedBtn = document.getElementById("spiked-btn");
const rottenBtn = document.getElementById("rotten-btn");
const yawnedBtn = document.getElementById("yawned-btn");
const phonesBtn = document.getElementById("phones-btn");
const includeBtn = document.getElementById("include-btn");
const pageFourBtn = document.getElementById("pageFourBtn");

//Select inputs
const spikedSelect = document.getElementById("spiked-select");
const rottenSelect = document.getElementById("rotten-select");
const yawnedSelect = document.getElementById("yawned-select");
const phonesSelect = document.getElementById("phones-select");
const includeSelect = document.getElementById("include-select");

//Alert Boxes
const spikedAlert = document.getElementById("spiked-alert");
const rottenAlert = document.getElementById("rotten-alert");
const yawnedAlert = document.getElementById("yawned-alert");
const phonesAlert = document.getElementById("phones-alert");
const includeAlert = document.getElementById("include-alert");

//Functions to check answers
//spiked
function checkspikedAnswer(alert, select) {
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

//rotten
function checkrottenAnswer(alert, select) {
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
  } else if (select.value == "[ˈrɑtən]") {
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

//yawned
function checkyawnedAnswer(alert, select) {
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

//phones
function checkphonesAnswer(alert, select) {
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

//include
function checkincludeAnswer(alert, select) {
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
spikedBtn.addEventListener("click", () => {
  checkspikedAnswer(spikedAlert, spikedSelect);
});

rottenBtn.addEventListener("click", () => {
  checkrottenAnswer(rottenAlert, rottenSelect);
});

yawnedBtn.addEventListener("click", () => {
  checkyawnedAnswer(yawnedAlert, yawnedSelect);
});

phonesBtn.addEventListener("click", () => {
  checkphonesAnswer(phonesAlert, phonesSelect);
});

includeBtn.addEventListener("click", () => {
  checkincludeAnswer(includeAlert, includeSelect);
});

// Page 2

// Utility Function
function allAnswersCorrect() {
  if (
    spikedSelect.value == "[ˈspaɪkt]" &&
    rottenSelect.value == "[ˈrɑtən]" &&
    yawnedSelect.value == "[ˈjand]" &&
    includeSelect.value == "[ɪŋˈklud]" &&
    phonesSelect.value == "[ˈfonz]"
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
//     prompt: "Incorrect. That is crab not spiked.",
//   },
// ];
