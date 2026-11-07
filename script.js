const form = document.getElementById("mortgage-form");
const clearButton = document.getElementById("clear-button");

const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");

const emptyResults = document.getElementById("empty-results");
const completedResults = document.getElementById("completed-results");

const monthlyResult = document.getElementById("monthly-result");
const totalResult = document.getElementById("total-result");

function showError(inputName, message) {
  const group = document.getElementById(inputName + "-box")
    ? document.getElementById(inputName + "-box").parentElement
    : document.querySelector(".mortgage-type");

  group.classList.add("has-error");
  document.getElementById(inputName + "-error").textContent = message;
}

function removeError(inputName) {
  const group = document.getElementById(inputName + "-box")
    ? document.getElementById(inputName + "-box").parentElement
    : document.querySelector(".mortgage-type");

  group.classList.remove("has-error");
  document.getElementById(inputName + "-error").textContent = "";
}

function formatMoney(number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let formIsCorrect = true;

  const amount = Number(amountInput.value);
  const years = Number(termInput.value);
  const interest = Number(rateInput.value);
  const mortgageType = document.querySelector('input[name="mortgage-type"]:checked');

  if (amountInput.value === "" || amount <= 0) {
    showError("amount", "Enter a valid mortgage amount");
    formIsCorrect = false;
  } else {
    removeError("amount");
  }

  if (termInput.value === "" || years <= 0 || !Number.isInteger(years)) {
    showError("term", "Enter a valid number of years");
    formIsCorrect = false;
  } else {
    removeError("term");
  }

  if (rateInput.value === "" || interest <= 0) {
    showError("rate", "Enter a valid interest rate");
    formIsCorrect = false;
  } else {
    removeError("rate");
  }

  if (mortgageType === null) {
    showError("type", "Choose a mortgage type");
    formIsCorrect = false;
  } else {
    removeError("type");
  }

  if (formIsCorrect === false) {
    return;
  }

  const monthlyRate = interest / 100 / 12;
  const numberOfPayments = years * 12;
  let monthlyPayment;
  let totalPayment;

  if (mortgageType.value === "repayment") {
    monthlyPayment = amount * monthlyRate /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    totalPayment = monthlyPayment * numberOfPayments;
    document.getElementById("monthly-label").textContent = "Your monthly repayments";
  } else {
    monthlyPayment = amount * monthlyRate;
    totalPayment = (monthlyPayment * numberOfPayments) + amount;
    document.getElementById("monthly-label").textContent = "Your monthly interest payment";
  }

  monthlyResult.textContent = formatMoney(monthlyPayment);
  totalResult.textContent = formatMoney(totalPayment);

  emptyResults.hidden = true;
  completedResults.hidden = false;
});

clearButton.addEventListener("click", function() {
  form.reset();

  removeError("amount");
  removeError("term");
  removeError("rate");
  removeError("type");

  completedResults.hidden = true;
  emptyResults.hidden = false;
});

amountInput.addEventListener("input", function() {
  removeError("amount");
});

termInput.addEventListener("input", function() {
  removeError("term");
});

rateInput.addEventListener("input", function() {
  removeError("rate");
});

document.querySelectorAll('input[name="mortgage-type"]').forEach(function(option) {
  option.addEventListener("change", function() {
    removeError("type");
  });
});
