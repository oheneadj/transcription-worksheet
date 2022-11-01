//Get all ids from pages

//Buttons
const spikedBtn = document.getElementById("spiked-btn");
const rottenBtn = document.getElementById("rotten-btn");
const yawnedBtn = document.getElementById("yawned-btn");
const phonesBtn = document.getElementById("phones-btn");
const includeBtn = document.getElementById("include-btn");
const pageTwoBtn = document.getElementById("pageTwoBtn");

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
  if (select.value == "[ˈhaw]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This word does not have a fully articulated [w].";
  } else if (select.value == "[ˈhau]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. The final vowel is not quite so high.";
  } else if (select.value == "[ˈhaʊ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈspiked]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Don't let English spelling fool you!";
  }
}

//rotten
function checkrottenAnswer(alert, select) {
  if (select.value == "[ˈhanɹ̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Listen carefully: there is no pronunciation of [h].";
  } else if (select.value == "[ˈonɹ̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The vowel isn't pronounced as [o] as in only.";
  } else if (select.value == "[ˈanɹ̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈanor̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. You are right that there is no [h], but check the vowels and the approximant.";
  }
}

//yawned
function checkyawnedAnswer(alert, select) {
  if (select.value == "[̩aˈtrækt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. The first vowel is n ot low and central.";
  } else if (select.value == "[əˈtɹækt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[̩ʌˈtrækt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. [ ʌ ] never occurs in an unstressed syllable.";
  } else if (select.value == "[̩əˈttræct]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There is no long [t] or [c] in English.";
  }
}

//phones
function checkphonesAnswer(alert, select) {
  if (select.value == "[ˈphones]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This would have [o] as in mode, but longer.";
  } else if (select.value == "[ˈmude]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = 'Incorrect. There is no "silent e" in IPA.';
  } else if (select.value == "[ˈmʌd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This word is mud.";
  } else if (select.value == "[ˈmud]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  }
}

//include
function checkincludeAnswer(alert, select) {
  if (select.value == "[ˈʃʊd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈshʊd]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This word does not begin with the sound [s] followed by the sound [h].";
  } else if (select.value == "[ˈʃood]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This would give you sspikeded but with a longer vowel.";
  } else if (select.value == "[ˈʃʊld]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There is no phonetic [l] in this word.";
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
    spikedSelect.value == "[ˈhaʊ]" &&
    rottenSelect.value == "[ˈanɹ̩]" &&
    yawnedSelect.value == "[əˈtɹækt]" &&
    includeSelect.value == "[ˈʃʊd]" &&
    phonesSelect.value == "[ˈmud]"
  ) {
    pageTwoBtn.classList.remove("d-none");
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
