$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove(".show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
