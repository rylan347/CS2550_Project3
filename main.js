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
});