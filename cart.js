<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Koszyk — TinyHugs</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body data-page="cart">
<div id="nav-placeholder"></div>

<main class="cart-page">
  <h1>🧸 Twój koszyk</h1>
  <div id="cart-root"></div>
</main>

<footer class="footer-full">
  <div class="footer-bottom" style="max-width:980px;margin:0 auto;padding:1.2rem 2rem;">
    <span>&copy; 2025 <strong>TinyHugs</strong> — Wszystkie prawa zastrzeżone</span>
    <div class="footer-payments">
      <span class="pay-badge">VISA</span>
      <span class="pay-badge">Mastercard</span>
      <span class="pay-badge">BLIK</span>
      <span class="pay-badge">Przelew</span>
    </div>
  </div>
</footer>

<script src="i18n.js"></script>
<script src="nav.js"></script>
<script src="products.js"></script>
<script src="cart.js"></script>
<script>
// === KOSZYK INLINE — działa niezależnie od kolejności ładowania ===
const _KEY = "tinyhugs_cart";

function _getCart()  { return JSON.parse(localStorage.getItem(_KEY) || "[]"); }
function _saveCart(c){ localStorage.setItem(_KEY, JSON.stringify(c)); _updateBadge(); }
function _getTotal() {
  return _getCart().reduce((s,i) => {
    const p = _findProduct(i.id);
    return s + (p ? p.price * i.quantity : 0);
  }, 0);
}
function _getCount() { return _getCart().reduce((s,i) => s+i.quantity, 0); }
function _findProduct(id) {
  if (typeof products !== "undefined") return products.find(p => p.id === id) || null;
  return null;
}
function _removeItem(id) { _saveCart(_getCart().filter(i => i.id !== id)); }
function _updateQty(id, qty) {
  const c = _getCart();
  const item = c.find(i => i.id === id);
  if (item) { item.quantity = qty; _saveCart(c); }
}
function _updateBadge() {
  const b = document.getElementById("cart-badge");
  if (!b) return;
  const n = _getCount();
  b.textContent = n;
  b.style.display = n > 0 ? "flex" : "none";
}
function _price(plnPrice) {
  try { return formatPrice(plnPrice); } catch(e) { return plnPrice.toFixed(2) + " zł"; }
}

function renderCart() {
  const root = document.getElementById("cart-root");
  const cart = _getCart();

  if (cart.length === 0) {
    root.innerHTML = `
      <div class="empty-cart">
        <div class="emoji">🛒</div>
        <h2>Koszyk jest pusty</h2>
        <p>Dodaj misie lub ubranka, żeby zacząć zakupy.</p>
        <a href="index.html" class="btn-primary">🐻 Wróć do sklepu</a>
      </div>`;
    return;
  }

  const total   = _getTotal();
  const count   = _getCount();
  const freeAt  = 119;
  const isFree  = total >= freeAt;
  const ship    = isFree ? 0 : 14.99;
  const grand   = total + ship;
  const progress = Math.min(100, (total / freeAt) * 100);

  const itemsHTML = cart.map((item, idx) => {
    const p = _findProduct(item.id);
    if (!p) return "";
    const SVG = "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22100%22 height%3D%22100%22%3E%3Crect width%3D%22100%22 height%3D%22100%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2250%22%3E%F0%9F%A7%B8%3C/text%3E%3C/svg%3E";
    return `
      <div class="cart-item" style="animation-delay:${idx*0.07}s">
        <div class="cart-item-img">
          <img src="${p.image}" onerror="this.onerror=null;this.src='${SVG}'"/>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-variant"><span class="color-dot" style="background:${p.color}"></span> ${p.variant}</div>
          <div class="cart-item-price">${_price(p.price)} / szt.</div>
          <div class="cart-item-actions">
            <button class="qty-btn" data-act="minus" data-id="${p.id}">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-act="plus" data-id="${p.id}">+</button>
            <button class="remove-btn" data-act="remove" data-id="${p.id}">Usuń</button>
          </div>
        </div>
        <div style="font-weight:800;color:var(--brown);font-size:1.05rem;flex-shrink:0;">
          ${_price(p.price * item.quantity)}
        </div>
      </div>`;
  }).join("");

  root.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items">${itemsHTML}</div>
      <div class="cart-summary">
        <h2>Podsumowanie</h2>
        <div class="free-ship-bar">
          ${isFree
            ? `<span>🎉 Masz darmową dostawę!</span>`
            : `<span>Brakuje <strong>${_price(freeAt - total)}</strong> do darmowej dostawy (PL)</span>`}
          <div class="free-ship-progress">
            <div class="free-ship-fill" style="width:${progress}%"></div>
          </div>
        </div>
        <div class="summary-row"><span>Produkty (${count} szt.)</span><span>${_price(total)}</span></div>
        <div class="summary-row"><span>Dostawa</span><span>${isFree ? '<span style="color:#3a8a4a;font-weight:700;">Darmowa 🎉</span>' : _price(ship)}</span></div>
        <div class="summary-row total"><span>Razem</span><span>${_price(grand)}</span></div>
        <a href="checkout.html" class="checkout-btn">Przejdź do kasy →</a>
        <a href="index.html" class="continue-btn">← Kontynuuj zakupy</a>
      </div>
    </div>`;

  // Kliknięcia
  root.addEventListener("click", e => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const id  = btn.dataset.id;
    const act = btn.dataset.act;
    if (act === "remove") { _removeItem(id); renderCart(); return; }
    const cart2 = _getCart();
    const item  = cart2.find(i => i.id === id);
    if (!item) return;
    const newQty = item.quantity + (act === "plus" ? 1 : -1);
    if (newQty <= 0) { _removeItem(id); } else { _updateQty(id, newQty); }
    renderCart();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderNav === "function") renderNav("cart");
  renderCart();
  _updateBadge();
});
</script>
</body>
</html>
