// Typing effect for hero
const typedText = ["Randy Blaze", "Web Developer", "Designer", "Tech Enthusiast"];
let typedIndex = 0;
let charIndex = 0;
let typingSpeed = 120;
let erasingSpeed = 50;
let delayBetween = 1500;

function type() {
  const typedSpan = document.getElementById("typed");
  if (charIndex < typedText[typedIndex].length) {
    typedSpan.textContent += typedText[typedIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  const typedSpan = document.getElementById("typed");
  if (charIndex > 0) {
    typedSpan.textContent = typedText[typedIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    typedIndex = (typedIndex + 1) % typedText.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if(typedText.length) setTimeout(type, delayBetween);
});

// Smooth scrolling for navigation links
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = this.getAttribute('href');
    }
  });
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
