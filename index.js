document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a"); // Main header nav links
    const headerOffset = 125; // Add 2px to ensure alignment

    // Highlight active section link based on scroll position
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

    // Smooth scroll with adjusted offset for header and padding
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            // Special case for the "Home" button
            if (targetId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const targetSection = document.getElementById(targetId);
                const h2 = targetSection.querySelector("h2"); // Get the header in the section
                const elementPosition = h2.offsetTop - headerOffset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
