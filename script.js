document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    window.particlesJS = particlesJS // Declare particlesJS in the window scope

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5,
            },
          },
        },
      },
      retina_detect: true,
    })
  }

  // Custom cursor
  const cursor = document.querySelector(".custom-cursor")

  if (window.innerWidth >= 768) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    })

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1"
    })

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0"
    })

    // Change cursor on hover over links and buttons
    const interactiveElements = document.querySelectorAll("a, button")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursor.style.borderWidth = "1px"
      })

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursor.style.borderWidth = "1px"
      })
    })
  }

  // Mobile menu toggle
  const menuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    mobileNav.classList.toggle("active")
    document.body.classList.toggle("no-scroll")
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active")
      mobileNav.classList.remove("active")
      document.body.classList.remove("no-scroll")
    })
  })

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")
  const mobileLinks = document.querySelectorAll(".mobile-nav-link")

  function highlightNavLink() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active")
          }
        })

        mobileLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)
  highlightNavLink() // Call once on load

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scroll-to-top")

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Certificate card color gradients
  const certificateCards = document.querySelectorAll(".certificate-card")

  certificateCards.forEach((card) => {
    const colorClass = card.getAttribute("data-color")
    if (colorClass) {
      card.style.borderColor = "var(--border-color)"
    }
  })

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  function checkIfInView() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible")
      }
    })
  }

  window.addEventListener("scroll", checkIfInView)
  checkIfInView() // Call once on load
})
