const flipper = document.getElementsByTagName("main")[0];
const goToRegisterButton = document.getElementById("go-to-register");
const goToLoginButton = document.getElementById("go-to-login");
const showPasswordButtons = document.getElementsByClassName("show-password");
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

Array.from(showPasswordButtons).forEach(button => {
    button.addEventListener("click", () => {
        const passwordInput = document.getElementById("register-password");
        const passwordConfirmInput = document.getElementById("register-password-confirm");

        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        passwordConfirmInput.type = type;
    });
});
