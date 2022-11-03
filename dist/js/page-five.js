//Get all ids from pages

//Buttons
const beautyBtn = document.getElementById("beauty-btn");
const sureBtn = document.getElementById("sure-btn");
const celloBtn = document.getElementById("cello-btn");
const gemBtn = document.getElementById("gem-btn");

//Select inputs
const beautySelect = document.getElementById("beauty-select");
const sureSelect = document.getElementById("sure-select");
const celloSelect = document.getElementById("cello-select");
const gemSelect = document.getElementById("gem-select");

//Alert Boxes
const beautyAlert = document.getElementById("beauty-alert");
const sureAlert = document.getElementById("sure-alert");
const celloAlert = document.getElementById("cello-alert");
const gemAlert = document.getElementById("gem-alert");

//Functions to check answers

//beauty
function checkbeautyAnswer(alert, select) {
  if (select.value == "[ˈbuɾi]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. This is booty.";
  } else if (select.value == "[ˈbjuɾi]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
  } else if (select.value == "[ˈbyuti]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The glide is not transcribed as y in IPA and this word has a tap, not a stop, in the last syllable.";
  } else if (select.value == "[ˈbjuty]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. There are two errors in the final syllable.";
  }
}

//sure
function checksureAnswer(alert, select) {
  if (select.value == "[ˈʃuɹ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Some speakers may pronounce this with a high back vowel, but this one does not.";
  } else if (select.value == "[ˈshɹ̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Remember, there are no digraphs like sh in IPA.";
  } else if (select.value == "[ˈʃɹ̩]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
  } else if (select.value == "[ˈʃɹ]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Don't forget to indicate that the approximant is syllabic.";
  }
}

//cello
function checkcelloAnswer(alert, select) {
  if (select.value == "[ˈchɛlo]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. Rembmer, there are no digraphs like ch in IPA.";
  } else if (select.value == "[ˈtʃɛllo]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. The [l] is not long, so should not be transcribed as doubled.";
  } else if (select.value == "[ˈcelo]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. English does not have the sound represented by IPA [c]. Also, double check the first vowel.";
  } else if (select.value == "[ˈtʃɛlo]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
  }
}

//gem
function checkgemAnswer(alert, select) {
  if (select.value == "[ˈjɛm]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText = "Incorrect. IPA [j] indicates a palatal glide.";
  } else if (select.value == "[ˈdʒɪm]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText =
      "Incorrect. Some American English speakers pronounce the word with this vowel, but not this one.";
  } else if (select.value == "[ˈgem]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-success");
    alert.classList.add("alert-danger");
    alert.innerText =
      "Incorrect. This word does not start with a voiced velar stop; the vowel is also incorrect.";
  } else if (select.value == "[ˈdʒɛm]") {
    alert.classList.remove("d-none");
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.innerText = "This is correct";
  }
}

// Page 2

//All Event Listeners
//Page 1
beautyBtn.addEventListener("click", () => {
  checkbeautyAnswer(beautyAlert, beautySelect);
});

sureBtn.addEventListener("click", () => {
  checksureAnswer(sureAlert, sureSelect);
});

celloBtn.addEventListener("click", () => {
  checkcelloAnswer(celloAlert, celloSelect);
});

gemBtn.addEventListener("click", () => {
  checkgemAnswer(gemAlert, gemSelect);
});

// Page 2

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
//     prompt: "Incorrect. That is crab not beauty.",
//   },
// ];
