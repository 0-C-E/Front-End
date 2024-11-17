const loginForm = document.getElementById('login-form');

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
            console.log(response); // Debug : vérifier la réponse brute
            return response.json(); // Parse la réponse
        })
        .then(data => {
            if (data.success) {
                console.log('Login successful!');
                loginForm.reset();
                alert('Login successful!');
            } else {
                console.error('Login failed:', data.message);
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});
