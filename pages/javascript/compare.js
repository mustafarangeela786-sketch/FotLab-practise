 // Navbar scroll shadow
    window.addEventListener('scroll', function () {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
    });
    // Populate brand dropdown in navbar
    if (typeof brands !== 'undefined') {
      brands.forEach(function (b) {
        document.getElementById('brandDropdown').insertAdjacentHTML('beforeend',
          '<li><a class="dropdown-item" href="shop.html?brand=' + b + '">' + b + '</a></li>');
      });
    }