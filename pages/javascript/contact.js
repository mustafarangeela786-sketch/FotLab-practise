 $(window).on('scroll', function () { if ($(this).scrollTop() > 50) $('#mainNav').addClass('scrolled'); else $('#mainNav').removeClass('scrolled'); });
    brands.forEach(b => { $('#brandDropdown').append(`<li><a class="dropdown-item" href="shop.html?brand=${b}">${b}</a></li>`); });

    function submitForm() {
      const name = $('#cName').val().trim();
      const msg = $('#cMsg').val().trim();
      if (!name || !msg) { showToast('Please fill required fields!'); return; }
      showToast('Message sent! We will contact you soon.');
      $('#cName,#cPhone,#cEmail,#cMsg').val('');
    }

    function showToast(msg) { $('#toastNotify').text(msg).addClass('show'); setTimeout(() => $('#toastNotify').removeClass('show'), 2800); }