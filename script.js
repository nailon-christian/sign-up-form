/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            if (username === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }
            alert("Login successful (frontend only)!");
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = signupForm.username.value.trim();
            const password = signupForm.password.value.trim();

            if (username === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }
            alert("Registration successful (frontend only)!");
        });
    }
});
