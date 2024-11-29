const flipper = document.getElementsByTagName("main")[0];
const goToRegisterButton = document.getElementById("go-to-register");
const goToLoginButton = document.getElementById("go-to-login");
const showPasswordChecks = document.querySelectorAll(".show-password-check");
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');
const passwordFeedback = document.getElementById('password-feedback');
const passwordInput = document.getElementById('register-password');
const passwordStrengthBar = document.getElementById('password-strength');

function toggleFlipper(side) {
    if (flipper.style.transform === "rotateY(180deg)" || side === "register") {
        flipper.style.transform = "rotateY(0deg)";
        setTimeout(() => {
            loginSection.style.display = "flex";
            registerSection.style.display = "none";
        }, 250);
    } else {
        flipper.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            loginSection.style.display = "none";
            registerSection.style.display = "flex";
        }, 250);
    }
}

goToRegisterButton.addEventListener("click", () => toggleFlipper("register"));
goToLoginButton.addEventListener("click", () => toggleFlipper("login"));

showPasswordChecks.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const newType = checkbox.checked ? "text" : "password";

        document.querySelectorAll("input[type='password'], input[type='text']").forEach(passwordField => {
            if (passwordField.id.includes("password")) {
                passwordField.type = newType;
            }
        });

        showPasswordChecks.forEach(otherCheckbox => {
            otherCheckbox.checked = checkbox.checked;
        });
    });
});

passwordInput.addEventListener("keyup", () => {
    /*
    Rates a password based on the following criteria:
    - At least 12 characters long.
    - Contains at least one uppercase letter(A - Z).
    - Contains at least one lowercase letter(a - z).
    - Contains at least one digit(0 - 9).
    - Contains at least one special character(any non - alphanumeric character).
    */
    const maxPoints = 5;
    let password = passwordInput.value;
    const criteria = {
        length: password.length >= 12,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        digit: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    }
    const metCriteriaCount = Object.values(criteria).filter(Boolean).length;

    // Update the strength bar
    passwordStrengthBar.max = maxPoints;
    passwordStrengthBar.value = metCriteriaCount;
    passwordFeedback.style.display = metCriteriaCount > 0 ? "flex" : "none";
});
