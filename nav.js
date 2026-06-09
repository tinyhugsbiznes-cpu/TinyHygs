// =====================
//  NAWIGACJA - nav.js
//  Wstrzykuje nawigację na każdej stronie
// =====================

function renderNav(activePage) {
  const pages = ["misie","ubranka","zestawy","blog"];
  const keys  = ["nav_bears","nav_clothes","nav_sets","nav_blog"];
  const hrefs = ["misie.html","ubranka.html","zestawy.html","blog.html"];

  const links = pages.map((p,i) => `
    <li><a href="${hrefs[i]}" ${activePage===p?'class="nav-active"':''} data-i18n="${keys[i]}">${t(keys[i])}</a></li>
  `).join("");

  // Lista języków
  const langList = Object.entries(TRANSLATIONS).map(([code, lang]) => `
    <li><button class="lang-option ${currentLang===code?'lang-option-active':''}" onclick="setLang('${code}')">
      <span>${lang.flag}</span> ${lang.name}
    </button></li>
  `).join("");

  const lang = getLang();

  const html = `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Tiny<span>Hugs</span></a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <!-- Selektor języka -->
        <div class="lang-selector" id="lang-selector">
          <button class="lang-btn" onclick="toggleLangMenu()" id="lang-current">
            ${lang.flag} ${lang.name} <span class="lang-arrow">▾</span>
          </button>
          <div class="lang-dropdown" id="lang-dropdown">
            <ul>${langList}</ul>
          </div>
        </div>
        <!-- Logowanie -->
        <a href="login.html" class="nav-icon-btn" title="Zaloguj się">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </a>
        <!-- Koszyk -->
        <a href="cart.html" class="cart-btn">
          🧸 <span data-i18n="cart">${t('cart')}</span>
          <span id="cart-badge">0</span>
        </a>
      </div>
    </div>
  </nav>`;

  const placeholder = document.getElementById("nav-placeholder");
  if (placeholder) placeholder.outerHTML = html;
  else document.body.insertAdjacentHTML("afterbegin", html);
}

function toggleLangMenu() {
  const dropdown = document.getElementById("lang-dropdown");
  const selector = document.getElementById("lang-selector");
  dropdown.classList.toggle("open");
  selector.classList.toggle("open");
}

// Zamknij przy kliknięciu poza
document.addEventListener("click", e => {
  const selector = document.getElementById("lang-selector");
  if (selector && !selector.contains(e.target)) {
    document.getElementById("lang-dropdown")?.classList.remove("open");
    selector.classList.remove("open");
  }
});
