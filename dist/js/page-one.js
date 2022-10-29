//Get all ids from pages

//Buttons
const grabBtn = document.getElementById("grab-btn");
const pluckBtn = document.getElementById("pluck-btn");
const streamBtn = document.getElementById("stream-btn");
const wentBtn = document.getElementById("went-btn");
const rougeBtn = document.getElementById("rouge-btn");
const pageOneBtn = document.getElementById("pageOneBtn");

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

//Functions to check answers
//Grab
function checkGrabAnswer(alert, select) {
  if (select.value == "[ˈgɹæb]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is corect";
    allAnswersCorrect();
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

//Pluck
function checkPluckAnswer(alert, select) {
  if (select.value == "[ˈpluk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = 'Incorrect. That transcription gives you "pluke"';
  } else if (select.value == "[ˈplək]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. In English, schwa doesn't occur in stressed syllables";
  } else if (select.value == "[ˈplʌk]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈplʌck]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There is no IPA [c] in English";
  }
}

//Stream
function checkStreamAnswer(alert, select) {
  if (select.value == "[ˈstrim]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The English rhotic approximant is represented by turned r.";
  } else if (select.value == "[stɹim]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This transcription lacks a stress mark..";
  } else if (select.value == "[ˈstɹɪm]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This word would rhyme with swim.";
  } else if (select.value == "[ˈstɹim]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is Correct";
    allAnswersCorrect();
  }
}

//Went
function checkWentAnswer(alert, select) {
  if (select.value == "[ˈwənt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This would rhyme with runt.";
  } else if (select.value == "[ˈwɛnt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈwɪnt]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText =
      "Correct. This speaker demonstrates a phenomenon called 'nasal raising' where vowels raise before a nasal sound. However, many Americans pronounce this word with the vowel [ɛ]";
    allAnswersCorrect();
  } else if (select.value == "[ˈwent]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This would rhyme with , paint.";
  }
}

//Rouge
function checkRougeAnswer(alert, select) {
  if (select.value == "[ˈɹuj]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. IPA [j] indicates a palatal approximant written in English as y.";
  } else if (select.value == "[ˈɹuʒ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
    allAnswersCorrect();
  } else if (select.value == "[ˈruʒ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The English rhotic approximant is represented by turned r.";
  } else if (select.value == "[ˈɹuʒe]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There are never silent letters in IPA.";
  }
}

// Page 2

//All Event Listeners
//Page 1
grabBtn.addEventListener("click", () => {
  checkGrabAnswer(grabAlert, grabSelect);
});

pluckBtn.addEventListener("click", () => {
  checkPluckAnswer(pluckAlert, pluckSelect);
});

streamBtn.addEventListener("click", () => {
  checkStreamAnswer(streamAlert, streamSelect);
});

wentBtn.addEventListener("click", () => {
  checkWentAnswer(wentAlert, wentSelect);
});

rougeBtn.addEventListener("click", () => {
  checkRougeAnswer(rougeAlert, rougeSelect);
});

// Page 2

// Utility Function
function allAnswersCorrect() {
  if (
    grabSelect.value == "[ˈgɹæb]" &&
    pluckSelect.value == "[ˈplʌk]" &&
    streamSelect.value == "[ˈstɹim]" &&
    rougeSelect.value == "[ˈɹuʒ]" &&
    (wentSelect.value == "[ˈwɛnt]" || wentSelect.value == "[ˈwɪnt]")
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
//     prompt: "Incorrect. That is crab not grab.",
//   },
// ];
