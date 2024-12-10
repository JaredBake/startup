// Import React and useState for managing state
import React, { useState } from 'react';

// LoginForm Component
function LoginForm() {
    // State variables for username, password, and error messages
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Example validation logic
        if (username === '' || password === '') {
            setError('Both fields are required!');
            return;
        }

        // Clear error if validation passes
        setError('');

        // Here you can handle the login logic, such as sending the credentials to a server
        console.log('Logging in with:', { username, password });
    };

    return (
        <div className="form-container" style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </label>
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

// Inline styles for the component
const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px',
        color: '#333'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#4a90e2',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    buttonHover: {
        backgroundColor: '#357ab7'
    },
    error: {
        color: 'red',
        fontSize: '14px'
    }
};

// Export the component for use in other parts of the app
export default LoginForm;
