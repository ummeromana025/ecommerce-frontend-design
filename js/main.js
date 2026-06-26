
(function() {
  let total = (4 * 86400) + (13 * 3600) + (34 * 60) + 56;
  setInterval(function() {
    if (total <= 0) return;
    total--;
    const d = Math.floor(total / 86400);
    const h = Math.floor((total % 86400) / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const el = (id) => document.getElementById(id);
    if (el('d')) el('d').textContent = String(d).padStart(2,'0');
    if (el('h')) el('h').textContent = String(h).padStart(2,'0');
    if (el('m')) el('m').textContent = String(m).padStart(2,'0');
    if (el('s')) el('s').textContent = String(s).padStart(2,'0');
  }, 1000);
})();

// ===== ALL PRODUCTS =====
const allProducts = [

  // ELECTRONICS
  { id:1,  name:'Xiaomi Mi Pad tablet',         price:'$240.00', img:'tech1.jpg',  cat:'electronics', brand:'Samsung', desc:'Experience the future of mobile computing with our advanced tablet. Featuring a stunning 11" display, powerful processor, and all-day battery life.' },
  { id:2,  name:'Apple AirPods Pro wireless',        price:'$199.00', img:'tech2.jpg',  cat:'electronics', brand:'Apple', desc:'Premium wireless earbuds with active noise cancellation, spatial audio, and up to 24 hours of listening time with the charging case.' },
  { id:3,  name:'Sony wireless headphones black',    price:'$89.00',  img:'tech6.jpg',  cat:'electronics', brand:'Sony', desc:'High-quality wireless headphones with deep bass, clear highs, and comfortable over-ear design. Perfect for music lovers and professionals.' },
  { id:4,  name:'Apple MacBook Pro laptop',          price:'$999.00', img:'tech7.jpg',  cat:'electronics', brand:'Apple', desc:'The ultimate pro laptop with M2 chip, stunning Retina display, and all-day battery life. Perfect for creative professionals and developers.' },
  { id:5,  name:'Vacuum Cleaner',              price:'$340.00', img:'tech8.jpg',  cat:'electronics', brand:'Vacuum Cleaner', desc:'Smart robot vacuum with advanced mapping, powerful suction, and automatic docking. Keeps your home clean effortlessly.' },
  { id:8,  name:'Smartphone multi camera setup',     price:'$320.00', img:'tech4.jpg',  cat:'electronics', brand:'Samsung', desc:'Experience the future of mobile photography with our advanced multi-camera smartphone. Featuring a 64MP main sensor, ultra-wide lens, and macro capabilities.' },
  { id:9,  name:'Smart Watch',        price:'$49.00',  img:'tech3.jpg',  cat:'electronics', brand:'Xiaomi', desc:'Feature-packed smartwatch with health monitoring, fitness tracking, and 7-day battery life. Stay connected and healthy.' },

  // FASHION & CLOTHING
  { id:10, name:'Women handbag leather',       price:'$45.00',  img:'cloth 2.jpg', cat:'fashion', brand:'Fashion', desc:'Elegant leather handbag with multiple compartments, perfect for daily use and special occasions.' },
  { id:11, name:'T Shirts',              price:'$35.00',  img:'cloth1.jpg',  cat:'fashion', brand:'Fashion', desc:'Premium cotton t-shirts in various colors. Soft, breathable, and perfect for everyday wear.' },
  { id:12, name:'Men colorful shirts collection',    price:'$22.00',  img:'cloth3.jpg',  cat:'fashion', brand:'Fashion', desc:'Vibrant and stylish shirts for men. Made from high-quality fabric with modern fits.' },
  { id:13, name:'Women red heels shoes',             price:'$55.00',  img:'cloth4.jpg',  cat:'fashion', brand:'Fashion', desc:'Stunning red heels that add elegance to any outfit. Comfortable and stylish for any occasion.' },
  { id:14, name:'Men black jeans slim fit',          price:'$30.00',  img:'cloth5.jpg',  cat:'fashion', brand:'Fashion', desc:'Classic slim-fit black jeans. Durable denim with a modern cut that looks great on everyone.' },
  { id:15, name:'Women clothing store collection',     price:'$25.00',  img:'cloth6.jpg',  cat:'fashion', brand:'Fashion', desc:'Curated collection of women\'s clothing featuring the latest trends and timeless classics.' },

  // BEAUTY & HEALTH
  { id:16, name:'Vitamin supplements daily dose',    price:'$24.99',  img:'beauty 4.jpg', cat:'beauty', brand:'Health', desc:'Complete daily vitamin supplements for overall health and wellness. 30-day supply.' },
  { id:17, name:'Professional makeup brush set',     price:'$19.99',  img:'beauty1.jpg',  cat:'beauty', brand:'Beauty', desc:'Complete set of professional makeup brushes for flawless application. Soft bristles and ergonomic handles.' },
  { id:18, name:'Face serum with essential oils',    price:'$34.99',  img:'beauty2.jpg',  cat:'beauty', brand:'Skincare', desc:'Nourishing face serum with natural essential oils. Hydrates, brightens, and rejuvenates skin.' },
  { id:19, name:'Perfumes',        price:'$29.99',  img:'beauty3.jpg',  cat:'beauty', brand:'Skincare', desc:'Luxury fragrances for men and women. Long-lasting scents that make a lasting impression.' },
  { id:20, name:'Luxury lipstick collection',        price:'$15.99',  img:'beauty5.jpg',  cat:'beauty', brand:'Beauty', desc:'Vibrant, long-lasting lipsticks in a range of stunning shades. Creamy texture and rich pigmentation.' },
  { id:21, name:'Skincare Cream',          price:'$59.99',  img:'beauty6.jpg',  cat:'beauty', brand:'Beauty', desc:'Advanced anti-aging skincare cream with hyaluronic acid and retinol. Visible results in 2 weeks.' },

  // HOME & KITCHEN
  { id:23, name:'Modern white sofa living room',     price:'$299.00', img:'home1.jpg',   cat:'home', brand:'Home', desc:'Elegant modern sofa with premium upholstery. Perfect for contemporary living rooms.' },
  { id:24, name:'Coffee Blender',       price:'$49.00',  img:'home2.jpg',   cat:'home', brand:'Home', desc:'High-speed coffee blender for the perfect morning brew. Durable and easy to clean.' },
  { id:25, name:'Modern table lamp wooden base',     price:'$39.00',  img:'home3.jpg',   cat:'home', brand:'Home', desc:'Stylish table lamp with natural wooden base and fabric shade. Warm ambient lighting for any room.' },
  { id:26, name:'Minimalist wall clock round',       price:'$25.00',  img:'home4.jpg',   cat:'home', brand:'Home', desc:'Sleek minimalist wall clock with silent movement. Perfect for modern interiors.' },
  { id:27, name:'Decorative cushion pillow set',     price:'$19.00',  img:'home5.jpg',   cat:'home', brand:'Home', desc:'Set of decorative cushions in various patterns. Adds comfort and style to any space.' },
  { id:28, name:'Coffee maker espresso machine',     price:'$89.00',  img:'home6.jpg',   cat:'home', brand:'Kitchen', desc:'Professional espresso machine for coffee lovers. Rich, barista-quality coffee at home.' },
  { id:29, name:'Indoor decorative plant',           price:'$15.00',  img:'home7.jpg',   cat:'home', brand:'Home', desc:'Beautiful indoor plant that purifies air and adds natural beauty to your home.' },
  { id:30, name:'Electric kettle stainless steel',   price:'$35.00',  img:'home8.jpg',   cat:'home', brand:'Kitchen', desc:'Fast-boiling electric kettle with temperature control. Sleek stainless steel design.' },

  // SPORTS & FITNESS
  { id:31, name:'Professional cycling helmet',       price:'$49.00',  img:'sport1.jpg',  cat:'sports', brand:'Sports', desc:'Safety-certified cycling helmet with aerodynamic design and ventilation system.' },
  { id:32, name:'Running shoes red athletic',        price:'$65.00',  img:'sport2 (1).jpg', cat:'sports', brand:'Nike', desc:'High-performance running shoes with cushioned sole and breathable mesh upper.' },
  { id:33, name:'Football outdoor professional',     price:'$25.00',  img:'sport3.jpg',  cat:'sports', brand:'Sports', desc:'Professional-grade football with superior grip and durability for outdoor play.' },
  { id:34, name:'Yoga mat anti-slip blue',           price:'$29.00',  img:'sport4.jpg',  cat:'sports', brand:'Fitness', desc:'Premium anti-slip yoga mat with extra cushioning. Perfect for all yoga styles.' },
  { id:35, name:'Gym dumbbell set weights',          price:'$45.00',  img:'sport5.jpg',  cat:'sports', brand:'Fitness', desc:'Adjustable dumbbell set for home workouts. Compact and versatile strength training.' },
  { id:36, name:'Sports water bottle 1L',            price:'$15.00',  img:'sports6.jpg', cat:'sports', brand:'Sports', desc:'BPA-free sports water bottle with leak-proof cap. Keeps drinks cold for hours.' },

  // TOOLS & HARDWARE
  { id:37, name:'Professional tool kit set',         price:'$89.99',  img:'tool1.jpg',   cat:'tools', brand:'Tools', desc:'Complete professional tool kit with 100+ pieces. Essential for home repairs and DIY projects.' },
  { id:38, name:'Measuring tape 5 meter',            price:'$8.99',   img:'tool2.jpg',   cat:'tools', brand:'Tools', desc:'Durable 5-meter measuring tape with lock mechanism and belt clip.' },
  { id:39, name:'Wooden tool organizer board',       price:'$24.99',  img:'tool3.jpg',   cat:'tools', brand:'Tools', desc:'Wall-mounted wooden tool organizer. Keeps your workspace tidy and tools accessible.' },
  { id:40, name:'Safety gloves blue industrial',     price:'$12.99',  img:'tool4.jpg',   cat:'tools', brand:'Tools', desc:'Heavy-duty industrial safety gloves with grip coating. Protects hands during tough jobs.' },
  { id:41, name:'Electric drill machine 800W',       price:'$54.99',  img:'tool5.jpg',   cat:'tools', brand:'Tools', desc:'Powerful 800W electric drill with variable speed and multiple drill bits included.' },
  { id:42, name:'Hammer heavy duty steel',           price:'$18.99',  img:'tool6.jpg',   cat:'tools', brand:'Tools', desc:'Professional heavy-duty steel hammer with shock-absorbing grip. Built to last.' },
];

const catTitles = {
  'electronics': 'Electronics',
  'fashion':     'Fashion & Clothing',
  'beauty':      'Beauty & Health',
  'home':        'Home & Kitchen',
  'sports':      'Sports & Fitness',
  'tools':       'Tools & Hardware',
};

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('brandCart')) || [];

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.textContent = '(' + cart.length + ')';
    countEl.classList.add('cart-bounce');
    setTimeout(() => countEl.classList.remove('cart-bounce'), 300);
  }
}

function addToCart() {
  const qty = parseInt(document.getElementById('qtyInput').value) || 1;
  const productName = document.getElementById('productTitle').textContent;
  const productPrice = document.getElementById('productPrice').textContent;
  const productImg = document.getElementById('mainProductImage').src;

  for (let i = 0; i < qty; i++) {
    cart.push({
      name: productName,
      price: productPrice,
      img: productImg,
      added: new Date().toISOString()
    });
  }

  localStorage.setItem('brandCart', JSON.stringify(cart));
  updateCartCount();
  showToast(' ' + qty + ' item(s) added to cart!', 'success');
}

function buyNow() {
  addToCart();
  showToast(' Proceeding to checkout...', 'info');
}

// Initialize cart count on page load
updateCartCount();

// ===== PRODUCT DETAILS PAGE FUNCTIONS =====
function changeImage(thumb, src) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  document.getElementById('mainProductImage').src = src;
}

function selectOption(btn, type) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  let val = parseInt(input.value) || 1;
  val += delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}

function switchTab(btn, tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + tabName).classList.add('active');
}

function loadProduct(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('productTitle').textContent = product.name;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productDesc').textContent = product.desc;
  document.getElementById('productBreadcrumb').textContent = product.name;
  document.getElementById('mainProductImage').src = 'assets/images/' + product.img;

  const thumbs = document.querySelectorAll('.thumb img');
  if (thumbs[0]) thumbs[0].src = 'assets/images/' + product.img;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Product loaded: ' + product.name, 'info');
}

// ===== SEARCH =====
const searchInput  = document.getElementById('searchInput');
const searchBtn    = document.getElementById('searchBtn');
const searchSelect = document.getElementById('searchCategory');

function doSearch() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const catVal = searchSelect ? searchSelect.value : 'All category';
  if (!query && catVal === 'All category') {
    showToast('Please enter something to search!', 'warning');
    return;
  }
  const catMap = {
    'Electronics':'electronics','Mobiles':'electronics',
    'Laptops':'electronics','Clothing':'fashion','Furniture':'home'
  };
  let filtered = allProducts;
  if (query) filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
  if (catMap[catVal]) filtered = filtered.filter(p => p.cat === catMap[catVal]);
  sessionStorage.setItem('searchResults', JSON.stringify(filtered));
  sessionStorage.setItem('searchQuery', query || catVal);
  window.location.href = 'products.html?search=' + encodeURIComponent(query || catVal);
}

if (searchBtn) searchBtn.addEventListener('click', doSearch);
if (searchInput) searchInput.addEventListener('keydown', e => { if (e.key==='Enter') doSearch(); });

// ===== TOAST NOTIFICATION =====
function showToast(msg, type) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();
  const colors = { success:'#00B517', warning:'#FF9017', error:'#FA3434', info:'#0D6EFD' };
  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.style.cssText = 'position:fixed;bottom:30px;right:30px;background:' + (colors[type]||colors.success) + ';color:#fff;padding:14px 24px;border-radius:8px;font-size:14px;font-weight:500;z-index:99999;box-shadow:0 4px 20px rgba(0,0,0,0.2);animation:slideIn 0.3s ease;';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity 0.3s'; setTimeout(()=>toast.remove(), 300); }, 3000);
}

// Add animation style
const style = document.createElement('style');
style.textContent = '@keyframes slideIn{from{transform:translateX(100px);opacity:0}to{transform:translateX(0);opacity:1}} .wishlist-btn.liked svg{fill:#FA3434;stroke:#FA3434;}';
document.head.appendChild(style);

// ===== JOIN / LOGIN MODAL =====
document.addEventListener('click', function(e) {
  if (e.target.closest('.btn-join'))  { e.preventDefault(); showModal('register'); }
  if (e.target.closest('.btn-login')) { e.preventDefault(); showModal('login'); }
});

function showModal(type) {
  const ex = document.getElementById('authModal');
  if (ex) ex.remove();
  const modal = document.createElement('div');
  modal.id = 'authModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = '<div style="background:#fff;border-radius:12px;padding:36px;width:400px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.3);"><button onclick="document.getElementById(\'authModal\').remove()" style="position:absolute;top:14px;right:18px;background:none;border:none;font-size:22px;cursor:pointer;color:#888;">✕</button><div style="text-align:center;margin-bottom:24px;"><div style="width:50px;height:50px;background:#EBF0FF;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D6EFD" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h2 style="font-size:22px;font-weight:700;margin-bottom:4px;">' + (type==='login'?'Welcome Back!':'Create Account') + '</h2><p style="font-size:13px;color:#8B96A5;">' + (type==='login'?'Sign in to your account':'Join us and start shopping') + '</p></div>' + (type==='register'?'<input type="text" placeholder="Full Name" style="width:100%;border:1px solid #DEE2E7;border-radius:8px;padding:12px 16px;font-size:14px;outline:none;margin-bottom:12px;display:block;box-sizing:border-box;" onfocus="this.style.borderColor=\'#0D6EFD\'" onblur="this.style.borderColor=\'#DEE2E7\'"/>':'') + '<input type="email" placeholder="Email address" style="width:100%;border:1px solid #DEE2E7;border-radius:8px;padding:12px 16px;font-size:14px;outline:none;margin-bottom:12px;display:block;box-sizing:border-box;" onfocus="this.style.borderColor=\'#0D6EFD\'" onblur="this.style.borderColor=\'#DEE2E7\'"/><input type="password" placeholder="Password" style="width:100%;border:1px solid #DEE2E7;border-radius:8px;padding:12px 16px;font-size:14px;outline:none;margin-bottom:20px;display:block;box-sizing:border-box;" onfocus="this.style.borderColor=\'#0D6EFD\'" onblur="this.style.borderColor=\'#DEE2E7\'"/><button onclick="handleAuth(\'' + type + '\')" style="width:100%;background:#0D6EFD;color:#fff;border:none;border-radius:8px;padding:13px;font-size:15px;font-weight:600;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background=\'#0b5ed7\'" onmouseout="this.style.background=\'#0D6EFD\'">' + (type==='login'?'Sign In':'Create Account') + '</button><p style="text-align:center;font-size:13px;color:#8B96A5;margin-top:16px;">' + (type==='login'?"Don't have an account? <a href='#' onclick=\"document.getElementById('authModal').remove();showModal('register');return false;\" style='color:#0D6EFD;font-weight:600;'>Register</a>":"Already have an account? <a href='#' onclick=\"document.getElementById('authModal').remove();showModal('login');return false;\" style='color:#0D6EFD;font-weight:600;'>Sign in</a>") + '</p></div>';
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target===modal) modal.remove(); });
}

function handleAuth(type) {
  document.getElementById('authModal').remove();
  if (type==='login') {
    showToast(' Welcome back! You are logged in.', 'success');
  } else {
    showToast(' Account created! Welcome to Brand.', 'success');
  }
}

// ===== SEND INQUIRY =====
document.addEventListener('click', function(e) {
  if (e.target.closest('.btn-inquiry')) {
    const form = e.target.closest('.inquiry-form');
    const input = form ? form.querySelector('input[type="text"]') : null;
    if (input && input.value.trim()) {
      showToast(' Your inquiry has been sent to suppliers!', 'success');
      form.querySelectorAll('input, textarea').forEach(el => el.value = '');
    } else {
      showToast(' Please enter what item you need!', 'warning');
    }
  }
});

// ===== NEWSLETTER SUBSCRIBE =====
document.addEventListener('click', function(e) {
  if (e.target.closest('.newsletter-form button')) {
    const form = e.target.closest('.newsletter-form');
    const input = form ? form.querySelector('input[type="email"]') : null;
    if (input && input.value.trim() && input.value.includes('@')) {
      showToast(' Thank you for subscribing! Check your email.', 'success');
      input.value = '';
    } else {
      showToast('Please enter a valid email address!', 'warning');
    }
  }
});

// ===== SEND QUOTE BUTTON (products page) =====
document.addEventListener('click', function(e) {
  if (e.target.closest('.btn-send')) {
    showToast(' Inquiry sent to seller!', 'info');
  }
  if (e.target.closest('.btn-chat')) {
    showToast('👤 Opening seller profile...', 'info');
  }
});

// ===== WISHLIST =====
function toggleWishlist(btn) {
  btn.classList.toggle('liked');
  if (btn.classList.contains('liked')) {
    showToast(' Added to wishlist!', 'success');
  } else {
    showToast('Removed from wishlist.', 'warning');
  }
}

document.addEventListener('click', function(e) {
  const btn = e.target.closest('.wishlist-btn');
  if (btn) {
    btn.classList.toggle('liked');
    if (btn.classList.contains('liked')) {
      showToast(' Added to wishlist!', 'success');
    } else {
      showToast(' Removed from wishlist.', 'warning');
    }
  }
});

// ===== CATEGORY DROPDOWN =====
function toggleCategoryDropdown() {
  let dropdown = document.querySelector('.category-dropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.className = 'category-dropdown';
    dropdown.innerHTML = '<a href="products.html?cat=electronics">Electronics</a><a href="products.html?cat=fashion">Fashion & Clothing</a><a href="products.html?cat=beauty">Beauty & Health</a><a href="products.html?cat=home">Home & Kitchen</a><a href="products.html?cat=sports">Sports & Fitness</a><a href="products.html?cat=tools">Tools & Hardware</a>';
    document.querySelector('.navbar .inner').style.position = 'relative';
    document.querySelector('.navbar .inner').appendChild(dropdown);
  }
  dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.all-category') && !e.target.closest('.category-dropdown')) {
    const dropdown = document.querySelector('.category-dropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
});

// ===== PRODUCTS PAGE LOGIC =====
if (window.location.pathname.includes('products.html')) {
  const params = new URLSearchParams(window.location.search);
  const cat    = params.get('cat');
  const search = params.get('search');

  let filtered = allProducts;

  if (cat) {
    filtered = allProducts.filter(p => p.cat === cat);
    const titleEl = document.querySelector('.listing-toolbar p');
    if (titleEl) titleEl.innerHTML = '<strong>' + filtered.length + ' items</strong> in ' + (catTitles[cat]||cat);
    document.title = 'Brand – ' + (catTitles[cat]||cat);
    const bc = document.querySelector('.breadcrumb .inner span');
    if (bc) bc.textContent = catTitles[cat]||cat;
    const fh = document.querySelector('.filter-sidebar .filter-group h4');
    if (fh) fh.childNodes[0].textContent = catTitles[cat]||cat;
  }

  if (search) {
    const stored = sessionStorage.getItem('searchResults');
    if (stored) filtered = JSON.parse(stored);
    else filtered = allProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    const titleEl = document.querySelector('.listing-toolbar p');
    if (titleEl) titleEl.innerHTML = '<strong>' + filtered.length + ' results</strong> for "' + search + '"';
    document.title = 'Brand – Search: ' + search;
  }

  renderProducts(filtered);
}

function renderProducts(products) {
  const list = document.getElementById('productsList');
  if (!list) return;

  if (products.length === 0) {
    list.innerHTML = '<div style="padding:60px;text-align:center;color:#8B96A5;font-size:16px;grid-column:1/-1;">No products found.</div>';
    return;
  }

  list.innerHTML = products.map(p => '<div class="product-list-card"><div class="product-list-img"><img src="assets/images/' + p.img + '" alt="' + p.name + '" onerror="this.src=\'assets/images/banner.png\'"/></div><div class="product-list-info"><h3>' + p.name + '</h3><div class="rating"><span class="stars">★★★★</span>☆<span>154 orders</span></div><span class="badge-free">Free Shipping</span><p class="desc">' + (p.desc || 'High quality product. Fast delivery available. Trusted seller with 5 years experience.') + '</p><a href="product-details.html?id=' + p.id + '" class="view-link">View details</a></div><div class="product-list-price"><div><p class="price-main">' + p.price + '</p><p class="price-old">$' + (parseFloat(p.price.replace('$','')) * 1.2).toFixed(2) + '</p></div><button class="btn-send">Send inquiry</button><button class="btn-chat">Seller\'s profile</button><button class="wishlist-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button></div></div>').join('');
}

// ===== VIEW TOGGLE =====
function setView(type) {
  const list    = document.getElementById('productsList');
  const listBtn = document.getElementById('listViewBtn');
  const gridBtn = document.getElementById('gridViewBtn');
  if (!list) return;
  if (type==='grid') {
    list.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:16px;';
    gridBtn && gridBtn.classList.add('active');
    listBtn && listBtn.classList.remove('active');
  } else {
    list.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    listBtn && listBtn.classList.add('active');
    gridBtn && gridBtn.classList.remove('active');
  }
}

// ===== PAGINATION =====
document.querySelectorAll('.page-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.querySelector('svg')) return;
    document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    showToast(' Page ' + this.textContent + ' loaded', 'info');
  });
});

// ===== PRODUCT DETAILS PAGE LOAD =====
if (window.location.pathname.includes('product-details.html')) {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  if (productId) {
    loadProduct(productId);
  }
}

// ===== EXPORT ALL FUNCTIONS TO WINDOW (for onclick handlers) =====
window.updateCartCount = updateCartCount;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.changeImage = changeImage;
window.selectOption = selectOption;
window.changeQty = changeQty;
window.switchTab = switchTab;
window.loadProduct = loadProduct;
window.doSearch = doSearch;
window.showToast = showToast;
window.showModal = showModal;
window.handleAuth = handleAuth;
window.toggleWishlist = toggleWishlist;
window.toggleCategoryDropdown = toggleCategoryDropdown;
window.renderProducts = renderProducts;
window.setView = setView;