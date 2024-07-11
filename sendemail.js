document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Initialize EmailJS
    emailjs.init('Nkocy');

    // Collect form data
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send email
    emailjs.send('service_iq54cbr', 'template_qa72jlq', templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
});
