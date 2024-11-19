const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                const accessToken = data.data.access_token;
                const refreshToken = data.data.refresh_token;
                console.log('Access Token:', accessToken);
                console.log('Refresh Token:', refreshToken);

                // Optionally store tokens in localStorage
                // localStorage.setItem('access_token', accessToken);
                // localStorage.setItem('refresh_token', refreshToken);

                alert('Login successful!');
            } else {
                const errorMessage = data.data.message || 'Login failed for an unknown reason.';
                console.error('Login failed:', errorMessage);
                alert(errorMessage);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = registerForm['register-username'].value;
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;

    fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: password })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('Registration successful! Please log in.');
            } else {
                const errorMessage = data.data.message || 'Registration failed for an unknown reason.';
                console.error('Registration failed:', errorMessage);
                alert(errorMessage);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});
