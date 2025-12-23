/**
* Template Name: Imperial
* Template URL: https://bootstrapmade.com/imperial-free-onepage-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*
* Customized & Developed by: Izzat Rahman
* Website: https://www.evantage.com.my
* Customization Date: 2025
*/



  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/views/assets/js/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  } else {
    console.log('Service Workers are not supported in this browser.');
  }


(function() {
  "use strict";

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
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 300
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = document.querySelector('header'); // Make sure to select the header correctly
if (selectHeader) {
    let headerOffset = selectHeader.offsetTop; // Get the offset position of the header
    let nextElement = selectHeader.nextElementSibling; // Get the element directly after the header

    // Function to handle the fixed header and background changes
    const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
            selectHeader.classList.add('fixed-top'); // Add 'fixed-top' class to make it sticky
            nextElement.classList.add('scrolled-offset'); // Adjust the next element for offset
            
            
        } else {
            selectHeader.classList.remove('fixed-top'); // Remove sticky class when scrolling back
            nextElement.classList.remove('scrolled-offset'); // Reset the next element's offset
            
            // Reset the background to transparent or the original background
            selectHeader.style.background = 'transparent'; // Change this if you want a different default background
        }
    };

    // Trigger the function when the page loads
    window.addEventListener('load', headerFixed);

    // Trigger the function on scroll
    window.addEventListener('scroll', headerFixed);
}


  /**
   * Back to top button
   */
  let backtotop = document.querySelector('.back-to-top');

  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 50) {
        backtotop.classList.add('active');
        selectHeader.style.background = 'rgba(255, 255, 255, 1)';
        selectHeader.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
      } else {
        backtotop.classList.remove('active');
        selectHeader.style.background = 'rgba(255, 255, 255, 0)';
        selectHeader.style.boxShadow = 'none'; // Remove the shadow when back to top
      }
    };

    window.addEventListener('load', toggleBacktotop);
    document.addEventListener('scroll', toggleBacktotop);
  }


    /**
   * Whatsapp button
   */
    let whatsapp = select('.whatsapp')
    if (whatsapp) {
      const togglewhatsapp = () => {
        if (window.scrollY > 100) {
          whatsapp.classList.add('active')
        } else {
          whatsapp.classList.remove('active')
        }
      }
      window.addEventListener('load', togglewhatsapp)
      onscroll(document, togglewhatsapp)
    }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  document.querySelectorAll('.navbar .dropdown > a').forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      const navbar = document.getElementById('navbar');
  
      if (navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();  // Prevent default action (like following the link)
        
        // Get the dropdown menu (next element sibling of the clicked link)
        const dropdownMenu = this.nextElementSibling;
        
        // Toggle the 'dropdown-active' class on the menu
        dropdownMenu.classList.toggle('dropdown-active');
        
        // Optional: Close other dropdowns (if needed)
        document.querySelectorAll('.navbar .dropdown > ul').forEach(function(menu) {
          if (menu !== dropdownMenu) {
            menu.classList.remove('dropdown-active');
          }
        });
      }
    });
  });
  

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.remove()
      }, 100);
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolioContainer');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})()

