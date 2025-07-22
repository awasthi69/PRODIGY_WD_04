// Initialize AOS animation library
AOS.init();

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change the icon on toggle
  const icon = toggle.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Animate skill bars on scroll (once)
function animateSkills() {
  const skillFills = document.querySelectorAll('.progress-fill');
  skillFills.forEach(fill => {
    const fillWidth = fill.getAttribute('data-fill');
    fill.style.width = fillWidth;
  });
}
// Run after AOS is initialized to avoid conflicts
window.addEventListener('load', animateSkills);

// Contact form validation & submission
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    return;
  }
  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  // If validation passes, simulate submission success
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.style.color = '#007bff';

  // Clear form inputs
  form.reset();
});
