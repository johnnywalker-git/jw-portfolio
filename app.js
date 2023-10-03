const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function scrollToForm(num) {
    console.log("scrolled")
    const element = document.querySelector(`.container-${num + 1}`);
    element.scrollIntoView( {
        behavior: "smooth"
    });
    console.log(element)
};

const icons = document.querySelectorAll(".stack-docs-icon")

icons.forEach((icon) => {
    icon.style.transition = "border 0.3s ease-in-out";

    icon.addEventListener("mouseover", () => {
        icon.style.border = "4px solid gray"
        icon.style.borderRadius = "10px"
    })
    icon.addEventListener("mouseout", () => {
        icon.style.border = ""
    })
})


