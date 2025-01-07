const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Индикатор надёжности пароля
const passwordInput = document.getElementById('password');
const strengthIndicator = document.getElementById('strengthIndicator');
const passwordStrength = document.getElementById('passwordStrength');

passwordInput.addEventListener('focus', () => {
    passwordStrength.style.display = 'block';  // Показать индикатор при фокусе на поле
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 'None';
    let color = 'black';

    // Простая проверка: слабый, средний, сильный
    if (password.length === 0) {
        strength = 'None';  // Если пароль пустой
        color = 'black';
    } else if (password.length < 6) {
        strength = 'Weak';  // Если пароль короткий
        color = 'red';
    } else if (password.length >= 6 && !/\d/.test(password) && !/[^\w\s]/.test(password)) {
        strength = 'Weak';  // Только буквы
        color = 'red';
    } else if (password.length >= 6 && /\d/.test(password) && !/[^\w\s]/.test(password)) {
        strength = 'Medium';  // Буквы и цифры
        color = 'orange';
    } else if (password.length >= 6 && /\d/.test(password) && /[^\w\s]/.test(password)) {
        strength = 'Strong';  // Буквы, цифры и специальные символы
        color = 'green';
    }

    strengthIndicator.textContent = strength;
    strengthIndicator.style.color = color;
});

passwordInput.addEventListener('blur', () => {
    passwordStrength.style.display = 'none';  // Скрыть индикатор при потере фокуса
});

// Сохранение данных пользователя в localStorage
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка, что пароли совпадают
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('registerMessage').textContent = 'Passwords do not match!';
        return;
    }

    if (localStorage.getItem(email)) {
        document.getElementById('registerMessage').textContent = 'User already exists!';
        return;
    }

    localStorage.setItem(email, JSON.stringify({ password }));
    
    registerForm.reset();
    var message = document.getElementById('registerMessage');
    message.style.color = 'green'
    message.textContent = 'Registration successful!';
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
       var message = document.getElementById('loginMessage');
       message.style.color = 'green';
       message.textContent = 'Login successful!';
    } else {
        document.getElementById('loginMessage');
        var message = document.getElementById('loginMessage');
        message.textContent = 'Incorrect inputia!'
    }
});