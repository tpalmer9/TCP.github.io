document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a"); 
    const headerOffset = 125;

    window.addEventListener("scroll", function() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

        
            if (targetId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const targetSection = document.getElementById(targetId);
                const h2 = targetSection.querySelector("h2"); 
                const elementPosition = h2.offsetTop - headerOffset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first image
        showSlide(currentIndex);
    }

    showSlide(currentIndex); // Show the first slide initially
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});