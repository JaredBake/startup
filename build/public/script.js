document.getElementById('createUserBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await fetch('/auth/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      alert('User created successfully!');
    } catch (error) {
      alert('Failed to create user: ' + error.message);
    }
  });
  