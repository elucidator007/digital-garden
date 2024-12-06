export const menuData = {
    appetizers: [
      {
        name: "Bruschetta Classica",
        description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil",
        price: "8.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Sourdough bread",
          "Roma tomatoes",
          "Fresh basil",
          "Garlic",
          "Extra virgin olive oil",
          "Sea salt",
          "Black pepper"
        ]
      },
      {
        name: "Caprese di Bufala",
        description: "Buffalo mozzarella with fresh tomatoes, basil, and balsamic glaze",
        price: "12.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Buffalo mozzarella",
          "Heirloom tomatoes",
          "Fresh basil",
          "Aged balsamic glaze",
          "Extra virgin olive oil",
          "Sea salt",
          "Black pepper"
        ]
      }
    ],
    pizzas: [
      {
        name: "Margherita D.O.P",
        description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, olive oil",
        price: "18.95",
        isVeg: true,
        spicyLevel: 1,
        ingredients: [
          "San Marzano tomatoes",
          "Buffalo mozzarella D.O.P",
          "Fresh basil",
          "Extra virgin olive oil",
          "Sea salt",
          "Type 00 flour",
          "Fresh yeast"
        ]
      },
      {
        name: "Diavola",
        description: "Spicy salami, mozzarella, fresh chili, San Marzano tomatoes",
        price: "20.95",
        isVeg: false,
        spicyLevel: 2,
        ingredients: [
          "Spicy salami",
          "Fresh mozzarella",
          "Fresh chili peppers",
          "San Marzano tomatoes",
          "Olive oil",
          "Type 00 flour",
          "Fresh yeast"
        ]
      },
      {
        name: "Quattro Formaggi",
        description: "Mozzarella, gorgonzola, parmesan, fontina, fresh basil",
        price: "21.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Fresh mozzarella",
          "Gorgonzola D.O.P",
          "Parmigiano Reggiano",
          "Fontina",
          "Fresh basil",
          "Olive oil",
          "Type 00 flour",
          "Fresh yeast"
        ]
      }
    ],
    chefsSpecials: [
      {
        name: "Ravioli di Ricotta",
        description: "Handmade ricotta ravioli with sage butter sauce",
        price: "20.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Fresh ricotta",
          "Semolina flour",
          "Free-range eggs",
          "Fresh sage",
          "Italian butter",
          "Parmigiano Reggiano",
          "Black pepper"
        ]
      },
      {
        name: "Pizza al Tartufo",
        description: "White pizza with fresh truffle, mushrooms, and mozzarella",
        price: "24.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Black truffle",
          "Wild mushrooms",
          "Fresh mozzarella",
          "Truffle oil",
          "Garlic",
          "Type 00 flour",
          "Fresh yeast"
        ]
      },
      {
        name: "Pappardelle al Ragù",
        description: "Wide pasta ribbons with slow-cooked beef ragù",
        price: "21.95",
        isVeg: false,
        spicyLevel: 1,
        ingredients: [
          "Semolina flour",
          "Free-range eggs",
          "Ground beef",
          "San Marzano tomatoes",
          "Carrots",
          "Celery",
          "Red wine",
          "Fresh herbs"
        ]
      }
    ],
    desserts: [
      {
        name: "Tiramisù",
        description: "Classic Italian dessert with mascarpone, coffee, and cocoa",
        price: "9.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Mascarpone cheese",
          "Savoiardi biscuits",
          "Espresso coffee",
          "Free-range eggs",
          "Cocoa powder",
          "Marsala wine"
        ]
      },
      {
        name: "Panna Cotta",
        description: "Vanilla bean panna cotta with fresh berries and mint",
        price: "8.95",
        isVeg: true,
        spicyLevel: 0,
        ingredients: [
          "Heavy cream",
          "Vanilla bean",
          "Sugar",
          "Gelatin",
          "Fresh berries",
          "Fresh mint",
          "Berry coulis"
        ]
      }
    ]
  };
  
  export const COLORS = {
    primary: '#433422',
    secondary: '#765C48',
    accent: '#986A4C',
    border: '#E2C4A9',
    background: '#FAF6F1',
    vegBackground: '#F0F6F0'
  };
  
  export const FONTS = {
    primary: "'Playfair Display', serif",
    secondary: "'Cormorant Garamond', serif",
    text: "'Montserrat', sans-serif"
  };