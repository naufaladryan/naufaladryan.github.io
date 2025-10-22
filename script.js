// Contact form submission handler
// This script intercepts the submit event of the contact form,
// collects input values and opens the user's default mail client
// with a prefilled email. After a brief delay, the browser is
// redirected to the custom thank you page.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    // Construct mailto URL
    const subject = encodeURIComponent('Portfolio Contact Form Submission');
    const bodyLines = [];
    bodyLines.push(`Name: ${name}`);
    bodyLines.push(`Email: ${email}`);
    bodyLines.push('');
    bodyLines.push('Message:');
    bodyLines.push(message);
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailtoLink = `mailto:naufaladryan54@gmail.com?subject=${subject}&body=${body}`;
    // Open the mail client
    window.location.href = mailtoLink;
    // After a short delay, redirect to thank you page
    setTimeout(function () {
      window.location.href = 'thankyou.html';
    }, 500);
  });
});