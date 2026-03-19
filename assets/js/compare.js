// ============================================================
//  compare.js  —  FOOTLAB Product Comparison System
//  Author: FOOTLAB Dev Team
//
//  WHAT THIS FILE DOES:
//  1. Maintains a "compare basket" of up to 3 products in
//     localStorage so selections survive page navigation.
//  2. Renders a floating "Compare Bar" at the bottom of every
//     page that shows selected products and a Go-Compare button.
//  3. Powers the interactive dropdowns on compare.html.
//  4. Maps every product ID to its Word spec sheet (.docx).
//  5. Injects Download Spec Sheet button on product detail pages.
//
//  NOTE: Does NOT modify products.js or any other existing file.
// ============================================================


// ─── 1. WORD DOCUMENT MAP ────────────────────────────────────────────────────
// Maps product id → .docx filename inside /docs/
const SPEC_DOCS = {
  1:  'canon-eos-r5-spec.docx',
  2:  'canon-eos-r6-mark-ii-spec.docx',
  3:  'canon-eos-90d-spec.docx',
  4:  'canon-powershot-g7x-iii-spec.docx',
  5:  'canon-eos-m50-mark-ii-spec.docx',
  6:  'canon-eos-r3-spec.docx',
  7:  'canon-ef-50mm-f-14-spec.docx',
  8:  'nikon-z9-spec.docx',
  9:  'nikon-z6-iii-spec.docx',
  10: 'nikon-d850-spec.docx',
  11: 'nikon-z50-ii-spec.docx',
  12: 'nikon-z-24-70mm-f-28-s-spec.docx',
  13: 'nikon-coolpix-p1000-spec.docx',
  14: 'sony-a7r-v-spec.docx',
  15: 'sony-a7-iv-spec.docx',
  16: 'sony-zv-e10-ii-spec.docx',
  17: 'sony-a6700-spec.docx',
  18: 'sony-rx100-vii-spec.docx',
  19: 'sony-fe-85mm-f-14-gm-spec.docx',
  20: 'sony-a1-spec.docx',
  21: 'fujifilm-x-t5-spec.docx',
  22: 'fujifilm-x100vi-spec.docx',
  23: 'fujifilm-gfx-100s-ii-spec.docx',
  24: 'fujifilm-x-s20-spec.docx',
  25: 'fujifilm-xf-56mm-f-12-r-wr-spec.docx',
  26: 'panasonic-s5-ii-spec.docx',
  27: 'panasonic-gh7-spec.docx',
  28: 'fujifilm-x-s20-spec.docx',
  29: 'panasonic-s5-ii-spec.docx',
  30: 'fujifilm-x-t5-spec.docx',
  31: 'fujifilm-x-s20-spec.docx',
  32: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  33: 'sony-a1-spec.docx',
  34: 'sony-a1-spec.docx',
  35: 'gopro-hero13-black-spec.docx',
  36: 'gopro-hero13-black-spec.docx',
  37: 'gopro-hero13-black-spec.docx',
  38: 'dji-rs-4-pro-gimbal-spec.docx',
  39: 'dji-rs-4-pro-gimbal-spec.docx',
  40: 'sigma-fp-l-spec.docx',
  41: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  42: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  43: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  44: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  45: 'sony-fe-85mm-f-14-gm-spec.docx',
  46: 'fujifilm-x100vi-spec.docx',
  47: 'fujifilm-x100vi-spec.docx',
  48: 'sigma-fp-l-spec.docx',
  49: 'sigma-fp-l-spec.docx',
  50: 'fujifilm-gfx-100s-ii-spec.docx',
  51: 'fujifilm-gfx-100s-ii-spec.docx',
  52: 'gopro-hero13-black-spec.docx',
  53: 'gopro-hero13-black-spec.docx',
  54: 'godox-v1-round-head-flash-spec.docx',
  55: 'godox-v1-round-head-flash-spec.docx',
  56: 'godox-v1-round-head-flash-spec.docx',
  57: 'manfrotto-mt055cxpro3-spec.docx',
  58: 'manfrotto-befree-gt-spec.docx',
  59: 'godox-ad600-pro-spec.docx',
  60: 'godox-v1-round-head-flash-spec.docx',
  61: 'lowepro-protactic-450-aw-ii-spec.docx',
  62: 'peak-design-everyday-backpack-20l-spec.docx',
  63: 'sandisk-extreme-pro-256gb-cfexpress-spec.docx',
  64: 'sandisk-extreme-pro-512gb-v60-spec.docx',
  65: 'benq-sw321c-32-inch-spec.docx',
  66: 'canon-rf-70-200mm-f-28-l-is-spec.docx',
  67: 'nikon-z-24-70mm-f-28-s-spec.docx',
  68: 'sony-fe-16-35mm-f-28-gm-ii-spec.docx',
  69: 'fujifilm-xf-56mm-f-12-r-wr-spec.docx',
  70: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  71: 'sigma-35mm-f-14-dg-dn-art-spec.docx',
  72: 'dji-rs-4-pro-gimbal-spec.docx',
  73: 'lowepro-protactic-450-aw-ii-spec.docx'
};


// ─── 2. COMPARE BASKET ───────────────────────────────────────────────────────
// Up to 3 products stored in localStorage.

var BASKET_KEY = 'footlab_compare_basket';
var MAX_COMPARE = 3;

function getBasket() {
  try { return JSON.parse(localStorage.getItem(BASKET_KEY)) || []; }
  catch(e) { return []; }
}
function saveBasket(arr) { localStorage.setItem(BASKET_KEY, JSON.stringify(arr)); }
function addToBasket(id) {
  var basket = getBasket();
  if (basket.indexOf(id) !== -1) return 'already';
  if (basket.length >= MAX_COMPARE) return 'full';
  basket.push(id);
  saveBasket(basket);
  return 'added';
}
function removeFromBasket(id) { saveBasket(getBasket().filter(function(i){ return i !== id; })); }
function clearBasket() { saveBasket([]); }
function isInBasket(id) { return getBasket().indexOf(id) !== -1; }


// ─── 3. STYLES ───────────────────────────────────────────────────────────────
function injectCompareStyles() {
  if (document.getElementById('fl-compare-styles')) return;
  var s = document.createElement('style');
  s.id = 'fl-compare-styles';
  s.textContent = [
    // Compare bar
    '#fl-compare-bar{position:fixed;bottom:0;left:0;right:0;background:#111;border-top:2px solid #2a2a2a;z-index:9998;padding:10px 20px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;transform:translateY(100%);transition:transform 0.35s ease;box-shadow:0 -4px 28px rgba(0,0,0,0.6);}',
    '#fl-compare-bar.visible{transform:translateY(0);}',
    '.fl-bar-label{font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.35);white-space:nowrap;flex-shrink:0;}',
    '.fl-bar-slots{display:flex;gap:8px;flex:1;min-width:0;}',
    '.fl-bar-slot{display:flex;align-items:center;gap:8px;background:#1c1c1c;border:1px solid #333;padding:7px 12px;min-width:150px;max-width:200px;overflow:hidden;}',
    '.fl-bar-slot.empty{border-style:dashed;opacity:0.35;justify-content:center;}',
    '.fl-slot-info{flex:1;overflow:hidden;}',
    '.fl-slot-brand{font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.3);}',
    '.fl-slot-name{font-size:11px;font-weight:700;color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.fl-slot-rm{background:none;border:none;color:rgba(255,255,255,0.25);cursor:pointer;font-size:13px;padding:0 2px;flex-shrink:0;}',
    '.fl-slot-rm:hover{color:#ff4444;}',
    '.fl-bar-actions{display:flex;gap:8px;align-items:center;flex-shrink:0;}',
    '.fl-btn-go{background:white;color:#111;border:none;padding:10px 24px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;white-space:nowrap;}',
    '.fl-btn-go:hover{background:#eee;color:#111;}',
    '.fl-btn-go:disabled{background:#333;color:#666;cursor:not-allowed;pointer-events:none;}',
    '.fl-btn-clr{background:none;border:1px solid #333;color:rgba(255,255,255,0.3);padding:9px 14px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;white-space:nowrap;}',
    '.fl-btn-clr:hover{border-color:#ff4444;color:#ff4444;}',
    // Add-to-compare button on cards
    '.btn-add-compare{display:block;width:100%;margin-top:8px;background:transparent;border:1.5px solid #ddd;color:#888;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:9px 0;cursor:pointer;transition:all 0.2s;font-family:Montserrat,sans-serif;}',
    '.btn-add-compare:hover{border-color:#111;color:#111;background:#f8f8f8;}',
    '.btn-add-compare.in-compare{background:#111;color:white;border-color:#111;}',
    '.btn-add-compare.in-compare:hover{background:#cc0000;border-color:#cc0000;}',
    // Download spec button on product detail
    '.btn-dl-spec{display:inline-flex;align-items:center;gap:8px;background:#f0f0f0;color:#333;border:1.5px solid #ddd;padding:14px 22px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:all 0.3s;text-decoration:none;font-family:Montserrat,sans-serif;}',
    '.btn-dl-spec:hover{background:#111;color:white;border-color:#111;}'
  ].join('');
  document.head.appendChild(s);
}


// ─── 4. COMPARE BAR ──────────────────────────────────────────────────────────
function buildCompareBar() {
  var old = document.getElementById('fl-compare-bar');
  if (old) old.remove();

  var basket = getBasket();
  var bar = document.createElement('div');
  bar.id = 'fl-compare-bar';

  var inPages = window.location.pathname.indexOf('/pages/') !== -1;
  var cmpPath = inPages ? 'compare.html' : 'pages/compare.html';

  // Label
  var lbl = document.createElement('div');
  lbl.className = 'fl-bar-label';
  lbl.innerHTML = '<i class="fas fa-columns" style="margin-right:6px;"></i>Compare';
  bar.appendChild(lbl);

  // Slots
  var slotsWrap = document.createElement('div');
  slotsWrap.className = 'fl-bar-slots';

  for (var i = 0; i < MAX_COMPARE; i++) {
    var slot = document.createElement('div');
    var bid = basket[i];
    if (bid !== undefined) {
      var prod = (typeof products !== 'undefined') ? products.find(function(p){ return p.id === bid; }) : null;
      var pname  = prod ? prod.name  : 'Product #' + bid;
      var pbrand = prod ? prod.brand : '';
      slot.className = 'fl-bar-slot';
      slot.innerHTML =
        '<div class="fl-slot-info">' +
          '<div class="fl-slot-brand">' + pbrand + '</div>' +
          '<div class="fl-slot-name">' + pname + '</div>' +
        '</div>' +
        '<button class="fl-slot-rm" onclick="flRemoveItem(' + bid + ')" title="Remove">✕</button>';
    } else {
      slot.className = 'fl-bar-slot empty';
      slot.innerHTML = '<span style="font-size:9px;color:rgba(255,255,255,0.25);letter-spacing:1px;">Empty Slot</span>';
    }
    slotsWrap.appendChild(slot);
  }
  bar.appendChild(slotsWrap);

  // Actions
  var actions = document.createElement('div');
  actions.className = 'fl-bar-actions';

  if (basket.length >= 2) {
    var goLink = document.createElement('a');
    goLink.href = cmpPath + '?ids=' + basket.join(',');
    goLink.className = 'fl-btn-go';
    goLink.innerHTML = '<i class="fas fa-columns"></i> Compare Now';
    actions.appendChild(goLink);
  } else {
    var goBtn = document.createElement('button');
    goBtn.className = 'fl-btn-go';
    goBtn.disabled = true;
    goBtn.textContent = 'Add ' + (2 - basket.length) + ' more';
    actions.appendChild(goBtn);
  }

  var clrBtn = document.createElement('button');
  clrBtn.className = 'fl-btn-clr';
  clrBtn.textContent = 'Clear All';
  clrBtn.onclick = function() { clearBasket(); buildCompareBar(); refreshCmpButtons(); };
  actions.appendChild(clrBtn);

  bar.appendChild(actions);
  document.body.appendChild(bar);

  // Show if anything selected
  if (basket.length > 0) {
    requestAnimationFrame(function(){ bar.classList.add('visible'); });
  }
}

function flRemoveItem(id) {
  removeFromBasket(id);
  buildCompareBar();
  refreshCmpButtons();
}


// ─── 5. ADD-TO-COMPARE BUTTON HANDLER ────────────────────────────────────────
function flToggleCompare(id) {
  if (isInBasket(id)) {
    removeFromBasket(id);
  } else {
    var res = addToBasket(id);
    if (res === 'full') {
      alert('You can compare up to 3 products. Remove one first.');
      return;
    }
  }
  buildCompareBar();
  refreshCmpButtons();
}

function refreshCmpButtons() {
  var btns = document.querySelectorAll('[data-compare-id]');
  btns.forEach(function(btn) {
    var id = parseInt(btn.getAttribute('data-compare-id'));
    if (isInBasket(id)) {
      btn.textContent = '✓ Added — Click to Remove';
      btn.classList.add('in-compare');
    } else {
      btn.textContent = '+ Add to Compare';
      btn.classList.remove('in-compare');
    }
  });
}


// ─── 6. COMPARE.HTML PAGE LOGIC ──────────────────────────────────────────────
function initComparePage() {
  if (!document.getElementById('compareResult')) return;

  populateDropdowns();

  // Pre-fill from URL ?ids= or from basket
  var params  = new URLSearchParams(window.location.search);
  var urlStr  = params.get('ids');
  var urlIds  = urlStr ? urlStr.split(',').map(Number).filter(Boolean) : [];
  var initIds = urlIds.length >= 2 ? urlIds : getBasket();

  if (initIds.length >= 2) {
    var s1 = document.getElementById('compareSelect1');
    var s2 = document.getElementById('compareSelect2');
    var s3 = document.getElementById('compareSelect3');
    if (s1 && initIds[0]) s1.value = initIds[0];
    if (s2 && initIds[1]) s2.value = initIds[1];
    if (s3 && initIds[2]) s3.value = initIds[2];
    buildCompareTable();
  }

  var goBtn = document.getElementById('compareBtn');
  if (goBtn) goBtn.addEventListener('click', buildCompareTable);

  var rstBtn = document.getElementById('resetBtn');
  if (rstBtn) rstBtn.addEventListener('click', resetCmpTable);
}

function populateDropdowns() {
  if (typeof products === 'undefined') return;
  var placeholders = ['— Select Product 1 —','— Select Product 2 —','— Product 3 (optional) —'];
  ['compareSelect1','compareSelect2','compareSelect3'].forEach(function(sid, idx) {
    var el = document.getElementById(sid);
    if (!el) return;
    el.innerHTML = '<option value="">' + placeholders[idx] + '</option>';
    products.forEach(function(p) {
      var opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name + ' (' + p.brand + ')';
      el.appendChild(opt);
    });
  });
}

function buildCompareTable() {
  if (typeof products === 'undefined') return;

  var v1 = parseInt(document.getElementById('compareSelect1').value) || 0;
  var v2 = parseInt(document.getElementById('compareSelect2').value) || 0;
  var s3el = document.getElementById('compareSelect3');
  var v3 = s3el ? (parseInt(s3el.value) || 0) : 0;

  var resultEl = document.getElementById('compareResult');
  var emptyEl  = document.getElementById('compareEmpty');

  if (!v1 || !v2) {
    resultEl.innerHTML = '<div style="padding:16px 20px;background:#fff3cd;border:1px solid #ffc107;color:#856404;font-size:13px;font-weight:600;">⚠️ Please select at least Product 1 and Product 2.</div>';
    return;
  }
  if (v1 === v2 || (v3 && (v3===v1||v3===v2))) {
    resultEl.innerHTML = '<div style="padding:16px 20px;background:#fff3cd;border:1px solid #ffc107;color:#856404;font-size:13px;font-weight:600;">⚠️ Please select different products.</div>';
    return;
  }

  var ids  = [v1,v2,v3].filter(Boolean);
  var prods = ids.map(function(id){ return products.find(function(p){ return p.id===id; }); }).filter(Boolean);
  if (prods.length < 2) return;

  if (emptyEl) emptyEl.style.display = 'none';

  // Spec rows
  var ROWS = [
    ['Category',      function(p){ return p.category; }],
    ['Sensor',        function(p){ return p.details.sensor; }],
    ['Video',         function(p){ return p.details.video; }],
    ['ISO Range',     function(p){ return p.details.iso; }],
    ['Burst Speed',   function(p){ return p.details.fps; }],
    ['Autofocus',     function(p){ return p.details.af; }],
    ['Stabilization', function(p){ return p.details.stabilization; }],
    ['Weight',        function(p){ return p.details.weight; }],
    ['Price',         function(p){ return p.price; }]
  ];

  var html = '<div style="overflow-x:auto;border:1px solid #e0e0e0;">'
           + '<table style="width:100%;border-collapse:collapse;min-width:500px;"><thead><tr>'
           + '<th style="background:#111;color:rgba(255,255,255,0.4);padding:16px 20px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;text-align:left;border-right:1px solid #333;width:20%;">Feature</th>';

  prods.forEach(function(p) {
    var docFile = SPEC_DOCS[p.id];
    var docBtn  = docFile
      ? '<a href="../docs/' + docFile + '" download style="display:inline-block;margin-top:8px;font-size:9px;font-weight:800;letter-spacing:1px;text-transform:uppercase;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);padding:5px 10px;text-decoration:none;border:1px solid rgba(255,255,255,0.2);"><i class=\'fas fa-download\' style=\'margin-right:4px;\'></i>Download Spec</a>'
      : '';
    html += '<th style="background:#111;color:white;padding:16px 20px;font-size:13px;font-weight:700;text-align:left;border-right:1px solid #333;">'
          + '<div style="font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3px;">' + p.brand + ' &middot; ' + p.category + '</div>'
          + p.name
          + docBtn
          + '</th>';
  });
  html += '</tr></thead><tbody>';

  ROWS.forEach(function(row, ri) {
    var label = row[0];
    var fn    = row[1];
    var vals  = prods.map(fn);
    var allSame = vals.every(function(v){ return v === vals[0]; });
    var rowBg = ri % 2 === 0 ? '#ffffff' : '#f8f8f8';

    html += '<tr style="background:' + rowBg + ';">';
    html += '<td style="padding:12px 20px;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#999;background:' + rowBg + ';border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;">' + label + '</td>';

    vals.forEach(function(v) {
      var diff = !allSame;
      html += '<td style="padding:12px 20px;font-size:13px;color:' + (diff?'#111':'#777') + ';font-weight:' + (diff?'700':'400') + ';border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;">' + (v||'—') + '</td>';
    });
    html += '</tr>';
  });

  html += '</tbody></table></div>'
       + '<p style="font-size:11px;color:#999;margin-top:10px;"><i class="fas fa-info-circle" style="margin-right:5px;"></i>Bold values indicate differences between products.</p>';

  resultEl.innerHTML = html;
  resultEl.scrollIntoView({ behavior:'smooth', block:'start' });
}

function resetCmpTable() {
  ['compareSelect1','compareSelect2','compareSelect3'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.value = '';
  });
  var r = document.getElementById('compareResult');
  var e = document.getElementById('compareEmpty');
  if (r) r.innerHTML = '';
  if (e) e.style.display = 'block';
}


// ─── 7. PRODUCT DETAIL PAGE — INJECT BUTTONS ─────────────────────────────────
function injectDetailButtons(pid) {
  var actionArea = document.querySelector('.action-btns');
  if (!actionArea || document.getElementById('fl-dl-btn')) return;

  var docFile = SPEC_DOCS[pid];

  // Download Spec Sheet button
  if (docFile) {
    var dlBtn = document.createElement('a');
    dlBtn.id = 'fl-dl-btn';
    dlBtn.href = '../docs/' + docFile;
    dlBtn.download = docFile;
    dlBtn.className = 'btn-dl-spec';
    dlBtn.innerHTML = '<i class="fas fa-file-word"></i> Download Spec Sheet';
    actionArea.appendChild(dlBtn);
  }

  // Add to Compare button
  var cmpBtn = document.createElement('button');
  cmpBtn.className = 'btn-add-compare';
  cmpBtn.style.marginTop = '10px';
  cmpBtn.style.padding = '13px';
  cmpBtn.setAttribute('data-compare-id', pid);
  cmpBtn.onclick = function(){ flToggleCompare(pid); };
  cmpBtn.textContent = isInBasket(pid) ? '✓ Added — Click to Remove' : '+ Add to Compare';
  if (isInBasket(pid)) cmpBtn.classList.add('in-compare');
  actionArea.appendChild(cmpBtn);
}


// ─── 8. INIT ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  injectCompareStyles();
  buildCompareBar();

  // Compare page
  initComparePage();

  // Product detail page
  var urlParams = new URLSearchParams(window.location.search);
  var pid = parseInt(urlParams.get('id')) || 0;
  if (pid && document.querySelector('.action-btns')) {
    injectDetailButtons(pid);
  }

  refreshCmpButtons();
});
