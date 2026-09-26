// Mobile menu
document.querySelectorAll('.menu-toggle').forEach(function (btn) {
  var nav = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
});

// Contact form: opens the visitor's email app with the message filled in.
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    var error = document.getElementById('form-error');
    if (!name || !email || !message) {
      error.textContent = 'Fill in your name, email and message, then try again.';
      error.hidden = false;
      return;
    }
    error.hidden = true;
    var subject = 'Website inquiry from ' + name;
    var body = message + '\n\n' + name + '\n' + email;
    window.location.href = 'mailto:aaron@northerntradestechnologies.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
  });
}
