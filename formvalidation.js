function checkPostalCode () {
    const constraints = {
        CA: [
            "^(CH-)?\\d{4}$",
            "Canada postal codes must have exactly 6 characters in the format: A1A 1A1",
        ],
        USA: [

        ],
        Mexico: [

        ],
    }
    const country = document.getElementById("country").value;
    const postalCodeField = document.getElementById("postalCode").value;
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
    if (constraint.test(postalCodeField.value)) {
        postalCodeField.setCustomValidity("");
    } else {
        postalCodeField.setCustomValidity(constraints[country][1]);
    }
}
window.onload = () => {
    document.getElementById("country").onchange = checkPostalCode;
    document.getElementById("postalCode").oninput = checkPostalCode;
};