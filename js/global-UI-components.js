// UI Components Array
let bodyUIComponents = [];

// Ambient Bubbles UI Component (purely decorative background layer)
bodyUIComponents.push(`
    <div class="bubbles-bg" aria-hidden="true"></div>
`)

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
let script3 = document.createElement('script');

script1.src = "js/script.js";
script2.src = "js/style-switcher.js";
script3.src = "js/bubbles.js";

document.body.append(script1, script2, script3);
