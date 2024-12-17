function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create email body with formatting
    const emailBody = `Name: ${name}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:contact@colehart.uk?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    document.getElementById('contact-form').reset();
    
    return false;
}