// =====================
//  KOSZYK - cart.js
// =====================

const CART_KEY = "tinyhugs_cart";

// Pobierz koszyk z localStorage
function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Zapisz koszyk do localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartIcon();
}

// Dodaj produkt do koszyka
function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  saveCart(cart);
  showCartToast(product.name + " " + product.variant);
}

// Usuń produkt z koszyka
function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

// Zmień ilość produktu
function updateQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    item.quantity = quantity;
    saveCart(cart);
  }
}

// Wyczyść koszyk
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartIcon();
}

// Policz łączną liczbę produktów
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

// Policz łączną cenę
function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const product = getProductById(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

// Aktualizuj ikonę koszyka w nawigacji
function updateCartIcon() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// Toast powiadomienie po dodaniu do koszyka
function showCartToast(name) {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = `🧸 ${name} dodano do koszyka!`;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

// Inicjalizacja przy załadowaniu strony
document.addEventListener("DOMContentLoaded", updateCartIcon);
