// Get all ids from pages
const grabSelect = document.getElementById("grab-select");

const checkAnswer = () => {
  console.log(grabSelect.value);
};

grabSelect.addEventListener("change", checkAnswer);
