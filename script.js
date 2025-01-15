        const form = document.getElementById('registrationForm');

        function verifEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const gender = document.querySelector('input[name="gender"]:checked');

            if (fullName === "" || username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
                alert('All fields must be filled out.');
                return;
            }

            if (!verifEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!gender) {
                alert('Please select a gender.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            alert('Registration successful!');
        });
 