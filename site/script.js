/* =========================================
   MADHAV FOOD CATERS
   MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   MENU IMAGES
   ========================================= */

const menuImages = [
  "assets/menu/menu-01.jpeg",
  "assets/menu/menu-02.jpg",
  "assets/menu/menu-03.jpeg",
  "assets/menu/menu-04.jpeg",
  "assets/menu/menu-05.jpeg"
];


/* =========================================
   LIGHTBOX
   ========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");


/* Open image in lightbox */

function openLightbox(src, alt = "") {
  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = src;
  lightboxImg.alt = alt;

  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
  } else {
    lightbox.setAttribute("open", "");
  }
}


/* Close lightbox */

function closeLightboxModal() {
  if (!lightbox) return;

  if (typeof lightbox.close === "function") {
    lightbox.close();
  } else {
    lightbox.removeAttribute("open");
  }
}


/* =========================================
   MENU IMAGE CLICK
   ========================================= */

document.querySelectorAll(".menu-image-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");

    if (!img) return;

    openLightbox(
      img.src,
      img.alt || "Madhav Food Caters Menu"
    );
  });
});


/* =========================================
   RESTAURANT GALLERY IMAGE CLICK
   ========================================= */

document.querySelectorAll(".restaurant-photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    const img = photo.querySelector("img");

    if (!img) return;

    openLightbox(
      img.src,
      img.alt || "Madhav Food Caters"
    );
  });
});


/* =========================================
   CLOSE LIGHTBOX
   ========================================= */

if (closeLightbox) {
  closeLightbox.addEventListener("click", closeLightboxModal);
}


/* Close when clicking outside the image */

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightboxModal();
    }
  });
}


/* Close with Escape key */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightboxModal();
  }
});


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });


  /* Close mobile menu after clicking a link */

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================
   SMOOTH SCROLL
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


/* =========================================
   ROOM BOOKING FORM
   ========================================= */

const bookingForm = document.getElementById("bookingForm");


if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      document.getElementById("name")?.value.trim() || "";

    const phone =
      document.getElementById("phone")?.value.trim() || "";

    const checkIn =
      document.getElementById("checkIn")?.value || "";

    const checkOut =
      document.getElementById("checkOut")?.value || "";

    const guests =
      document.getElementById("guests")?.value || "2";

    const message =
      document.getElementById("message")?.value.trim() || "";


    /* Basic validation */

    if (!name || !phone || !checkIn || !checkOut) {
      alert(
        "Please fill in your name, phone number, check-in and check-out dates."
      );

      return;
    }


    /* WhatsApp message */

    const whatsappMessage =
      `Hello Madhav Villas,%0A%0A` +
      `I would like to enquire about a room booking.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Check-in: ${encodeURIComponent(checkIn)}%0A` +
      `Check-out: ${encodeURIComponent(checkOut)}%0A` +
      `Guests: ${encodeURIComponent(guests)}%0A` +
      `Message: ${encodeURIComponent(message || "No additional message.")}`;


    /* Madhav Villas WhatsApp number */

    const whatsappNumber = "919837283666";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    /* Open WhatsApp */

    window.open(whatsappURL, "_blank");
  });
}


/* =========================================
   CURRENT YEAR
   ========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   END
   ========================================= */