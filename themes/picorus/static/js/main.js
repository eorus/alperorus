/****
Color Toggle
*****/

window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
console.log('Ka.');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

/*!
 * Minimal theme switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2022 - Licensed under MIT
 */

const themeSwitcher = {

  // Config
  _scheme: "auto",
  menuTarget: "details[role='list']",
  buttonsTarget: "a[data-theme-switcher]",
  buttonAttribute: "data-theme-switcher",
  rootAttribute: "data-theme",
  localStorageKey: "picoPreferedColorScheme",

  // Init
  init() {
    this.scheme = this.schemeFromLocalStorage;
    this.initSwitchers();
  },

  // Get color scheme from local storage
  get schemeFromLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      if (window.localStorage.getItem(this.localStorageKey) !== null) {
        return window.localStorage.getItem(this.localStorageKey);
      }
    }
    return this._scheme;
  },

  // Prefered color scheme
  get preferedColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  },

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener("click", event => {
        event.preventDefault();
        // Set scheme
        this.scheme = button.getAttribute(this.buttonAttribute);
        // Close dropdown
        document.querySelector(this.menuTarget).removeAttribute("open");
      }, false);
    });
  },

  // Set scheme
  set scheme(scheme) {
    if (scheme == "auto") {
      this.preferedColorScheme == "dark"
        ? (this._scheme = "dark")
        : (this._scheme = "light");
    } else if (scheme == "dark" || scheme == "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  },

  // Get scheme
  get scheme() {
    return this._scheme;
  },

  // Apply scheme
  applyScheme() {
    document
      .querySelector("html")
      .setAttribute(this.rootAttribute, this.scheme);
  },

  // Store scheme to local storage
  schemeToLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      window.localStorage.setItem(this.localStorageKey, this.scheme);
    }
  },
};

// Init
themeSwitcher.init();
