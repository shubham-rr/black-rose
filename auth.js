// Dummy user credentials
const validCredentials = {
    'admin': 'password123',
    'user': 'user123',
    'mj': 'mj123',
    'gilbert': 'gilbert123',
    'abed': 'abed123'
};

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if credentials are valid
    if (validCredentials[username] && validCredentials[username] === password) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Redirect to home page
        window.location.href = 'index.html';
        return false;
    } else {
        alert('Invalid username or password!');
        return false;
    }
}

// Check login status on page load
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    
    // Update navbar based on login status
    const accountIcon = document.querySelector('.navbar a[href="login.html"]');
    
    if (isLoggedIn && accountIcon) {
        // Capitalize first letter of username
        const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
        
        accountIcon.innerHTML = `
            <div style="display: flex; align-items: center;">
                <i class="material-icons">account_circle</i>
                <span style="margin-left: 5px; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">${capitalizedUsername}</span>
            </div>
        `;
        accountIcon.onclick = function(e) {
            e.preventDefault();
            if (confirm('Do you want to log out?')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                window.location.reload();
            }
        };
    }
}

// Run check on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);
