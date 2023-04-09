const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const postalCode = document.getElementById("postalCode");
const postalCodeError = document.querySelector("#postalCode + span.error");


email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showErrorEmail();
    }
});
country.addEventListener("input", () => {
    if (country.validity.valid) {
        countryError.textContent = "";
        emailError.className = "error";
    } else {
        showErrorCountry();
    }
});
postalCode.addEventListener("input", () => {
    if (postalCode.validity.valid) {
        postalCodeError.textContent = "";
        postalCodeError.className = "error";
    } else {
        showErrorPostalCode();
    }
});

// integrate other inputs validation result here \/
form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showErrorEmail();
        event.preventDefault();
    } else if (!country.validity.valid) {
        showErrorCountry();
        event.preventDefault();
    }
});

function showErrorEmail () {
    if (email.validity.valueMissing) {
        emailError.textContent = "This field is required.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "This value needs to be an email address.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
};
function showErrorCountry () {
    if (country.validity.valueMissing) {
        countryError.textContent = "This field is required.";
    } else if (country.validity.typeMismatch) {
        countryError.textContent = "This value needs to be a country.";
    } else if (country.validity.tooShort) {
        countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
    }
    countryError.className = "error active";
};
function showErrorPostalCode () {
    if (postalCode.validity.valueMissing) {
        postalCodeError.textContent = "This field is required.";
    } else if (postalCode.validity.typeMismatch) {
        postalCodeError.textContent = "This value needs to be a postal code.";
    } else if (postalCode.validity.tooShort) {
        postalCodeError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
    }
    postalCodeError.className = "error active";
};