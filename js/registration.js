document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    showRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    });

    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const country = document.getElementById("country").value.trim();
        const city = document.getElementById("city").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const registerMessage = document.getElementById("registerMessage");

        registerMessage.textContent = "";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            registerMessage.textContent = "Invalid email address.";
            return;
        }
        if (password.length < 6) {
            registerMessage.textContent = "Password must be at least 6 characters.";
            return;
        }
        if (password !== confirmPassword) {
            registerMessage.textContent = "Passwords do not match.";
            return;
        }
        if (!name || !country || !city || !phone) {
            registerMessage.textContent = "All fields are required.";
            return;
        }

        const user = { name, email, password, country, city, phone };
        localStorage.setItem("user", JSON.stringify(user));
        registerMessage.textContent = "Registration successful!";
        registerMessage.style.color = "green";

        registerForm.reset();
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        const loginMessage = document.getElementById("loginMessage");

        loginMessage.textContent = "";

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            loginMessage.textContent = "No user found. Please register first.";
            return;
        }

        if (storedUser.email === email && storedUser.password === password) {
            loginMessage.textContent = "Login successful!";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Invalid email or password.";
        }

        loginForm.reset();
    });
});
