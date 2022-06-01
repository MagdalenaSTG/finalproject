const goToTopBtn = document.getElementById("go-to-top");

goToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0 });
})

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
})
