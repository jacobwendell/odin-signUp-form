// SignUp Button and Password boxes
const signUpButton = document.querySelector("button");
const passwordBox = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function validateMyForm() {
    if (passwordBox.value !== confirmPassword.value) {
        alert("Passwords do not match, signup failed");
        return false;
    }

    alert("Sign Up Info Submitted, Thanks for signing up.");
    return true;
}