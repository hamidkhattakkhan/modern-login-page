document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("register");
    const signInButton = document.getElementById("login");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", function() {
        container.classList.add("sign-up");
        container.classList.remove("sign-in");
    });

    signInButton.addEventListener("click", function() {
        container.classList.remove("sign-up");
        container.classList.add("sign-in");
    });
});
