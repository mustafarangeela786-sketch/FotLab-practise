 // ===== NAVBAR SCROLL =====
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) $('#mainNav').addClass('scrolled');
      else $('#mainNav').removeClass('scrolled');
    });

    // ===== HERO PARTICLES =====
    const icons = ['fa-camera', 'fa-camera-retro', 'fa-eye', 'fa-aperture'];
    const iconClasses = ['fa-camera', 'fa-camera-retro', 'fa-dot-circle', 'fa-circle'];
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('i');
      p.className = 'fas ' + iconClasses[i % 4] + ' particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (15 + Math.random() * 20) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      p.style.fontSize = (20 + Math.random() * 50) + 'px';
      document.getElementById('heroParticles').appendChild(p);
    }

    // ===== BUILD BRAND DROPDOWN =====
    brands.forEach(b => {
      $('#brandDropdown').append(`<li><a class="dropdown-item" href="pages/shop.html?brand=${b}">${b}</a></li>`);
    });

    // ===== PRODUCTS RENDER =====
    let visibleCount = 12;
    let currentFilter = 'all';
    let currentSearch = '';

    function getFiltered() {
      return products.filter(p => {
        const matchFilter = currentFilter === 'all' || p.category === currentFilter;
        const matchSearch = !currentSearch ||
          p.name.toLowerCase().includes(currentSearch) ||
          p.brand.toLowerCase().includes(currentSearch) ||
          p.category.toLowerCase().includes(currentSearch);
        return matchFilter && matchSearch;
      });
    }

    function renderProducts() {
      const filtered = getFiltered();
      const toShow = filtered.slice(0, visibleCount);
      let html = '';
      toShow.forEach(p => {
        html += `
          <div class="col-6 col-md-4 col-lg-3">
            <div class="product-card" data-id="${p.id}">
              <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" id="img-${p.id}" onerror="this.src='https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80'">
                ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
                <button class="img-change-btn" onclick="triggerImgUpload(${p.id})" title="Change Image">
                  <i class="fas fa-image"></i>
                </button>
                <input type="file" accept="image/*" class="img-upload-input" id="upload-${p.id}" onchange="changeProductImage(${p.id}, this)">
              </div>
              <div class="product-body">
                <div class="product-brand">${p.brand}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-cat-tag">${p.category}</div>
                <div class="product-price">${p.price}</div>
                <a href="pages/product.html?id=${p.id}" class="btn-detail">
                  <i class="fas fa-arrow-right me-2"></i>More Details
                </a>
                <button class="btn-add-compare" data-compare-id="${p.id}" onclick="flToggleCompare(${p.id})">+ Add to Compare</button>
              </div>
            </div>
          </div>`;
      });
      $('#productsGrid').html(html);
      if (filtered.length <= visibleCount) $('#loadMoreBtn').hide();
      else $('#loadMoreBtn').show();
    }

    // Image change
    function triggerImgUpload(id) { $(`#upload-${id}`).click(); }
    function changeProductImage(id, input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          $(`#img-${id}`).attr('src', e.target.result);
          showToast('Image updated!');
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    // Filter buttons
    $('.filter-btn').on('click', function () {
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      currentFilter = $(this).data('filter');
      visibleCount = 12;
      renderProducts();
    });

    // Search
    $('#searchInput').on('input', function () {
      currentSearch = $(this).val().toLowerCase();
      visibleCount = 12;
      renderProducts();
    });

    // Load More
    $('#loadMoreBtn').on('click', function () {
      visibleCount += 8;
      renderProducts();
      showToast('More products loaded!');
    });

    // Brands grid
    function renderBrands() {
      let html = '';
      brands.forEach(b => {
        html += `<div class="col-4 col-md-3 col-lg-2"><a href="pages/shop.html?brand=${b}" class="brand-logo-item">${b}</a></div>`;
      });
      $('#brandsGrid').html(html);
    }

    // Toast
    function showToast(msg) {
      $('#toastNotify').text(msg).addClass('show');
      setTimeout(() => $('#toastNotify').removeClass('show'), 2500);
    }

    // Scroll reveal
    function checkReveal() {
      $('.reveal').each(function () {
        const top = $(this)[0].getBoundingClientRect().top;
        if (top < window.innerHeight - 80) $(this).addClass('visible');
      });
    }
    $(window).on('scroll', checkReveal);
    checkReveal();

    // Init
    renderProducts();
    renderBrands();