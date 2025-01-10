document.addEventListener("DOMContentLoaded", () => {
    const tableRows = document.querySelectorAll("table tr");

    tableRows.forEach(row => {
        row.addEventListener("mouseenter", () => row.classList.add("highlight"));
        row.addEventListener("mouseleave", () => row.classList.remove("highlight"));
    });

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            const nameInput = document.getElementById("name");
            if (!nameInput.value.trim()) {
                alert("Please enter your name.");
                event.preventDefault();
            }
        });
    }

    const backToTop = document.createElement("button");
    backToTop.textContent = "Back to Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    const navLinks = document.querySelectorAll(".main-nav a");
    const sections = document.querySelectorAll("main h2");

    const updateActiveNav = () => {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
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

    window.addEventListener("scroll", updateActiveNav);
});