/* For Aside(nav links) active color */

    // document.URL gets the url in the browser search bar as a string
    // .split() creates returns an array from the string and .pop() returns the last element from that array
    // which is the currentPage's name (a '.html' file)
    const currentPage = document.URL.split('/').pop();
    const navLinks = document.querySelectorAll(".nav li a");

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add("active")
        }
    })

    /************ typing animation **********/ 
    if (currentPage === navLinks[0].getAttribute('href')) {
        let typed = new Typed(".typing", {
            strings: ["Web Designer", "Graphic Designer", "Drummer", "Web Developer", "vocalist", "video editor"],
            typeSpeed:120,
            BackSpeed:60,
            loop:true
        }); 
    }
   
    //const isMobile = window.matchMedia("(max-width: 1199px)").matches;
    const navToggler = document.querySelectorAll(".aside .nav-toggler");
    const aside =  document.querySelectorAll(".aside");
    const mainSection =  document.querySelectorAll(".section");
    const footer = document.querySelectorAll("footer");

    
    /*nav bar slide right and left*/
    navToggler[0].addEventListener("click", () => {
        toogleNavBar();
    })

    function toogleNavBar() {

        if (!navToggler[0].classList.contains("open"))
        {
            navToggler[0].classList.add("open")
            aside[0].classList.add("open")
            mainSection[0].classList.add("blur-effect")
            footer[0].classList.add("blur-effect")
        }
        else
        {
            closeNavBar()
        }
    }
    mainSection[0].addEventListener("click", () => closeNavBar())
    footer[0].addEventListener("click", () => closeNavBar())
    
    function closeNavBar() {
        navToggler[0].classList.remove("open")
        aside[0].classList.remove("open")
        mainSection[0].classList.remove("blur-effect")
        footer[0].classList.remove("blur-effect")
    }

// Copyright year

const year = new Date().getFullYear();
document.getElementById('copyright-year').textContent = year;