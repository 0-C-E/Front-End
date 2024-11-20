const flipper = document.getElementsByTagName("main")[0];
const goToRegisterButton = document.getElementById("go-to-register");
const goToLoginButton = document.getElementById("go-to-login");
const showPasswordChecks = document.querySelectorAll(".show-password-check");
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');

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
