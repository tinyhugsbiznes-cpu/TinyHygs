// =====================
//  nav.js
// =====================

function renderNav(activePage) {
  // Usuń stary nav jeśli istnieje
  document.querySelector("nav")?.remove();

  const lang = getLang();
  const pages  = ["misie","ubranka","zestawy","blog"];
  const keys   = ["nav_bears","nav_clothes","nav_sets","nav_blog"];
  const hrefs  = ["misie.html","ubranka.html","zestawy.html","blog.html"];

  const links = pages.map((p,i) => `
    <li><a href="${hrefs[i]}" ${activePage===p ? 'class="nav-active"' : ''}>${t(keys[i])}</a></li>
  `).join("");

  const langList = Object.entries(TRANSLATIONS).map(([code, l]) => `
    <li>
      <button class="lang-option ${currentLang===code ? 'lang-option-active' : ''}" onclick="setLang('${code}')">
        <span>${l.flag}</span> ${l.name}
      </button>
    </li>
  `).join("");

  const navHTML = `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Tiny<span>Hugs</span></a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <div class="lang-selector" id="lang-selector">
          <button class="lang-btn" onclick="toggleLangMenu()" id="lang-current">
            ${lang.flag} ${lang.name} <span class="lang-arrow">▾</span>
          </button>
          <div class="lang-dropdown" id="lang-dropdown">
            <ul>${langList}</ul>
          </div>
        </div>
        <a href="login.html" class="nav-icon-btn" title="${t('nav_login')}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </a>
        <a href="cart.html" class="cart-btn">
          🧸 ${t('cart')}
          <span id="cart-badge" style="display:none">0</span>
        </a>
      </div>
    </div>
  </nav>`;

  const placeholder = document.getElementById("nav-placeholder");
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navHTML);
  }

  updateCartIcon();
}

function toggleLangMenu() {
  document.getElementById("lang-dropdown")?.classList.toggle("open");
  document.getElementById("lang-selector")?.classList.toggle("open");
}

document.addEventListener("click", e => {
  const sel = document.getElementById("lang-selector");
  if (sel && !sel.contains(e.target)) {
    document.getElementById("lang-dropdown")?.classList.remove("open");
    sel.classList.remove("open");
  }
});
