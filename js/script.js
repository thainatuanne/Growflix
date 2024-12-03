document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id"); 
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(current)) {
      if (!link.classList.contains("active")) {
        link.classList.add("active");
      }
    } else {
      link.classList.remove("active");
    }
  });
});