$(window).on('scroll', function () { if ($(this).scrollTop() > 50) $('#mainNav').addClass('scrolled'); else $('#mainNav').removeClass('scrolled'); });

    // Build brand dropdown nav
    brands.forEach(b => { $('#brandDropdown').append(`<li><a class="dropdown-item" href="shop.html?brand=${b}">${b}</a></li>`); });

    // Build brand filters sidebar
    brands.forEach(b => {
      const count = products.filter(p => p.brand === b).length;
      $('#brandFilters').append(`<button class="sidebar-btn" data-brand="${b}">${b} <span class="count">${count}</span></button>`);
    });

    let activeBrand = 'all', activeCat = 'all', searchTerm = '';

    // Read URL params
    const params = new URLSearchParams(window.location.search);
    if (params.get('brand')) activeBrand = params.get('brand');
    if (params.get('cat')) activeCat = params.get('cat');

    function getFiltered() {
      let list = products.filter(p => {
        const bMatch = activeBrand === 'all' || p.brand === activeBrand;
        const cMatch = activeCat === 'all' || p.category === activeCat;
        const sMatch = !searchTerm || p.name.toLowerCase().includes(searchTerm) || p.brand.toLowerCase().includes(searchTerm);
        return bMatch && cMatch && sMatch;
      });
      const sort = $('#sortSelect').val();
      if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
      else if (sort === 'brand') list.sort((a, b) => a.brand.localeCompare(b.brand));
      return list;
    }

    function updateHeader() {
      let title = 'All Products';
      if (activeBrand !== 'all') title = activeBrand;
      else if (activeCat !== 'all') title = activeCat;
      $('#shopTitle').text(title);
      $('#breadActive').text(title);
      const n = getFiltered().length;
      $('#shopSub').text(n + ' Products Available');
    }

    function renderActiveFilters() {
      let html = '';
      if (activeBrand !== 'all') html += `<span class="filter-tag">${activeBrand} <span class="remove" onclick="activeBrand='all';render()">✕</span></span>`;
      if (activeCat !== 'all') html += `<span class="filter-tag">${activeCat} <span class="remove" onclick="activeCat='all';render()">✕</span></span>`;
      $('#activeFilters').html(html);
    }

    function render() {
      const filtered = getFiltered();
      $('#resultInfo').text('Showing ' + filtered.length + ' products');
      updateHeader();
      renderActiveFilters();

      if (filtered.length === 0) { $('#productsGrid').html(''); $('#noResults').removeClass('d-none'); return; }
      $('#noResults').addClass('d-none');

      let html = '';
      filtered.forEach(p => {
        html += `
          <div class="col-6 col-md-4">
            <div class="product-card">
              <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" id="img-${p.id}" >
                ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
                <button class="img-change-btn" onclick="triggerUpload(${p.id})" title="Change Image"><i class="fas fa-image"></i></button>
                <input type="file" accept="image/*" class="img-upload-input" id="upload-${p.id}" onchange="changeImg(${p.id},this)">
              </div>
              <div class="product-body">
                <div class="product-brand">${p.brand}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-cat-tag">${p.category}</div>
                <div class="product-price">${p.price}</div>
                <a href="product.html?id=${p.id}" class="btn-detail"><i class="fas fa-arrow-right me-2"></i>More Details</a>
                <button class="btn-add-compare" data-compare-id="${p.id}" onclick="flToggleCompare(${p.id})">+ Add to Compare</button>
              </div>
            </div>
          </div>`;
      });
      $('#productsGrid').html(html);

      // Update sidebar active states
      $('[data-brand]').removeClass('active');
      $(`[data-brand="${activeBrand}"]`).addClass('active');
      $('[data-cat]').removeClass('active');
      $(`[data-cat="${activeCat}"]`).addClass('active');
    }

    function triggerUpload(id) { $(`#upload-${id}`).click(); }
    function changeImg(id, input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => { $(`#img-${id}`).attr('src', e.target.result); showToast('Image updated!'); };
        reader.readAsDataURL(input.files[0]);
      }
    }

    $(document).on('click', '[data-brand]', function () {
      activeBrand = $(this).data('brand'); render();
    });
    $(document).on('click', '[data-cat]', function () {
      activeCat = $(this).data('cat'); render();
    });
    $('#searchInput').on('input', function () { searchTerm = $(this).val().toLowerCase(); render(); });
    $('#sortSelect').on('change', render);

    function showToast(msg) { $('#toastNotify').text(msg).addClass('show'); setTimeout(() => $('#toastNotify').removeClass('show'), 2500); }

    render();