const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

const contactData = {name, email, message, timestamp: new Date().toISOString() };
localStorage.setItem('contactFormData', JSON.stringify(contactData));

// Increment counter
let count = localStorage.getItem('submissionCount');
count = count ? parseInt(count) + 1 : 1;
localStorage.setItem('submissionCount', count);

// Redirect to review.html
window.location.href = 'review.html';
});