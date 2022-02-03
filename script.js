// const for each buttons answer
const coughYes = document.querySelector(".coughYes");
const coughNo = document.querySelector(".coughNo");
const soreThroatYes = document.querySelector(".soreThroatYes");
const soreThroatNo = document.querySelector(".soreThroatNo");
const runnyNoseYes = document.querySelector(".runnyNoseYes");
const runnyNoseNo = document.querySelector(".runnyNoseNo");
const feverYes = document.querySelector(".feverYes");
const feverNo = document.querySelector(".feverNo");
const vomitingYes = document.querySelector(".vomitingYes");
const vomitingNo = document.querySelector(".vomitingNo");
const diarreheaYes = document.querySelector(".diarreheaYes");
const diarreheaNo = document.querySelector(".diarreheaNo");

// const for each question
const cough = document.querySelector(".cough");
const soreThroat = document.querySelector(".soreThroat");
const runnyNose = document.querySelector(".runnyNose");
const fever = document.querySelector(".fever");
const vomiting = document.querySelector(".vomiting");
const diarrehea = document.querySelector(".diarrehea");

// const for the survey / end / text question
const questions = document.querySelector(".questions");
const end = document.querySelector(".end");
const text = document.querySelector("#text");
const results = document.querySelector("#results");

// array to return answers
const userAnswersList = {
  cough: false,
  soreThroat: false,
  runnyNose: false,
  fever: false,
  vomiting: false,
  diarrehea: false,
};

// First Question
coughYes.addEventListener("click", function () {
  userAnswersList.cough = true;
  cough.style.display = "none";
  soreThroat.style.display = "block";
});

coughNo.addEventListener("click", function () {
  cough.style.display = "none";
  soreThroat.style.display = "block";
});

// Second Question
soreThroatYes.addEventListener("click", function () {
  userAnswersList.soreThroat = true;
  soreThroat.style.display = "none";
  runnyNose.style.display = "block";
});

soreThroatNo.addEventListener("click", function () {
  soreThroat.style.display = "none";
  runnyNose.style.display = "block";
});

// Third Question
runnyNoseYes.addEventListener("click", function () {
  userAnswersList.runnyNose = true;
  runnyNose.style.display = "none";
  fever.style.display = "block";
});

runnyNoseNo.addEventListener("click", function () {
  runnyNose.style.display = "none";
  fever.style.display = "block";
});

// Fourth Question
feverYes.addEventListener("click", function () {
  userAnswersList.fever = true;
  fever.style.display = "none";
  vomiting.style.display = "block";
});

feverNo.addEventListener("click", function () {
  fever.style.display = "none";
  vomiting.style.display = "block";
});

// Fifth Question
vomitingYes.addEventListener("click", function () {
  userAnswersList.vomiting = true;
  vomiting.style.display = "none";
  diarrehea.style.display = "block";
});

vomitingNo.addEventListener("click", function () {
  vomiting.style.display = "none";
  diarrehea.style.display = "block";
});

// function for the user answers
let finalResults = "";
function getResults() {
  let coughResults = "";
  let soreThroatResults = "";
  let runnyNoseResults = "";
  let feverResults = "";
  let vomitingResults = "";
  let diarreheaResults = "";
  if (userAnswersList.cough === true) {
    coughResults = "Cough";
  }
  if (userAnswersList.soreThroat === true) {
    soreThroatResults = "Sore Throat";
  } else if (userAnswersList.soreThroat === false) {
    soreThroatResults = "No Sore Throat";
  }
  if (userAnswersList.runnyNose === true) {
    runnyNoseResults = "Runny Nose";
  } else if (userAnswersList.runnyNose === false) {
    runnyNoseResults = "No Runny Nose";
  }
  if (userAnswersList.fever === true) {
    feverResults = "Fever";
  } else if (userAnswersList.fever === false) {
    feverResults = "No Fever";
  }
  if (userAnswersList.vomiting === true) {
    vomitingResults = "Has been Vomiting";
  } else if (userAnswersList.vomiting === false) {
    vomitingResults = "Has Not Vomited";
  }
  if (userAnswersList.diarrehea === true) {
    diarreheaResults = "Has Diarrehea";
  } else if (userAnswersList.diarrehea === false) {
    diarreheaResults = "Has Not Had Diarrehea";
  }
  finalResults = `Symptoms: ${coughResults}, ${soreThroatResults}, ${runnyNoseResults}, ${feverResults}, ${vomitingResults}, ${diarreheaResults}.`;
  return finalResults;
}

// Sixth Question
diarreheaYes.addEventListener("click", function () {
  userAnswersList.diarrehea = true;
  getResults();
  diarrehea.style.display = "none";
  text.style.display = "none";
  end.style.display = "block";
  results.innerHTML = `${finalResults}`;
});

// displays the end
diarreheaNo.addEventListener("click", function () {
  diarrehea.style.display = "none";
  getResults();
  text.style.display = "none";
  end.style.display = "block";
  results.innerHTML = `${finalResults}`;
});
