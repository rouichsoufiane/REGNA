// const c_nb = document.getElementById('clients_nb'),
//       p_nb = document.getElementById('projects_nb'),
//       h_nb = document.getElementById('hos_nb'),
//       w_nb = document.getElementById('workers_nb');

 /**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
}

/**
   * Easy on scroll event listener 
   */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = select('#header')
if (selectHeader) {
const headerScrolled = () => {
    if (window.scrollY > 100) {
    selectHeader.classList.add('header-scrolled')
    } else {
    selectHeader.classList.remove('header-scrolled')
    }
}
window.addEventListener('load', headerScrolled)
onscroll(document, headerScrolled)
}

// initialize the libraries and plugins

new PureCounter();
const lightbox = GLightbox({ 
    selector: '.portfolio_lightbox'
 });

// filter function
function filterProjects(e) {
    const projects = document.querySelectorAll(".portfolio_item");
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => category.classList.remove('active'));
    e.target.classList.add('active');
    let filter = e.target.dataset.filter;
    if(filter === '*') {
        projects.forEach(project => project.classList.remove('hidden_projects'));
    } else {
        projects.forEach(project => {
            project.classList.contains(filter) ?
            project.classList.remove('hidden_projects') :
            project.classList.add('hidden_projects');
        })
    }
}

// change active class to navbar
const menuItems = document.querySelectorAll('.nav_list a');
menuItems.forEach(item => item.addEventListener('click', () => {
    removeActiveClass();
    item.classList.add('active');
}))

function removeActiveClass() {
    menuItems.forEach(item => item.classList.remove('active'));
}

// toggle hamburger menu
let selectHamburgerBtn = select('.nav-toggle');
let selectNav = select('.nav');
let navLinks = select('.nav_link', true);
selectHamburgerBtn.addEventListener('click', () => {
    selectHamburgerBtn.classList.toggle('nav-close')
    selectNav.classList.toggle('nav_mobile');
})


navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    selectHamburgerBtn.classList.remove('nav-close');
    selectNav.classList.remove('nav_mobile');
}))
