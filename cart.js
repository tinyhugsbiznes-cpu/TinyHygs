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
renderNav("cart");

function renderCart() {
  const root = document.getElementById("cart-root");
  const cart = getCart();

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

  const total    = getCartTotal();
  const count    = getCartCount();
  const freeAt   = 119;
  const isFree   = total >= freeAt;
  const shipping = isFree ? 0 : 14.99;
  const grand    = total + shipping;
  const progress = Math.min(100, (total / freeAt) * 100);

  const itemsHTML = cart.map((item, idx) => {
    const p = getProductById(item.id);
    if (!p) return "";
    return `
      <div class="cart-item" style="animation-delay:${idx * 0.07}s">
        <div class="cart-item-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%23F2D5DF\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'40\'%3E🧸%3C/text%3E%3C/svg%3E'"/>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-variant">
            <span class="color-dot" style="background:${p.color}"></span> ${p.variant}
          </div>
          <div class="cart-item-price">${formatPrice(p.price)} / szt.</div>
          <div class="cart-item-actions">
            <button class="qty-btn" data-action="minus" data-id="${p.id}">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-action="plus" data-id="${p.id}">+</button>
            <button class="remove-btn" data-action="remove" data-id="${p.id}">Usuń</button>
          </div>
        </div>
        <div style="font-weight:800;color:var(--brown);font-size:1.05rem;flex-shrink:0;text-align:right;">
          ${formatPrice(p.price * item.quantity)}
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
            : `<span>Brakuje <strong>${formatPrice(freeAt - total)}</strong> do darmowej dostawy</span>`}
          <div class="free-ship-progress">
            <div class="free-ship-fill" style="width:${progress}%"></div>
          </div>
        </div>
        <div class="summary-row">
          <span>Produkty (${count} szt.)</span>
          <span>${formatPrice(total)}</span>
        </div>
        <div class="summary-row">
          <span>Dostawa</span>
          <span>${isFree ? '<span style="color:#3a8a4a;font-weight:700;">Darmowa 🎉</span>' : formatPrice(shipping)}</span>
        </div>
        <div class="summary-row total">
          <span>Razem</span>
          <span>${formatPrice(grand)}</span>
        </div>
        <a href="checkout.html" class="checkout-btn">Przejdź do kasy →</a>
        <a href="index.html" class="continue-btn">← Kontynuuj zakupy</a>
      </div>
    </div>`;

  // Event delegation
  document.getElementById("cart-root").addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const id  = btn.dataset.id;
    const act = btn.dataset.action;
    if (act === "minus")  changeQty(id, -1);
    if (act === "plus")   changeQty(id,  1);
    if (act === "remove") { removeFromCart(id); renderCart(); }
  });
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const newQty = item.quantity + delta;
  if (newQty <= 0) { removeFromCart(id); renderCart(); return; }
  updateQuantity(id, newQty);
  renderCart();
}

renderCart();
</script>
</body>
</html>
