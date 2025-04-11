document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = loginForm.email.value.trim();
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();
            const errorMsg = document.getElementById("error-msg");

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                errorMsg.style.display = "block";
                return;
            } else {
                errorMsg.style.display = "none";
            }

            if (username === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.username === username && storedUser.password === password) {
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid login credentials.");
            }
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

            const newUser = {
                username: username,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(newUser));
            alert("Signup successful! You can now log in.");
            window.location.href = "login.html";
        });
    }
});
