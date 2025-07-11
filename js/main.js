// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get navigation links and sections
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Add click event to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all sections
            sections.forEach(s => s.classList.remove('active'));
            
            // Show clicked section
            const target = this.getAttribute('data-section');
            document.getElementById(target).classList.add('active');
            
            // Update active link
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle form submit
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent!');
        form.reset();
    });
    initThemeToggle();
});

// Theme Toggle Function
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    const themeStylesheet = 'css/dark-glass-theme.css';
    const themeId = 'dark-theme-stylesheet';
    
    // Check if theme is already applied (for page refresh persistence)
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved theme on page load
    if (isDarkMode) {
        applyDarkTheme();
        updateButtonText(true);
    }
    
    // Add click event listener to toggle button
    toggleBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            applyDarkTheme();
        } else {
            removeDarkTheme();
        }
        
        updateButtonText(isDarkMode);
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    });
    
    function applyDarkTheme() {
        // Check if theme is already applied to avoid duplicates
        if (!document.getElementById(themeId)) {
            // Create new link element
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = themeStylesheet;
            link.id = themeId;
            
            // Insert at the end of head tag (after main.css)
            document.head.appendChild(link);
        }
    }
    
    function removeDarkTheme() {
        // Find and remove the theme stylesheet
        const existingTheme = document.getElementById(themeId);
        if (existingTheme) {
            existingTheme.remove();
        }
    }
    
    function updateButtonText(isDark) {
        if (isDark) {
            toggleBtn.innerHTML = '☀️ Light Mode';
            toggleBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            toggleBtn.innerHTML = '🌙 Dark Mode';
            toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
}
