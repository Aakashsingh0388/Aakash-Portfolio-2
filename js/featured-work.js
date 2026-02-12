// featured-work.js

// Import GSAP and ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Animate project cards on scroll
  const projectCards = document.querySelectorAll(".project-card");
  
  projectCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });

  // Add hover effects for project cards
  projectCards.forEach((card) => {
    const banner = card.querySelector(".project-banner");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        rotateX: 3,
        rotateY: -3,
        transformPerspective: 800,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      });
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - relY) * 8;
      const ry = (relX - 0.5) * 8;

      gsap.to(card, {
        duration: 0.2,
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 800,
      });

      if (banner) {
        gsap.to(banner, {
          duration: 0.2,
          x: (relX - 0.5) * 12,
          y: (relY - 0.5) * 12,
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      });

      if (banner) {
        gsap.to(banner, {
          duration: 0.3,
          x: 0,
          y: 0,
        });
      }
    });
  });

  // Animate tech tags with stagger
  const techTags = document.querySelectorAll(".tech-tag");
  gsap.from(techTags, {
    scrollTrigger: {
      trigger: ".featured-projects-container",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    stagger: 0.1,
  });

  // Animate education cards on scroll
  const educationCards = document.querySelectorAll(".education-card");
  educationCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "top 40%",
        scrub: 0.5,
      },
      opacity: 0,
      y: 60,
      x: index % 2 === 0 ? -40 : 40,
      duration: 0.9,
    });
  });

  // Add hover effects for education cards
  educationCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -12,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12), 0 0 30px rgba(255, 255, 255, 0.1)",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      });
    });
  });
});
