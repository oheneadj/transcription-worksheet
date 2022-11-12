//Get all ids from pages

//Buttons
const howBtn = document.getElementById("how-btn");
const honorBtn = document.getElementById("honor-btn");
const attractBtn = document.getElementById("attract-btn");
const moodBtn = document.getElementById("mood-btn");
const shouldBtn = document.getElementById("should-btn");
const pageTwoBtn = document.getElementById("pageTwoBtn");

//Select inputs
const howSelect = document.getElementById("how-select");
const honorSelect = document.getElementById("honor-select");
const attractSelect = document.getElementById("attract-select");
const moodSelect = document.getElementById("mood-select");
const shouldSelect = document.getElementById("should-select");

//Alert Boxes
const howAlert = document.getElementById("how-alert");
const honorAlert = document.getElementById("honor-alert");
const attractAlert = document.getElementById("attract-alert");
const moodAlert = document.getElementById("mood-alert");
const shouldAlert = document.getElementById("should-alert");

//Functions to check answers
//how
function checkhowAnswer(alert, select) {
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
  } else if (select.value == "[ˈhow]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. Don't let English spelling fool you!";
  }
}

//honor
function checkhonorAnswer(alert, select) {
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

//attract
function checkattractAnswer(alert, select) {
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

//mood
function checkmoodAnswer(alert, select) {
  if (select.value == "[ˈmood]") {
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

//should
function checkshouldAnswer(alert, select) {
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
      "Incorrect. This would give you showed but with a longer vowel.";
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
howBtn.addEventListener("click", () => {
  checkhowAnswer(howAlert, howSelect);
});

honorBtn.addEventListener("click", () => {
  checkhonorAnswer(honorAlert, honorSelect);
});

attractBtn.addEventListener("click", () => {
  checkattractAnswer(attractAlert, attractSelect);
});

moodBtn.addEventListener("click", () => {
  checkmoodAnswer(moodAlert, moodSelect);
});

shouldBtn.addEventListener("click", () => {
  checkshouldAnswer(shouldAlert, shouldSelect);
});

// Page 2

// Utility Function
function allAnswersCorrect() {
  if (
    howSelect.value == "[ˈhaʊ]" &&
    honorSelect.value == "[ˈanɹ̩]" &&
    attractSelect.value == "[əˈtɹækt]" &&
    shouldSelect.value == "[ˈʃʊd]" &&
    moodSelect.value == "[ˈmud]"
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
//     prompt: "Incorrect. That is crab not how.",
//   },
// ];
