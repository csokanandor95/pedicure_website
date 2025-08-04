// Smooth scrolling a navigációs linkekhez
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animációk megjelenítése
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Minden section megfigyelése
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Navbar és scroll-to-top gomb változása scroll közben
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    scrollTopBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.classList.remove('visible');
  }
});

// Scroll to top funkció
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Galéria modal funkciók
function showImageModal(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  modal.style.display = 'block';
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  
  // Fade in animáció
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = '1';
  }, 10);
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// ESC gombra modal bezárása
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Klikk a modal háttérre bezárja
document.addEventListener('click', (e) => {
  const modal = document.getElementById('imageModal');
  if (e.target === modal) {
    closeModal();
  }
});