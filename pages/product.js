  $(window).on('scroll', function () { if ($(this).scrollTop() > 50) $('#mainNav').addClass('scrolled'); else $('#mainNav').removeClass('scrolled'); });

    brands.forEach(b => { $('#brandDropdown').append(`<li><a class="dropdown-item" href="shop.html?brand=${b}">${b}</a></li>`); });

    const params = new URLSearchParams(window.location.search);
    const pid = parseInt(params.get('id'));
    const product = products.find(p => p.id === pid);

    if (!product) {
      $('#productWrap').html('<div class="text-center py-5"><h2 style="font-family:Bebas Neue,sans-serif;font-size:48px;color:#ccc;">Product Not Found</h2><a href="shop.html" class="btn-enquire d-inline-block mt-3" style="padding:14px 32px;background:#111;color:white;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Back to Shop</a></div>');
    } else {
      document.title = product.name + ' - FOOTLAB';
      $('#bcProduct').text(product.name);

      const d = product.details;
      $('#productWrap').html(`
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="product-main-img-wrap">
              <img src="${product.image}" alt="${product.name}" id="mainProductImg" onerror="this.src='https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80'">
              ${product.badge ? `<div class="product-badge-lg">${product.badge}</div>` : ''}
              <div class="img-change-overlay" onclick="document.getElementById('mainImgUpload').click()">
                <i class="fas fa-image me-2"></i>Change Image
              </div>
              <input type="file" accept="image/*" class="hidden-input" id="mainImgUpload" onchange="changeMainImg(this)">
            </div>
            <p style="font-size:11px;color:#bbb;margin-top:10px;text-align:center;letter-spacing:1px;">Hover on image to change it</p>
          </div>

          <div class="col-lg-6">
            <div class="product-brand-tag">
              <span>${product.brand}</span>
              <span style="color:#ddd;">|</span>
              <span>${product.category}</span>
            </div>
            <h1 class="product-title">${product.name}</h1>
            <div class="product-cat-pill">${product.category}</div>
            <div class="product-price-big">${product.price}</div>
            <p class="product-desc">${d.description}</p>

            ${d.sensor !== 'N/A' ? `
            <div class="specs-title">Specifications</div>
            <div class="spec-row"><div class="spec-key">Sensor</div><div class="spec-val">${d.sensor}</div></div>
            ${d.video !== 'N/A' ? `<div class="spec-row"><div class="spec-key">Video</div><div class="spec-val">${d.video}</div></div>` : ''}
            ${d.iso !== 'N/A' ? `<div class="spec-row"><div class="spec-key">ISO Range</div><div class="spec-val">${d.iso}</div></div>` : ''}
            ${d.fps !== 'N/A' ? `<div class="spec-row"><div class="spec-key">FPS</div><div class="spec-val">${d.fps}</div></div>` : ''}
            <div class="spec-row"><div class="spec-key">Autofocus</div><div class="spec-val">${d.af}</div></div>
            <div class="spec-row"><div class="spec-key">Stabilization</div><div class="spec-val">${d.stabilization}</div></div>
            <div class="spec-row"><div class="spec-key">Weight</div><div class="spec-val">${d.weight}</div></div>
            ` : ''}

            <div class="action-btns">
              <button class="btn-enquire" onclick="showToast('Enquiry sent! We will contact you soon.')">
                <i class="fas fa-envelope me-2"></i>Enquire Now
              </button>
              <a href="https://wa.me/923001234567?text=I am interested in ${encodeURIComponent(product.name)}" target="_blank" class="btn-whatsapp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>

            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #eee;display:flex;gap:24px;">
              <div style="text-align:center;">
                <i class="fas fa-shield-alt" style="font-size:20px;color:#ccc;margin-bottom:6px;display:block;"></i>
                <span style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#999;font-weight:600;">Genuine</span>
              </div>
              <div style="text-align:center;">
                <i class="fas fa-truck" style="font-size:20px;color:#ccc;margin-bottom:6px;display:block;"></i>
                <span style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#999;font-weight:600;">Fast Delivery</span>
              </div>
              <div style="text-align:center;">
                <i class="fas fa-undo" style="font-size:20px;color:#ccc;margin-bottom:6px;display:block;"></i>
                <span style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#999;font-weight:600;">7-Day Return</span>
              </div>
              <div style="text-align:center;">
                <i class="fas fa-headset" style="font-size:20px;color:#ccc;margin-bottom:6px;display:block;"></i>
                <span style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#999;font-weight:600;">Expert Help</span>
              </div>
            </div>
          </div>
        </div>
      `);

      // Related products (same brand or category, excluding current)
      const related = products.filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category)).slice(0, 4);
      let relHtml = '';
      related.forEach(p => {
        relHtml += `
          <div class="col-6 col-md-3">
            <a href="product.html?id=${p.id}" class="product-card">
              <div class="product-img-sm"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80'"></div>
              <div class="product-card-body">
                <div class="pc-brand">${p.brand}</div>
                <div class="pc-name">${p.name}</div>
                <div class="pc-price">${p.price}</div>
              </div>
            </a>
          </div>`;
      });
      $('#relatedGrid').html(relHtml);
    }

    function changeMainImg(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => { $('#mainProductImg').attr('src', e.target.result); showToast('Image changed!'); };
        reader.readAsDataURL(input.files[0]);
      }
    }

    function showToast(msg) { $('#toastNotify').text(msg).addClass('show'); setTimeout(() => $('#toastNotify').removeClass('show'), 2800); }