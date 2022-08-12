// Header Scroll

// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.
let nav = document.querySelector(".navbar");

// The onscroll event occurs when an element's scrollbar is being scrolled.
window.onscroll = function () {
    if(document.documentElement.scrollTop > 30){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

