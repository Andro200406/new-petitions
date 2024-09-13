document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // CTA button hover effect
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Handle Petition Form Submission
    const petitionForm = document.getElementById('petition-form');
    const formResponse = document.getElementById('form-response');

    if (petitionForm) {
        petitionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Form validation
            const title = document.getElementById('petition-title').value;
            const description = document.getElementById('petition-description').value;
            const type = document.getElementById('petition-type').value;
            const email = document.getElementById('user-email').value;

            if (title === "" || description === "" || type === "" || email === "") {
                formResponse.textContent = "Please fill in all fields.";
                formResponse.style.color = '#dc3545'; // Red color for error
                return;
            }

            // Simulate sending data to the backend
            const petitionData = {
                title,
                description,
                type,
                email
            };

            // Replace this with an actual fetch request to a server API
            fetch('https://example.com/api/submit-petition', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petitionData)
            })
            .then(response => response.json())
            .then(data => {
                formResponse.textContent = "Petition submitted successfully!";
                formResponse.style.color = '#28a745'; // Green color for success
                petitionForm.reset();
            })
            .catch(error => {
                formResponse.textContent = "There was an error submitting your petition. Please try again.";
                formResponse.style.color = '#dc3545'; // Red color for error
            });
        });
    }

    // Handle Signup Form Submission
    const signupForm = document.getElementById('signup-form');
    const signupResponse = document.getElementById('signup-response');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            // Normally, send data to server here
            signupResponse.textContent = 'Signup successful!';
            setTimeout(() => window.location.href = 'login.html', 2000); // Redirect to login page
        });
    }

    // Handle Login Form Submission
    const loginForm = document.getElementById('login-form');
    const loginResponse = document.getElementById('login-response');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // Normally, verify user with server here
            loginResponse.textContent = 'Login successful!';
            setTimeout(() => window.location.href = 'main.html', 2000); // Redirect to main page
        });
    }

    // Caesar Cipher Encryption and Decryption
    function shiftChar(char, shift) {
        const base = char >= 'a' && char <= 'z' ? 'a' : char >= 'A' && char <= 'Z' ? 'A' : null;
        if (!base) return char;

        const baseCode = base.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const newCharCode = ((charCode - baseCode + shift) % 26 + 26) % 26 + baseCode;

        return String.fromCharCode(newCharCode);
    }

    function caesarCipher(text, shift) {
        return text.split('').map(char => shiftChar(char, shift)).join('');
    }

    function encrypt() {
        const shift = parseInt(document.getElementById('shift').value, 10);
        const text = document.getElementById('text').value;
        const encryptedText = caesarCipher(text, shift);
        document.getElementById('result').value = encryptedText;
    }

    function decrypt() {
        const shift = parseInt(document.getElementById('shift').value, 10);
        const text = document.getElementById('text').value;
        const decryptedText = caesarCipher(text, -shift);
        document.getElementById('result').value = decryptedText;
    }

    // Event listeners for Caesar Cipher actions
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');

    if (encryptBtn) {
        encryptBtn.addEventListener('click', encrypt);
    }

    if (decryptBtn) {
        decryptBtn.addEventListener('click', decrypt);
    }
});
