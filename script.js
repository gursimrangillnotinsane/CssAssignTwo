
const nav = document.querySelector("header");
let navTop = nav.offsetTop;
const topButton = document.querySelector("footer a.top");
const pullQuote = document.querySelectorAll(".pullquote");
window.addEventListener("scroll", function () {

    if (window.pageYOffset > navTop) {
        nav.classList.add("floater");
        topButton.style.visibility = "visible";
    } else {
        nav.classList.remove("floater");
        topButton.style.visibility = "hidden";
    }
});

topButton.addEventListener("click", function (event) {
    scrollToTop();
    event.preventDefault();
});


function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
