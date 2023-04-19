document.getElementById('login-button').addEventListener('click', function() {
    // Code to handle login button click event
    // You can replace this with your own logic for handling login
    alert('Login button clicked');
});

document.getElementById('register-button').addEventListener('click', function() {
    // Code to handle register button click event
    // You can replace this with your own logic for handling registration
    window.location.href = 'index.html'; // Redirect to registration page
});
// script.js

// Get all vendor list items
const vendorListItems = document.querySelectorAll('.vendor-list li');

// Add click event listener to each vendor list item
vendorListItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove highlighting from all vendor list items
    vendorListItems.forEach(item => {
      item.classList.remove('highlighted');
    });

    // Add highlighting to clicked vendor list item
    item.classList.add('highlighted');
  });
});

