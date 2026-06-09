// =====================
//  TŁUMACZENIA - i18n.js
// =====================

const TRANSLATIONS = {
  pl: {
    name: "Polski", flag: "🇵🇱", currency: "PLN", symbol: "zł", rate: 1,
    nav_bears: "Misie", nav_clothes: "Ubranka", nav_sets: "Zestawy", nav_blog: "Blog",
    nav_login: "Zaloguj się", nav_register: "Zarejestruj",
    cart: "Koszyk", add: "+ Dodaj", all: "Wszystkie",
    free_shipping: "Darmowa dostawa od", products: "Nasze produkty",
    bear: "Miś", clothes: "Ubranko", set: "Zestaw",
    footer_rights: "Wszystkie prawa zastrzeżone",
    reviews_title: "Co mówią klienci?", reviews_sub: "Ponad 200 zadowolonych rodzin 🧸",
    blog_title: "Blog", blog_more: "Zobacz więcej →",
    trust_pay: "Bezpieczna płatność", trust_pay_sub: "Karta, BLIK, przelew",
    trust_ship: "Darmowa dostawa", trust_ship_sub: "Od 119 zł zamówienia",
    trust_return: "Łatwy zwrot", trust_return_sub: "14 dni bez podania przyczyny",
    trust_care: "Zadowolenie gwarantowane", trust_care_sub: "Zawsze po Twojej stronie",
    hero_title: "Małe misie,", hero_em: "wielkie uściski",
    hero_desc: "Pluszowe misie Tiny — miękkie, starannie wykonane, gotowe do przytulania.",
    hero_btn: "🐻 Zobacz misie",
    savings: "Zestaw to oszczędność 23 zł w porównaniu do zakupu osobno!",
    cart_empty: "Koszyk jest pusty", cart_empty_desc: "Dodaj misie lub ubranka, żeby zacząć zakupy.",
    back_shop: "← Wróć do sklepu", checkout_btn: "Przejdź do kasy →",
    continue: "← Kontynuuj zakupy", shipping: "Dostawa", free: "Darmowa 🎉",
    summary: "Podsumowanie", total: "Razem", products_label: "Produkty",
    missing_free: "Brakuje", missing_free2: "do darmowej dostawy",
  },
  en: {
    name: "English", flag: "🇬🇧", currency: "EUR", symbol: "€", rate: 0.23,
    nav_bears: "Bears", nav_clothes: "Outfits", nav_sets: "Sets", nav_blog: "Blog",
    nav_login: "Log in", nav_register: "Register",
    cart: "Cart", add: "+ Add", all: "All",
    free_shipping: "Free shipping from", products: "Our products",
    bear: "Bear", clothes: "Outfit", set: "Set",
    footer_rights: "All rights reserved",
    reviews_title: "What customers say?", reviews_sub: "Over 200 happy families 🧸",
    blog_title: "Blog", blog_more: "See more →",
    trust_pay: "Secure payment", trust_pay_sub: "Card, PayPal, transfer",
    trust_ship: "Free delivery", trust_ship_sub: "Orders over 27€",
    trust_return: "Easy returns", trust_return_sub: "14 days no questions asked",
    trust_care: "Satisfaction guaranteed", trust_care_sub: "Always on your side",
    hero_title: "Tiny bears,", hero_em: "big hugs",
    hero_desc: "Tiny plush bears — soft, carefully made, ready to cuddle.",
    hero_btn: "🐻 See bears",
    savings: "Bundle saves you €5 compared to buying separately!",
    cart_empty: "Your cart is empty", cart_empty_desc: "Add bears or outfits to start shopping.",
    back_shop: "← Back to shop", checkout_btn: "Proceed to checkout →",
    continue: "← Continue shopping", shipping: "Shipping", free: "Free 🎉",
    summary: "Summary", total: "Total", products_label: "Products",
    missing_free: "Missing", missing_free2: "for free shipping",
  },
  de: {
    name: "Deutsch", flag: "🇩🇪", currency: "EUR", symbol: "€", rate: 0.23,
    nav_bears: "Bären", nav_clothes: "Kleidung", nav_sets: "Sets", nav_blog: "Blog",
    nav_login: "Anmelden", nav_register: "Registrieren",
    cart: "Warenkorb", add: "+ Hinzufügen", all: "Alle",
    free_shipping: "Kostenloser Versand ab", products: "Unsere Produkte",
    bear: "Bär", clothes: "Kleidung", set: "Set",
    footer_rights: "Alle Rechte vorbehalten",
    reviews_title: "Was sagen Kunden?", reviews_sub: "Über 200 glückliche Familien 🧸",
    blog_title: "Blog", blog_more: "Mehr anzeigen →",
    trust_pay: "Sichere Zahlung", trust_pay_sub: "Karte, PayPal, Überweisung",
    trust_ship: "Kostenloser Versand", trust_ship_sub: "Ab 27€ Bestellwert",
    trust_return: "Einfache Rückgabe", trust_return_sub: "14 Tage ohne Angabe von Gründen",
    trust_care: "Zufriedenheit garantiert", trust_care_sub: "Immer auf Ihrer Seite",
    hero_title: "Kleine Bären,", hero_em: "große Umarmungen",
    hero_desc: "Tiny Plüschbären — weich, sorgfältig gefertigt, bereit zum Kuscheln.",
    hero_btn: "🐻 Bären ansehen",
    savings: "Set spart Ihnen 5€ gegenüber Einzelkauf!",
    cart_empty: "Ihr Warenkorb ist leer", cart_empty_desc: "Fügen Sie Bären oder Kleidung hinzu.",
    back_shop: "← Zurück zum Shop", checkout_btn: "Zur Kasse →",
    continue: "← Weiter einkaufen", shipping: "Versand", free: "Kostenlos 🎉",
    summary: "Zusammenfassung", total: "Gesamt", products_label: "Produkte",
    missing_free: "Noch", missing_free2: "bis zum kostenlosen Versand",
  },
  fr: {
    name: "Français", flag: "🇫🇷", currency: "EUR", symbol: "€", rate: 0.23,
    nav_bears: "Oursons", nav_clothes: "Vêtements", nav_sets: "Coffrets", nav_blog: "Blog",
    nav_login: "Connexion", nav_register: "S'inscrire",
    cart: "Panier", add: "+ Ajouter", all: "Tout",
    free_shipping: "Livraison gratuite dès", products: "Nos produits",
    bear: "Ourson", clothes: "Vêtement", set: "Coffret",
    footer_rights: "Tous droits réservés",
    reviews_title: "Avis clients", reviews_sub: "Plus de 200 familles satisfaites 🧸",
    blog_title: "Blog", blog_more: "Voir plus →",
    trust_pay: "Paiement sécurisé", trust_pay_sub: "Carte, PayPal, virement",
    trust_ship: "Livraison gratuite", trust_ship_sub: "Dès 27€ de commande",
    trust_return: "Retour facile", trust_return_sub: "14 jours sans raison",
    trust_care: "Satisfaction garantie", trust_care_sub: "Toujours de votre côté",
    hero_title: "Petits oursons,", hero_em: "grands câlins",
    hero_desc: "Oursons peluche Tiny — doux, soigneusement fabriqués, prêts à câliner.",
    hero_btn: "🐻 Voir les oursons",
    savings: "Le coffret vous fait économiser 5€ !",
    cart_empty: "Votre panier est vide", cart_empty_desc: "Ajoutez des oursons ou vêtements.",
    back_shop: "← Retour à la boutique", checkout_btn: "Passer commande →",
    continue: "← Continuer les achats", shipping: "Livraison", free: "Gratuite 🎉",
    summary: "Récapitulatif", total: "Total", products_label: "Produits",
    missing_free: "Il manque", missing_free2: "pour la livraison gratuite",
  },
  es: {
    name: "Español", flag: "🇪🇸", currency: "EUR", symbol: "€", rate: 0.23,
    nav_bears: "Ositos", nav_clothes: "Ropa", nav_sets: "Conjuntos", nav_blog: "Blog",
    nav_login: "Iniciar sesión", nav_register: "Registrarse",
    cart: "Carrito", add: "+ Añadir", all: "Todo",
    free_shipping: "Envío gratis desde", products: "Nuestros productos",
    bear: "Osito", clothes: "Ropa", set: "Conjunto",
    footer_rights: "Todos los derechos reservados",
    reviews_title: "¿Qué dicen los clientes?", reviews_sub: "Más de 200 familias felices 🧸",
    blog_title: "Blog", blog_more: "Ver más →",
    trust_pay: "Pago seguro", trust_pay_sub: "Tarjeta, PayPal, transferencia",
    trust_ship: "Envío gratuito", trust_ship_sub: "Pedidos desde 27€",
    trust_return: "Devolución fácil", trust_return_sub: "14 días sin motivo",
    trust_care: "Satisfacción garantizada", trust_care_sub: "Siempre de tu lado",
    hero_title: "Pequeños ositos,", hero_em: "grandes abrazos",
    hero_desc: "Ositos de peluche Tiny — suaves, cuidadosamente hechos, listos para abrazar.",
    hero_btn: "🐻 Ver ositos",
    savings: "¡El conjunto te ahorra 5€!",
    cart_empty: "Tu carrito está vacío", cart_empty_desc: "Añade ositos o ropa para empezar.",
    back_shop: "← Volver a la tienda", checkout_btn: "Ir a pagar →",
    continue: "← Seguir comprando", shipping: "Envío", free: "Gratis 🎉",
    summary: "Resumen", total: "Total", products_label: "Productos",
    missing_free: "Faltan", missing_free2: "para envío gratis",
  },
  it: {
    name: "Italiano", flag: "🇮🇹", currency: "EUR", symbol: "€", rate: 0.23,
    nav_bears: "Orsetti", nav_clothes: "Vestiti", nav_sets: "Set", nav_blog: "Blog",
    nav_login: "Accedi", nav_register: "Registrati",
    cart: "Carrello", add: "+ Aggiungi", all: "Tutto",
    free_shipping: "Spedizione gratuita da", products: "I nostri prodotti",
    bear: "Orsetto", clothes: "Vestito", set: "Set",
    footer_rights: "Tutti i diritti riservati",
    reviews_title: "Cosa dicono i clienti?", reviews_sub: "Oltre 200 famiglie felici 🧸",
    blog_title: "Blog", blog_more: "Vedi altro →",
    trust_pay: "Pagamento sicuro", trust_pay_sub: "Carta, PayPal, bonifico",
    trust_ship: "Spedizione gratuita", trust_ship_sub: "Ordini da 27€",
    trust_return: "Reso facile", trust_return_sub: "14 giorni senza motivo",
    trust_care: "Soddisfazione garantita", trust_care_sub: "Sempre dalla tua parte",
    hero_title: "Piccoli orsetti,", hero_em: "grandi abbracci",
    hero_desc: "Orsetti peluche Tiny — morbidi, realizzati con cura, pronti per coccolare.",
    hero_btn: "🐻 Vedi orsetti",
    savings: "Il set ti fa risparmiare 5€!",
    cart_empty: "Il tuo carrello è vuoto", cart_empty_desc: "Aggiungi orsetti o vestiti.",
    back_shop: "← Torna al negozio", checkout_btn: "Vai alla cassa →",
    continue: "← Continua gli acquisti", shipping: "Spedizione", free: "Gratuita 🎉",
    summary: "Riepilogo", total: "Totale", products_label: "Prodotti",
    missing_free: "Mancano", missing_free2: "per la spedizione gratuita",
  },
  nl: { name: "Nederlands", flag: "🇳🇱", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "Beren", nav_clothes: "Kleding", nav_sets: "Sets", nav_blog: "Blog", nav_login: "Inloggen", nav_register: "Registreren", cart: "Winkelwagen", add: "+ Toevoegen", all: "Alle", free_shipping: "Gratis verzending vanaf", products: "Onze producten", bear: "Beer", clothes: "Kleding", set: "Set", footer_rights: "Alle rechten voorbehouden", reviews_title: "Wat zeggen klanten?", reviews_sub: "Meer dan 200 blije gezinnen 🧸", blog_title: "Blog", blog_more: "Meer zien →", trust_pay: "Veilig betalen", trust_pay_sub: "Kaart, PayPal, overboeking", trust_ship: "Gratis verzending", trust_ship_sub: "Bestellingen vanaf 27€", trust_return: "Eenvoudig retourneren", trust_return_sub: "14 dagen zonder reden", trust_care: "Tevredenheid gegarandeerd", trust_care_sub: "Altijd aan uw kant", hero_title: "Kleine beertjes,", hero_em: "grote knuffels", hero_desc: "Tiny knuffelbeertjes — zacht, zorgvuldig gemaakt, klaar om te knuffelen.", hero_btn: "🐻 Bekijk beren", savings: "Set bespaart u 5€!", cart_empty: "Uw winkelwagen is leeg", cart_empty_desc: "Voeg beren of kleding toe.", back_shop: "← Terug naar winkel", checkout_btn: "Naar kassa →", continue: "← Verder winkelen", shipping: "Verzending", free: "Gratis 🎉", summary: "Samenvatting", total: "Totaal", products_label: "Producten", missing_free: "Nog", missing_free2: "voor gratis verzending" },
  pt: { name: "Português", flag: "🇵🇹", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "Ursinhos", nav_clothes: "Roupas", nav_sets: "Conjuntos", nav_blog: "Blog", nav_login: "Entrar", nav_register: "Registar", cart: "Carrinho", add: "+ Adicionar", all: "Tudo", free_shipping: "Envio grátis a partir de", products: "Os nossos produtos", bear: "Ursinho", clothes: "Roupa", set: "Conjunto", footer_rights: "Todos os direitos reservados", reviews_title: "O que dizem os clientes?", reviews_sub: "Mais de 200 famílias felizes 🧸", blog_title: "Blog", blog_more: "Ver mais →", trust_pay: "Pagamento seguro", trust_pay_sub: "Cartão, PayPal, transferência", trust_ship: "Envio grátis", trust_ship_sub: "Encomendas a partir de 27€", trust_return: "Devolução fácil", trust_return_sub: "14 dias sem motivo", trust_care: "Satisfação garantida", trust_care_sub: "Sempre do seu lado", hero_title: "Pequenos ursinhos,", hero_em: "grandes abraços", hero_desc: "Ursinhos de pelúcia Tiny — macios, cuidadosamente feitos, prontos para abraçar.", hero_btn: "🐻 Ver ursinhos", savings: "O conjunto poupa-lhe 5€!", cart_empty: "O seu carrinho está vazio", cart_empty_desc: "Adicione ursinhos ou roupas.", back_shop: "← Voltar à loja", checkout_btn: "Finalizar compra →", continue: "← Continuar a comprar", shipping: "Envio", free: "Grátis 🎉", summary: "Resumo", total: "Total", products_label: "Produtos", missing_free: "Faltam", missing_free2: "para envio grátis" },
  sv: { name: "Svenska", flag: "🇸🇪", currency: "SEK", symbol: "kr", rate: 2.6, nav_bears: "Björnar", nav_clothes: "Kläder", nav_sets: "Set", nav_blog: "Blogg", nav_login: "Logga in", nav_register: "Registrera", cart: "Varukorg", add: "+ Lägg till", all: "Alla", free_shipping: "Fri frakt från", products: "Våra produkter", bear: "Björn", clothes: "Kläder", set: "Set", footer_rights: "Alla rättigheter förbehållna", reviews_title: "Vad säger kunderna?", reviews_sub: "Över 200 nöjda familjer 🧸", blog_title: "Blogg", blog_more: "Se mer →", trust_pay: "Säker betalning", trust_pay_sub: "Kort, PayPal, överföring", trust_ship: "Fri frakt", trust_ship_sub: "Beställningar från 70kr", trust_return: "Enkel retur", trust_return_sub: "14 dagar utan anledning", trust_care: "Nöjdhet garanterad", trust_care_sub: "Alltid på din sida", hero_title: "Små björnar,", hero_em: "stora kramar", hero_desc: "Tiny plyschbjörnar — mjuka, omsorgsfullt gjorda, redo att krama.", hero_btn: "🐻 Se björnar", savings: "Setet sparar dig 13kr!", cart_empty: "Din varukorg är tom", cart_empty_desc: "Lägg till björnar eller kläder.", back_shop: "← Tillbaka till butiken", checkout_btn: "Till kassan →", continue: "← Fortsätt handla", shipping: "Frakt", free: "Gratis 🎉", summary: "Sammanfattning", total: "Totalt", products_label: "Produkter", missing_free: "Saknar", missing_free2: "för fri frakt" },
  no: { name: "Norsk", flag: "🇳🇴", currency: "NOK", symbol: "kr", rate: 2.7, nav_bears: "Bjørner", nav_clothes: "Klær", nav_sets: "Sett", nav_blog: "Blogg", nav_login: "Logg inn", nav_register: "Registrer", cart: "Handlekurv", add: "+ Legg til", all: "Alle", free_shipping: "Gratis frakt fra", products: "Våre produkter", bear: "Bjørn", clothes: "Klær", set: "Sett", footer_rights: "Alle rettigheter forbeholdt", reviews_title: "Hva sier kundene?", reviews_sub: "Over 200 fornøyde familier 🧸", blog_title: "Blogg", blog_more: "Se mer →", trust_pay: "Sikker betaling", trust_pay_sub: "Kort, PayPal, overføring", trust_ship: "Gratis frakt", trust_ship_sub: "Bestillinger fra 70kr", trust_return: "Enkel retur", trust_return_sub: "14 dager uten grunn", trust_care: "Tilfredshet garantert", trust_care_sub: "Alltid på din side", hero_title: "Små bjørner,", hero_em: "store klemmer", hero_desc: "Tiny plysj bjørner — myke, omhyggelig laget, klare for å klemme.", hero_btn: "🐻 Se bjørner", savings: "Settet sparer deg 13kr!", cart_empty: "Handlekurven din er tom", cart_empty_desc: "Legg til bjørner eller klær.", back_shop: "← Tilbake til butikken", checkout_btn: "Til kassen →", continue: "← Fortsett å handle", shipping: "Frakt", free: "Gratis 🎉", summary: "Sammendrag", total: "Totalt", products_label: "Produkter", missing_free: "Mangler", missing_free2: "for gratis frakt" },
  da: { name: "Dansk", flag: "🇩🇰", currency: "DKK", symbol: "kr", rate: 1.72, nav_bears: "Bjørne", nav_clothes: "Tøj", nav_sets: "Sæt", nav_blog: "Blog", nav_login: "Log ind", nav_register: "Registrer", cart: "Kurv", add: "+ Tilføj", all: "Alle", free_shipping: "Gratis fragt fra", products: "Vores produkter", bear: "Bjørn", clothes: "Tøj", set: "Sæt", footer_rights: "Alle rettigheder forbeholdt", reviews_title: "Hvad siger kunderne?", reviews_sub: "Over 200 glade familier 🧸", blog_title: "Blog", blog_more: "Se mere →", trust_pay: "Sikker betaling", trust_pay_sub: "Kort, PayPal, overførsel", trust_ship: "Gratis fragt", trust_ship_sub: "Bestillinger fra 45kr", trust_return: "Nem returnering", trust_return_sub: "14 dage uden grund", trust_care: "Tilfredshed garanteret", trust_care_sub: "Altid på din side", hero_title: "Små bjørne,", hero_em: "store kram", hero_desc: "Tiny plys bjørne — bløde, omhyggeligt lavet, klar til at kramme.", hero_btn: "🐻 Se bjørne", savings: "Sættet sparer dig 9kr!", cart_empty: "Din kurv er tom", cart_empty_desc: "Tilføj bjørne eller tøj.", back_shop: "← Tilbage til butikken", checkout_btn: "Til kassen →", continue: "← Fortsæt med at handle", shipping: "Fragt", free: "Gratis 🎉", summary: "Oversigt", total: "I alt", products_label: "Produkter", missing_free: "Mangler", missing_free2: "for gratis fragt" },
  fi: { name: "Suomi", flag: "🇫🇮", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "Karhut", nav_clothes: "Vaatteet", nav_sets: "Sarjat", nav_blog: "Blogi", nav_login: "Kirjaudu", nav_register: "Rekisteröidy", cart: "Ostoskori", add: "+ Lisää", all: "Kaikki", free_shipping: "Ilmainen toimitus alkaen", products: "Tuotteemme", bear: "Karhu", clothes: "Vaate", set: "Sarja", footer_rights: "Kaikki oikeudet pidätetään", reviews_title: "Mitä asiakkaat sanovat?", reviews_sub: "Yli 200 tyytyväistä perhettä 🧸", blog_title: "Blogi", blog_more: "Näytä lisää →", trust_pay: "Turvallinen maksu", trust_pay_sub: "Kortti, PayPal, siirto", trust_ship: "Ilmainen toimitus", trust_ship_sub: "Tilaukset alkaen 27€", trust_return: "Helppo palautus", trust_return_sub: "14 päivää ilman syytä", trust_care: "Tyytyväisyys taattu", trust_care_sub: "Aina puolellasi", hero_title: "Pienet karhut,", hero_em: "isot halaukset", hero_desc: "Tiny pehmokarhut — pehmeät, huolellisesti valmistetut, valmiit halaamaan.", hero_btn: "🐻 Katso karhut", savings: "Sarja säästää sinulle 5€!", cart_empty: "Ostoskorisi on tyhjä", cart_empty_desc: "Lisää karhuja tai vaatteita.", back_shop: "← Takaisin kauppaan", checkout_btn: "Kassalle →", continue: "← Jatka ostoksia", shipping: "Toimitus", free: "Ilmainen 🎉", summary: "Yhteenveto", total: "Yhteensä", products_label: "Tuotteet", missing_free: "Puuttuu", missing_free2: "ilmaiseen toimitukseen" },
  cs: { name: "Čeština", flag: "🇨🇿", currency: "CZK", symbol: "Kč", rate: 5.7, nav_bears: "Medvídci", nav_clothes: "Oblečení", nav_sets: "Sety", nav_blog: "Blog", nav_login: "Přihlásit se", nav_register: "Registrovat se", cart: "Košík", add: "+ Přidat", all: "Vše", free_shipping: "Doprava zdarma od", products: "Naše produkty", bear: "Medvídek", clothes: "Oblečení", set: "Set", footer_rights: "Všechna práva vyhrazena", reviews_title: "Co říkají zákazníci?", reviews_sub: "Přes 200 spokojených rodin 🧸", blog_title: "Blog", blog_more: "Zobrazit více →", trust_pay: "Bezpečná platba", trust_pay_sub: "Karta, PayPal, převod", trust_ship: "Doprava zdarma", trust_ship_sub: "Objednávky od 150Kč", trust_return: "Snadné vrácení", trust_return_sub: "14 dní bez udání důvodu", trust_care: "Spokojenost zaručena", trust_care_sub: "Vždy na vaší straně", hero_title: "Malí medvídci,", hero_em: "velká objetí", hero_desc: "Plyšoví medvídci Tiny — měkcí, pečlivě vyrobení, připraveni k mazlení.", hero_btn: "🐻 Zobrazit medvídky", savings: "Set vás ušetří 30Kč!", cart_empty: "Váš košík je prázdný", cart_empty_desc: "Přidejte medvídky nebo oblečení.", back_shop: "← Zpět do obchodu", checkout_btn: "Pokračovat k pokladně →", continue: "← Pokračovat v nákupu", shipping: "Doprava", free: "Zdarma 🎉", summary: "Přehled", total: "Celkem", products_label: "Produkty", missing_free: "Chybí", missing_free2: "do dopravy zdarma" },
  sk: { name: "Slovenčina", flag: "🇸🇰", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "Medvedíky", nav_clothes: "Oblečenie", nav_sets: "Sety", nav_blog: "Blog", nav_login: "Prihlásiť sa", nav_register: "Registrovať sa", cart: "Košík", add: "+ Pridať", all: "Všetko", free_shipping: "Doprava zdarma od", products: "Naše produkty", bear: "Medvedík", clothes: "Oblečenie", set: "Set", footer_rights: "Všetky práva vyhradené", reviews_title: "Čo hovoria zákazníci?", reviews_sub: "Viac ako 200 spokojných rodín 🧸", blog_title: "Blog", blog_more: "Zobraziť viac →", trust_pay: "Bezpečná platba", trust_pay_sub: "Karta, PayPal, prevod", trust_ship: "Doprava zdarma", trust_ship_sub: "Objednávky od 27€", trust_return: "Jednoduché vrátenie", trust_return_sub: "14 dní bez udania dôvodu", trust_care: "Spokojnosť zaručená", trust_care_sub: "Vždy na vašej strane", hero_title: "Malé medvedíky,", hero_em: "veľké objatia", hero_desc: "Plyšové medvedíky Tiny — mäkké, starostlivo vyrobené, pripravené na maznanie.", hero_btn: "🐻 Zobraziť medvedíky", savings: "Set vás ušetrí 5€!", cart_empty: "Váš košík je prázdny", cart_empty_desc: "Pridajte medvedíky alebo oblečenie.", back_shop: "← Späť do obchodu", checkout_btn: "Pokračovať k pokladni →", continue: "← Pokračovať v nákupe", shipping: "Doprava", free: "Zdarma 🎉", summary: "Prehľad", total: "Celkom", products_label: "Produkty", missing_free: "Chýba", missing_free2: "do dopravy zdarma" },
  hu: { name: "Magyar", flag: "🇭🇺", currency: "HUF", symbol: "Ft", rate: 90, nav_bears: "Mackók", nav_clothes: "Ruhák", nav_sets: "Szettek", nav_blog: "Blog", nav_login: "Bejelentkezés", nav_register: "Regisztráció", cart: "Kosár", add: "+ Hozzáad", all: "Összes", free_shipping: "Ingyenes szállítás", products: "Termékeink", bear: "Mackó", clothes: "Ruha", set: "Szett", footer_rights: "Minden jog fenntartva", reviews_title: "Mit mondanak a vásárlók?", reviews_sub: "Több mint 200 elégedett család 🧸", blog_title: "Blog", blog_more: "Tovább →", trust_pay: "Biztonságos fizetés", trust_pay_sub: "Kártya, PayPal, átutalás", trust_ship: "Ingyenes szállítás", trust_ship_sub: "2500Ft feletti rendeléseknél", trust_return: "Könnyű visszáru", trust_return_sub: "14 nap indok nélkül", trust_care: "Elégedettség garantálva", trust_care_sub: "Mindig az Ön oldalán", hero_title: "Kis mackók,", hero_em: "nagy ölelések", hero_desc: "Tiny plüss mackók — puha, gondosan készített, kész ölelésre.", hero_btn: "🐻 Mackók megtekintése", savings: "A szett 450Ft megtakarítást jelent!", cart_empty: "A kosara üres", cart_empty_desc: "Adjon hozzá mackókat vagy ruhákat.", back_shop: "← Vissza az üzletbe", checkout_btn: "Tovább a pénztárhoz →", continue: "← Vásárlás folytatása", shipping: "Szállítás", free: "Ingyenes 🎉", summary: "Összefoglalás", total: "Összesen", products_label: "Termékek", missing_free: "Hiányzik", missing_free2: "az ingyenes szállításhoz" },
  ro: { name: "Română", flag: "🇷🇴", currency: "RON", symbol: "lei", rate: 1.15, nav_bears: "Urși", nav_clothes: "Haine", nav_sets: "Seturi", nav_blog: "Blog", nav_login: "Autentificare", nav_register: "Înregistrare", cart: "Coș", add: "+ Adaugă", all: "Toate", free_shipping: "Livrare gratuită de la", products: "Produsele noastre", bear: "Urs", clothes: "Haină", set: "Set", footer_rights: "Toate drepturile rezervate", reviews_title: "Ce spun clienții?", reviews_sub: "Peste 200 de familii fericite 🧸", blog_title: "Blog", blog_more: "Vezi mai mult →", trust_pay: "Plată sigură", trust_pay_sub: "Card, PayPal, transfer", trust_ship: "Livrare gratuită", trust_ship_sub: "Comenzi de la 27€", trust_return: "Returnare ușoară", trust_return_sub: "14 zile fără motiv", trust_care: "Satisfacție garantată", trust_care_sub: "Mereu de partea ta", hero_title: "Urși mici,", hero_em: "îmbrățișări mari", hero_desc: "Urși de pluș Tiny — moi, fabricați cu grijă, gata de îmbrățișat.", hero_btn: "🐻 Vezi urșii", savings: "Setul îți economisește 5€!", cart_empty: "Coșul tău este gol", cart_empty_desc: "Adaugă urși sau haine.", back_shop: "← Înapoi la magazin", checkout_btn: "Mergi la casă →", continue: "← Continuă cumpărăturile", shipping: "Livrare", free: "Gratuită 🎉", summary: "Rezumat", total: "Total", products_label: "Produse", missing_free: "Lipsesc", missing_free2: "pentru livrare gratuită" },
  uk: { name: "Українська", flag: "🇺🇦", currency: "PLN", symbol: "zł", rate: 1, nav_bears: "Ведмедики", nav_clothes: "Одяг", nav_sets: "Набори", nav_blog: "Блог", nav_login: "Увійти", nav_register: "Зареєструватися", cart: "Кошик", add: "+ Додати", all: "Все", free_shipping: "Безкоштовна доставка від", products: "Наші продукти", bear: "Ведмедик", clothes: "Одяг", set: "Набір", footer_rights: "Всі права захищені", reviews_title: "Що кажуть клієнти?", reviews_sub: "Понад 200 щасливих сімей 🧸", blog_title: "Блог", blog_more: "Побачити більше →", trust_pay: "Безпечна оплата", trust_pay_sub: "Картка, BLIK, переказ", trust_ship: "Безкоштовна доставка", trust_ship_sub: "Від 119 zł замовлення", trust_return: "Легке повернення", trust_return_sub: "14 днів без причини", trust_care: "Задоволення гарантовано", trust_care_sub: "Завжди на вашому боці", hero_title: "Маленькі ведмедики,", hero_em: "великі обійми", hero_desc: "Плюшеві ведмедики Tiny — м'які, ретельно виготовлені, готові до обіймів.", hero_btn: "🐻 Подивитися ведмедиків", savings: "Набір економить вам 23 zł!", cart_empty: "Ваш кошик порожній", cart_empty_desc: "Додайте ведмедиків або одяг.", back_shop: "← Повернутися до магазину", checkout_btn: "Перейти до каси →", continue: "← Продовжити покупки", shipping: "Доставка", free: "Безкоштовна 🎉", summary: "Підсумок", total: "Разом", products_label: "Товари", missing_free: "Не вистачає", missing_free2: "до безкоштовної доставки" },
  ru: { name: "Русский", flag: "🇷🇺", currency: "PLN", symbol: "zł", rate: 1, nav_bears: "Медвежата", nav_clothes: "Одежда", nav_sets: "Наборы", nav_blog: "Блог", nav_login: "Войти", nav_register: "Зарегистрироваться", cart: "Корзина", add: "+ Добавить", all: "Все", free_shipping: "Бесплатная доставка от", products: "Наши продукты", bear: "Медвежонок", clothes: "Одежда", set: "Набор", footer_rights: "Все права защищены", reviews_title: "Что говорят клиенты?", reviews_sub: "Более 200 счастливых семей 🧸", blog_title: "Блог", blog_more: "Смотреть больше →", trust_pay: "Безопасная оплата", trust_pay_sub: "Карта, BLIK, перевод", trust_ship: "Бесплатная доставка", trust_ship_sub: "От 119 zł заказа", trust_return: "Лёгкий возврат", trust_return_sub: "14 дней без причины", trust_care: "Удовлетворённость гарантирована", trust_care_sub: "Всегда на вашей стороне", hero_title: "Маленькие медвежата,", hero_em: "большие объятия", hero_desc: "Плюшевые медвежата Tiny — мягкие, тщательно сделанные, готовые к объятиям.", hero_btn: "🐻 Смотреть медвежат", savings: "Набор экономит вам 23 zł!", cart_empty: "Ваша корзина пуста", cart_empty_desc: "Добавьте медвежат или одежду.", back_shop: "← Вернуться в магазин", checkout_btn: "Перейти к оплате →", continue: "← Продолжить покупки", shipping: "Доставка", free: "Бесплатно 🎉", summary: "Итог", total: "Итого", products_label: "Товары", missing_free: "Не хватает", missing_free2: "до бесплатной доставки" },
  zh: { name: "中文", flag: "🇨🇳", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "玩偶熊", nav_clothes: "服装", nav_sets: "套装", nav_blog: "博客", nav_login: "登录", nav_register: "注册", cart: "购物车", add: "+ 添加", all: "全部", free_shipping: "满额免运费", products: "我们的产品", bear: "玩偶熊", clothes: "服装", set: "套装", footer_rights: "版权所有", reviews_title: "顾客评价", reviews_sub: "超过200个幸福家庭 🧸", blog_title: "博客", blog_more: "查看更多 →", trust_pay: "安全支付", trust_pay_sub: "银行卡、PayPal、转账", trust_ship: "免费配送", trust_ship_sub: "订单满27€", trust_return: "轻松退货", trust_return_sub: "14天无理由退货", trust_care: "满意度保证", trust_care_sub: "始终站在您这边", hero_title: "小小玩偶熊，", hero_em: "大大拥抱", hero_desc: "Tiny毛绒玩偶熊——柔软、精心制作、随时准备拥抱。", hero_btn: "🐻 查看玩偶熊", savings: "套装为您节省5€！", cart_empty: "您的购物车为空", cart_empty_desc: "添加玩偶熊或服装开始购物。", back_shop: "← 返回商店", checkout_btn: "前往结账 →", continue: "← 继续购物", shipping: "配送", free: "免费 🎉", summary: "摘要", total: "合计", products_label: "产品", missing_free: "还差", missing_free2: "可享免费配送" },
  ja: { name: "日本語", flag: "🇯🇵", currency: "JPY", symbol: "¥", rate: 37, nav_bears: "クマ", nav_clothes: "服", nav_sets: "セット", nav_blog: "ブログ", nav_login: "ログイン", nav_register: "登録", cart: "カート", add: "+ 追加", all: "全て", free_shipping: "送料無料（以上）", products: "商品一覧", bear: "クマ", clothes: "服", set: "セット", footer_rights: "全著作権所有", reviews_title: "お客様の声", reviews_sub: "200以上の幸せな家族 🧸", blog_title: "ブログ", blog_more: "もっと見る →", trust_pay: "安全な支払い", trust_pay_sub: "カード、PayPal、振込", trust_ship: "送料無料", trust_ship_sub: "1000円以上のご注文", trust_return: "簡単返品", trust_return_sub: "14日間理由不問", trust_care: "満足保証", trust_care_sub: "いつもあなたの味方", hero_title: "小さなクマ、", hero_em: "大きなハグ", hero_desc: "Tinyぬいぐるみクマ — やわらかく、丁寧に作られ、ハグの準備ができています。", hero_btn: "🐻 クマを見る", savings: "セットで185円お得！", cart_empty: "カートは空です", cart_empty_desc: "クマや服を追加してショッピングを始めましょう。", back_shop: "← ショップに戻る", checkout_btn: "レジへ進む →", continue: "← 買い物を続ける", shipping: "送料", free: "無料 🎉", summary: "注文内容", total: "合計", products_label: "商品", missing_free: "あと", missing_free2: "で送料無料" },
  ko: { name: "한국어", flag: "🇰🇷", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "곰인형", nav_clothes: "옷", nav_sets: "세트", nav_blog: "블로그", nav_login: "로그인", nav_register: "회원가입", cart: "장바구니", add: "+ 추가", all: "전체", free_shipping: "무료 배송 기준", products: "우리 제품", bear: "곰인형", clothes: "옷", set: "세트", footer_rights: "모든 권리 보유", reviews_title: "고객 후기", reviews_sub: "200개 이상의 행복한 가족 🧸", blog_title: "블로그", blog_more: "더 보기 →", trust_pay: "안전한 결제", trust_pay_sub: "카드, PayPal, 이체", trust_ship: "무료 배송", trust_ship_sub: "27€ 이상 주문", trust_return: "간편 반품", trust_return_sub: "14일 무조건 반품", trust_care: "만족 보장", trust_care_sub: "항상 고객 편에서", hero_title: "작은 곰인형,", hero_em: "큰 포옹", hero_desc: "Tiny 봉제 곰인형 — 부드럽고, 정성껏 만들어진, 포옹할 준비 완료.", hero_btn: "🐻 곰인형 보기", savings: "세트로 5€ 절약!", cart_empty: "장바구니가 비어 있습니다", cart_empty_desc: "곰인형이나 옷을 추가하여 쇼핑을 시작하세요.", back_shop: "← 상점으로 돌아가기", checkout_btn: "결제하러 가기 →", continue: "← 쇼핑 계속하기", shipping: "배송", free: "무료 🎉", summary: "주문 요약", total: "합계", products_label: "상품", missing_free: "무료 배송까지", missing_free2: "남음" },
  ar: { name: "العربية", flag: "🇸🇦", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "الدببة", nav_clothes: "الملابس", nav_sets: "المجموعات", nav_blog: "المدونة", nav_login: "تسجيل الدخول", nav_register: "إنشاء حساب", cart: "السلة", add: "+ أضف", all: "الكل", free_shipping: "شحن مجاني من", products: "منتجاتنا", bear: "دب", clothes: "ملابس", set: "مجموعة", footer_rights: "جميع الحقوق محفوظة", reviews_title: "ماذا يقول العملاء؟", reviews_sub: "أكثر من 200 عائلة سعيدة 🧸", blog_title: "المدونة", blog_more: "رؤية المزيد →", trust_pay: "دفع آمن", trust_pay_sub: "بطاقة، PayPal، تحويل", trust_ship: "شحن مجاني", trust_ship_sub: "طلبات من 27€", trust_return: "إرجاع سهل", trust_return_sub: "14 يومًا بدون سبب", trust_care: "ضمان الرضا", trust_care_sub: "دائمًا في صفك", hero_title: "دببة صغيرة،", hero_em: "أحضان كبيرة", hero_desc: "دببة أفخاذ Tiny — ناعمة، مصنوعة بعناية، جاهزة للعناق.", hero_btn: "🐻 مشاهدة الدببة", savings: "المجموعة توفر لك 5€!", cart_empty: "سلتك فارغة", cart_empty_desc: "أضف دببة أو ملابس لبدء التسوق.", back_shop: "← العودة للمتجر", checkout_btn: "الذهاب إلى الدفع →", continue: "← مواصلة التسوق", shipping: "الشحن", free: "مجاني 🎉", summary: "ملخص", total: "الإجمالي", products_label: "المنتجات", missing_free: "ينقص", missing_free2: "للشحن المجاني" },
  tr: { name: "Türkçe", flag: "🇹🇷", currency: "EUR", symbol: "€", rate: 0.23, nav_bears: "Ayıcıklar", nav_clothes: "Kıyafetler", nav_sets: "Setler", nav_blog: "Blog", nav_login: "Giriş yap", nav_register: "Kayıt ol", cart: "Sepet", add: "+ Ekle", all: "Hepsi", free_shipping: "Ücretsiz kargo", products: "Ürünlerimiz", bear: "Ayıcık", clothes: "Kıyafet", set: "Set", footer_rights: "Tüm hakları saklıdır", reviews_title: "Müşteriler ne diyor?", reviews_sub: "200'den fazla mutlu aile 🧸", blog_title: "Blog", blog_more: "Daha fazla →", trust_pay: "Güvenli ödeme", trust_pay_sub: "Kart, PayPal, havale", trust_ship: "Ücretsiz kargo", trust_ship_sub: "27€ üzeri siparişlerde", trust_return: "Kolay iade", trust_return_sub: "14 gün sebepsiz iade", trust_care: "Memnuniyet garantili", trust_care_sub: "Her zaman yanınızda", hero_title: "Küçük ayıcıklar,", hero_em: "büyük sarılmalar", hero_desc: "Tiny peluş ayıcıklar — yumuşak, özenle yapılmış, sarılmaya hazır.", hero_btn: "🐻 Ayıcıkları gör", savings: "Set size 5€ tasarruf sağlar!", cart_empty: "Sepetiniz boş", cart_empty_desc: "Alışverişe başlamak için ayıcık veya kıyafet ekleyin.", back_shop: "← Mağazaya dön", checkout_btn: "Ödemeye geç →", continue: "← Alışverişe devam et", shipping: "Kargo", free: "Ücretsiz 🎉", summary: "Özet", total: "Toplam", products_label: "Ürünler", missing_free: "Ücretsiz kargo için", missing_free2: "daha gerekiyor" },
};

// === ZARZĄDZANIE JĘZYKIEM ===
let currentLang = localStorage.getItem("th_lang") || "pl";

function getLang() {
  return TRANSLATIONS[currentLang] || TRANSLATIONS["pl"];
}

function setLang(code) {
  if (!TRANSLATIONS[code]) return;
  currentLang = code;
  localStorage.setItem("th_lang", code);
  applyTranslations();
}

function t(key) {
  const lang = getLang();
  return lang[key] || TRANSLATIONS["pl"][key] || key;
}

// Przelicz cenę na aktualną walutę
function formatPrice(plnPrice) {
  const lang = getLang();
  const converted = plnPrice * lang.rate;
  if (lang.currency === "PLN") return Math.round(converted) + " " + lang.symbol;
  if (lang.currency === "JPY" || lang.currency === "HUF") return Math.round(converted) + " " + lang.symbol;
  return converted.toFixed(2) + " " + lang.symbol;
}

// Przelicz próg darmowej wysyłki
function getFreeShippingThreshold() {
  const lang = getLang();
  return formatPrice(119);
}

function applyTranslations() {
  // Elementy z data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  // Ceny
  document.querySelectorAll("[data-price]").forEach(el => {
    el.textContent = formatPrice(parseFloat(el.dataset.price));
  });
  // Aktualizuj flagę/język w selektorze
  const langCurrent = document.getElementById("lang-current");
  if (langCurrent) {
    const lang = getLang();
    langCurrent.innerHTML = `${lang.flag} ${lang.name} <span class="lang-arrow">▾</span>`;
  }
  // Jeśli jest renderProducts — przerenderuj
  if (typeof renderProducts === "function") renderProducts();
  if (typeof renderCart === "function") renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
});

// === PEŁNA AKTUALIZACJA STRONY PO ZMIANIE JĘZYKA ===
// Nadpisuje setLang żeby przeładować cały widok
const _origSetLang = setLang;
window.setLang = function(code) {
  if (!TRANSLATIONS[code]) return;
  currentLang = code;
  localStorage.setItem("th_lang", code);

  // Zamknij dropdown
  document.getElementById("lang-dropdown")?.classList.remove("open");
  document.getElementById("lang-selector")?.classList.remove("open");

  // Przeładuj nawigację
  const activePage = document.body.dataset.page || "";
  if (typeof renderNav === "function") renderNav(activePage);

  // Przeładuj produkty jeśli są
  if (typeof renderProducts === "function") renderProducts();
  if (typeof renderCart === "function") renderCart();

  // Aktualizuj data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // Aktualizuj ceny
  document.querySelectorAll("[data-price]").forEach(el => {
    el.textContent = formatPrice(parseFloat(el.dataset.price));
  });

  // Aktualizuj sekcje statyczne przez id
  _refreshStaticSections();
};

function _refreshStaticSections() {
  const map = {
    "trust-pay":        t("trust_pay"),
    "trust-pay-sub":    t("trust_pay_sub"),
    "trust-ship":       t("trust_ship"),
    "trust-ship-sub":   t("trust_ship_sub"),
    "trust-return":     t("trust_return"),
    "trust-return-sub": t("trust_return_sub"),
    "trust-care":       t("trust_care"),
    "trust-care-sub":   t("trust_care_sub"),
    "hero-title":       t("hero_title"),
    "hero-em":          t("hero_em"),
    "hero-desc":        t("hero_desc"),
    "hero-btn":         t("hero_btn"),
    "section-products": t("products"),
    "reviews-title":    t("reviews_title"),
    "reviews-sub":      t("reviews_sub"),
    "blog-title":       t("blog_title"),
    "blog-more":        t("blog_more"),
    "savings-text":     t("savings"),
  };
  for (const [id, text] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  // Darmowa wysyłka threshold
  const fst = document.getElementById("free-shipping-threshold");
  if (fst) fst.textContent = formatPrice(119);
}
