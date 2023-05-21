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


