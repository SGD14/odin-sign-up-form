function checkPasswordMatch() {
    let passwordField = document.querySelector("form input[name='password']");
    let passwordConfirmField = document.querySelector("form input[name='password-confirm']");
    let errorMessage = document.querySelector("#error-message");

    if(passwordField.value !== "" && passwordField.value === passwordConfirmField.value) {
        passwordField.classList.remove("error");
        passwordConfirmField.classList.remove("error");
        errorMessage.textContent = "";
    } else {
        passwordField.classList.add("error");
        passwordConfirmField.classList.add("error");
        errorMessage.textContent = "* Passwords do not match";
    }
}

checkPasswordMatch();

document.querySelector("form input[name='password']").addEventListener("change", () => checkPasswordMatch());
document.querySelector("form input[name='password-confirm']").addEventListener("change", () => checkPasswordMatch());