// Retrieve contact data from localStorage
const contactData = localStorage.getItem('contactFormData');
if (contactData) {
    const data = JSON.parse(contactData);
    document.querySelector('h2').textContent = `Your message has been received, ${data.name}!`;
}

// Retrieve and update submission count
let count = localStorage.getItem('submissionCount');
count = count ? parseInt(count) : 0;
document.getElementById('submissionCount').textContent = `Number of submissions: ${count}`;

// Increment the count for future submissions
localStorage.setItem('submissionCount', count + 1);

// Optional: Clear contact data after viewing
localStorage.removeItem('contactFormData');

function goHome() {
    window.location.href = 'index.html';
}