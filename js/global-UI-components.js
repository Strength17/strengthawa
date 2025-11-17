// Head section html
if (document.head.innerHTML === "")
{
    document.head.innerHTML = `
    <!-- Primary Meta Tags -->
    <title>Strength Awa - Graphic Artist, Web developer & Music Instructor</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#000000">
    <meta name="author" content="Strength Awa">
    <meta name="description" content="Awa penn strength offers professional web and graphic design services, plus drumming lessons. Explore a portfolio of responsive websites, branding visuals, and creative projects.">
    <meta name="keywords" content="Strength Awa, Web developer, Awa penn strength, graphic designer, freelance developer, drumming lessons, Bafoussam, responsive websites, branding, portfolio, surge.sh">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Awa penn strength - Web developer & Music Instructor">
    <meta property="og:description" content="Explore creative web and graphic design services, plus music instruction from Awa penn strength.">
    <meta property="og:image" content="https://strengthawa.surge.sh/images/my-logo1.png">
    <meta property="og:url" content="https://strengthawa.surge.sh">
    <meta property="og:type" content="website">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Awa penn strength - Web developer & Music Instructor">
    <meta name="twitter:description" content="Explore creative web and graphic design services, plus music instruction from Awa penn strength.">
    <meta name="twitter:image" content="https://strengthawa.surge.sh/images/my-logo1.png">

    <!-- Links -->
    <link rel="canonical" href="https://strengthawa.surge.sh/">
    <link rel="icon" href="images/my-logo1.png" type="image/x-icon">
    <!-- ***** CSS Files ***** -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive-design.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <!-- ***** Style Switcher ***** -->
   <link rel="stylesheet" href="css/skins/color-1.css" class="alternate-style" title="color-1" 
   disabled>
   <link rel="stylesheet" href="css/skins/color-2.css" class="alternate-style" title="color-2" 
   disabled>
   <link rel="stylesheet" href="css/skins/color-3.css" class="alternate-style" title="color-3" 
   disabled>
   <link rel="stylesheet" href="css/skins/color-4.css" class="alternate-style" title="color-4" 
   disabled>
   <link rel="stylesheet" href="css/skins/color-5.css" class="alternate-style" title="color-5" 
   >
   <link rel="stylesheet" href="css/style-switcher.css">`;
}

// UI Components Array
let bodyUIComponents = [];

// Style Switcher UI Component
bodyUIComponents.push (`
    <div class="style-switcher">
        <div class="style-switcher-toogler s-icon">
            <i class="fas fa-cog fa-spin"></i>
        </div>
        <div class="day-night s-icon">
            <i class="fas fa-sun"></i>
        </div>
        <h4>Theme Colors</h4>
        <div class="colors">
            <span class="color-1" onclick="setActiveStyle('color-1')"></span>
            <span class="color-2" onclick="setActiveStyle('color-2')"></span>
            <span class="color-3" onclick="setActiveStyle('color-3')"></span>
            <span class="color-4" onclick="setActiveStyle('color-4')"></span>
            <span class="color-5" onclick="setActiveStyle('color-5')"></span>
        </div>
    </div>
`)

// Footer UI Component
bodyUIComponents.push(`
    <footer class="padd-15">
        <div class="container footer-container">
            <p>&copy; <span id="copyright-year"></span> Created by AWA PENN STRENGTH || All rights reserved.</p>
            <p style="font-style: italic; margin-top: 5px;">Powered By Sky</p>
        </div>
    </footer>
`)

//
//
//

const mainContainer = document.querySelector(".main-container");
let innerUIComponents = []

// Aside - nav bar
innerUIComponents.push(`
    <div class="aside">
        <div class="logo">
            <a href="#"><span>S</span>trength</a>
        </div>
        <div class="nav-toggler shadow-dark">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="nav">
            <li><a href="index.html"  data-target="home"><i class="fa fa-home"></i> Home</a></li>
            <li><a href="about.html"  data-target="about"><i class="fa fa-user"></i> About</a></li>
            <li><a href="services.html"  data-target="service"><i class="fa fa-list"></i> Services</a></li>
            <li><a href="portfolio.html"  data-target="portfolio"><i class="fa fa-briefcase"></i> Portfolio</a></li>
            <li><a href="contact.html"  data-target="contact"><i class="fa fa-comments"></i> Contact</a></li>
        </ul>
    </div>
`)

//
//
//

innerUIComponents.forEach(component => {
    mainContainer.innerHTML +=  component;
})


bodyUIComponents.forEach(component => {
    document.body.innerHTML += component;
})


// Global Scripts
let script1 = document.createElement('script');
let script2 = document.createElement('script');

script1.src = "js/script.js";
script2.src = "js/style-switcher.js";

document.body.append(script1, script2);