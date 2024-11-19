const flipper = document.getElementsByTagName("main")[0];
const goToRegisterButton = document.getElementById("go-to-register");
const goToLoginButton = document.getElementById("go-to-login");

function toggleFlipper(side) {
    if (flipper.style.transform === "rotateY(180deg)" || side === "register") {
        flipper.style.transform = "rotateY(0deg)";
        setTimeout(() => {
            loginForm.style.display = "flex";
            registerForm.style.display = "none";
        }, 250);
    } else {
        flipper.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            loginForm.style.display = "none";
            registerForm.style.display = "flex";
        }, 250);
    }
}

goToRegisterButton.addEventListener("click", () => toggleFlipper("register"));
goToLoginButton.addEventListener("click", () => toggleFlipper("login"));
