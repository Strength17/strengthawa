// --------------- toogle style switcher ------------- 
const styleSwitcherToogle = document.querySelector(".style-switcher-toogler");
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToogle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});
// hide style switcher on scroll 
function hideSwitcher()
{
    if(styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
}
window.addEventListener("scroll", () => {
    hideSwitcher();
});



// --------------- theme colors ------------- 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    localStorage.setItem("activeColor", color);
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
//--------------- theme light and dark mode ------------- 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // An empty string "" (false) will be stored to 'lightState' if it is light mode
    localStorage.setItem('lightMode', document.body.classList)
    UpdateLightModeIcon();
})

window.addEventListener("load", () => {
    let savedColor = localStorage.getItem('activeColor');
    if (savedColor)
    {
        setActiveStyle(savedColor);
    }
    UpdateLightModeIcon();
});


function UpdateLightModeIcon() 
{
    let currentLightMode = localStorage.getItem('lightMode');
    
    // If it is light mode
    if(currentLightMode) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}

console.log("Hey I am Script Style");