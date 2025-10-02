document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle removed; using single light theme.
  // Set current year in footer
  const yearElement = document.getElementById("year");
  if(yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav-link, .navlinks a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === '/' && currentPath === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Project filtering with input (for pages that have project-filter)
  const input = document.getElementById('project-filter');
  if (input) {
    const cards = document.querySelectorAll('.project-card, .card');
    input.addEventListener('input', () => {
      const query = input.value.toLowerCase();
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        const text = card.innerText.toLowerCase();
        const matches = tags.includes(query) || text.includes(query);
        card.style.display = matches ? 'block' : 'none';
      });
    });
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.navlinks');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = mobileMenuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // Hamburger menu toggle (legacy support)
  const hamburger = document.querySelector('.hamburger');
  const navMenuLegacy = document.querySelector('nav ul, .navlinks');
  if (hamburger && navMenuLegacy) {
    hamburger.addEventListener('click', () => {
      navMenuLegacy.classList.toggle('open');
    });
  }

  // Enhanced Back to Top button
  const backToTopBtn = document.getElementById('backToTop');
  if(backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Enhanced Project Card interactions with modern effects
  const cards = document.querySelectorAll('.project-card, .card');
  cards.forEach(card => {
    // Subtle tilt effect on hover
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 30;
      const rotateY = (x - centerX) / 30;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });

  // Smooth reveal animations for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe sections for reveal animations
  document.querySelectorAll('section:not(.hero)').forEach(section => {
    observer.observe(section);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Button click effects
  document.querySelectorAll('.btn, .button').forEach(btn => {
    btn.addEventListener('click', function() {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

});

// Note: Article overlay functionality removed - articles now open in dedicated pages
