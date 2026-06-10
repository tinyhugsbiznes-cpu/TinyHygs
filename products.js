const products = [
  // === MISIE (gołe) ===
  {
    id: "mis-brazowy",
    name: "Miś Tiny",
    variant: "Brązowy",
    category: "mis",
    price: 59,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Miękki pluszowy miś w kolorze brązowym. Idealny do przytulania.",
    color: "#8B5E3C"
  },
  {
    id: "mis-bialy",
    name: "Miś Tiny",
    variant: "Biały",
    category: "mis",
    price: 59,
    image: "img/Hda6e93c9d6be455f8bc73367cd5fe6cds.jpg",
    description: "Miękki pluszowy miś w kolorze białym. Idealny do przytulania.",
    color: "#F5F0E8"
  },
  {
    id: "mis-rozowy",
    name: "Miś Tiny",
    variant: "Różowy",
    category: "mis",
    price: 59,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Miękki pluszowy miś w kolorze różowym. Idealny do przytulania.",
    color: "#F4A7B9"
  },

  // === UBRANKA ===
  {
    id: "ubranko-brazowy",
    name: "Sweterek Tiny",
    variant: "Brązowy",
    category: "ubranko",
    price: 29,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Ręcznie dziany sweterek dla misia w kolorze brązowym.",
    color: "#8B5E3C"
  },
  {
    id: "ubranko-kremowy",
    name: "Sweterek Tiny",
    variant: "Kremowy",
    category: "ubranko",
    price: 29,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Ręcznie dziany sweterek dla misia w kolorze kremowym.",
    color: "#E8DCC8"
  },
  {
    id: "ubranko-rozowy",
    name: "Sweterek Tiny",
    variant: "Różowy",
    category: "ubranko",
    price: 29,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Ręcznie dziany sweterek dla misia w kolorze różowym.",
    color: "#F4A7B9"
  },

  // === ZESTAWY ===
  {
    id: "zestaw-brazowy",
    name: "Zestaw Tiny",
    variant: "Brązowy",
    category: "zestaw",
    price: 65,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Miś Tiny Brązowy + pasujący sweterek. Gotowy prezent w zestawie.",
    color: "#8B5E3C",
    includes: ["Miś Tiny Brązowy", "Sweterek Brązowy"]
  },
  {
    id: "zestaw-bialy",
    name: "Zestaw Tiny",
    variant: "Biały",
    category: "zestaw",
    price: 65,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Miś Tiny Biały + pasujący sweterek. Gotowy prezent w zestawie.",
    color: "#F5F0E8",
    includes: ["Miś Tiny Biały", "Sweterek Kremowy"]
  },
  {
    id: "zestaw-rozowy",
    name: "Zestaw Tiny",
    variant: "Różowy",
    category: "zestaw",
    price: 65,
    image: "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22200%22 height%3D%22200%22%3E%3Crect width%3D%22200%22 height%3D%22200%22 fill%3D%22%23F2D5DF%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%2280%22%3E🧸%3C/text%3E%3C/svg%3E",
    description: "Miś Tiny Różowy + pasujący sweterek. Gotowy prezent w zestawie.",
    color: "#F4A7B9",
    includes: ["Miś Tiny Różowy", "Sweterek Różowy"]
  }
];

// Kategorie do filtrowania
const categories = {
  all: "Wszystkie",
  mis: "Misie",
  ubranko: "Ubranka",
  zestaw: "Zestawy"
};

// Pomocnicza funkcja do pobierania produktu po ID
function getProductById(id) {
  return products.find(p => p.id === id) || null;
}
