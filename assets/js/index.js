//   Header Sticky Js
const header = document.querySelector(".header");
const toggleClass = "sticky-header";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

// Mobile Menu Toggle Js
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});

// Product Slider JS
  new Swiper(".perfume-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });


// Accordian Js
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    accordionItems.forEach(other => {
      if (other !== item) {
        other.classList.remove("active");
        other.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});


document.querySelectorAll('.product-choose-item-header').forEach(header => {
  header.addEventListener('click', () => {

    document.querySelectorAll('.product-choose-item').forEach(item => {
      item.classList.remove('active');
    });

    header.closest('.product-choose-item').classList.add('active');
  });
});


// Counter Js
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");

  counters.forEach(counter => {
    const target = parseInt(counter.innerText);  
    let count = 0;

    const speed = 20;  

    const updateCounter = () => {
      if (count < target) {
        count++;
        counter.innerText = count + "%";
        setTimeout(updateCounter, speed);
      } else {
        counter.innerText = target + "%";
      }
    };

    counter.innerText = "0%";
    updateCounter();
  });
});
