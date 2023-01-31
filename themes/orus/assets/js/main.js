
    // Navbar Toggle Button
    // ---------------------------------------------- //
    document.querySelector('.navbar-toggler').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.navbar-toggler').classList.toggle('active');
    });

    // ---------------------------------------------- //
    // Dark / Light Toggle
    // ---------------------------------------------- //


window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
console.log('Ka.');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-bs-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
