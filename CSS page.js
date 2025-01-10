

document.addEventListener("DOMContentLoaded", () => {
    // Dynamic highlighting for table of contents links
    const tocLinks = document.querySelectorAll(".container ul li a");

    tocLinks.forEach(link => {
        link.addEventListener("mouseenter", () => link.classList.add("highlight"));
        link.addEventListener("mouseleave", () => link.classList.remove("highlight"));
    });


    const backToTop = document.createElement("button");
    backToTop.textContent = "Back to Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });


    const navLinks = document.querySelectorAll(".main-nav ul li a");
    const sections = document.querySelectorAll("main h2, main h3");

    const updateActiveLink = () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for header height
            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActiveLink);
});

// Additional functionality for styled buttons
const styleButtons = document.querySelectorAll("button");

styleButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Button clicked! Custom styles applied.");
    });
});
