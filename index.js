// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Testimonial slider
let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
function showNextSlide() {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}
setInterval(showNextSlide, 4000);

// WhatsApp Form Submission - iPhone compatible version
document.getElementById('consultForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formElements = this.elements;

  const getName = () => formElements[0]?.value || 'Not provided';
  const getBirthDate = () => formElements[1]?.value || 'Not provided';
  const getBirthTime = () => formElements[2]?.value || 'Not provided';
  const getBirthPlace = () => formElements[3]?.value || 'Not provided';
  const getEmail = () => formElements[4]?.value || 'Not provided';
  const getPhone = () => formElements[5]?.value || 'Not provided';
  const getQuery = () => formElements[6]?.value || 'Not provided';

  const whatsappMessage = `🔮 New Consultation Request 🔮\n\n` +
                          `👤 Name: ${getName()}\n` +
                          `📅 Date of Birth: ${getBirthDate()}\n` +
                          `⏰ Time of Birth: ${getBirthTime()}\n` +
                          `📍 Place of Birth: ${getBirthPlace()}\n` +
                          `📧 Email: ${getEmail()}\n` +
                          `📞 Phone: ${getPhone()}\n` +
                          `❓ Question: ${getQuery()}\n\n` +
                          `Received via Akshat Gems Website`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = '918209136031';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const modal = document.getElementById('notificationModal');
  const modalMessage = document.getElementById('modalMessage');

  modalMessage.innerHTML = `
    <p>You'll be redirected to WhatsApp to complete your request.</p>
    <p>Please click the button below:</p>
    <button id="goToWhatsApp" style="padding:10px 20px;margin-top:10px;background:#25D366;color:white;border:none;border-radius:5px;cursor:pointer;">Continue to WhatsApp</button>
    <br><small>If WhatsApp doesn't open automatically, please message us directly at +91 8209136031</small>
  `;

  modal.style.display = "block";

  // Wait until modal is visible, then attach event listener to the button
  setTimeout(() => {
    const goToWhatsApp = document.getElementById('goToWhatsApp');
    if (goToWhatsApp) {
      goToWhatsApp.addEventListener('click', () => {
        window.open(whatsappUrl, '_blank');
        modal.style.display = "none";
      });
    }
  }, 100);

  // Reset the form after showing modal
  this.reset();
});

// Close modal when clicking X
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('notificationModal').style.display = "none";
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('notificationModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
