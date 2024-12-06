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

  export const REGULAR_COLORS = {
    background: '#E4C59E',
    primary: '#040303',
    secondary: '#461111',
    accent: '#A13333',
    border: '#B3541E'
  };
  
  export const VEG_COLORS = {
    background: '#C4DAD2',
    primary: '#16423C',
    secondary: '#16423C',
    accent: '#6A9C89',
    border: '#16423C'
  };

  export const slides = [
    {
      image: 'https://images.unsplash.com/photo-1480548004877-593316be2bd5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Ancient Origins',
      description: 'Dating back to ancient civilizations, flatbreads with toppings were served in Naples, Italy. Poor workers needed quick, affordable meals, leading to the birth of pizza.'
    },
    {
      image: 'https://images.unsplash.com/photo-1611588275568-72ecc1a502d1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Perfect Dough',
      description: 'Our master pizzaiolos hand-knead the dough using a centuries-old recipe. The dough rests for 24-48 hours, developing complex flavors and the perfect texture.'
    },
    {
      image: 'https://images.unsplash.com/photo-1610913729746-9d5d752daf59?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sauce Creation',
      description: 'San Marzano tomatoes, grown in the volcanic soil near Mount Vesuvius, are crushed and seasoned with Mediterranean herbs to create our signature sauce.'
    },
    {
      image: 'https://images.unsplash.com/photo-1609280797194-acf56a8b95aa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Traditional Toppings',
      description: 'Fresh mozzarella, hand-torn basil, and extra virgin olive oil - the colors of the Italian flag come together in our authentic Neapolitan pizza.'
    },
    {
      image: 'https://images.unsplash.com/photo-1607018244619-dab6235709dd?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Wood-Fired Perfection',
      description: 'Each pizza is cooked in our wood-fired oven at 900°F for exactly 90 seconds, creating the perfect leopard-spotted crust characteristic of true Neapolitan pizza.'
    }
  ];
  
  export const pizza_facts = [
    "The world's first pizzeria, Port'Alba, opened in Naples in 1830 and is still operating today",
    "The most expensive pizza ever created cost $12,000 and was topped with caviar, lobster, and rare cognac",
    "Pizza margherita was created in 1889 to honor Queen Margherita of Italy using red tomatoes, white mozzarella, and green basil",
    "Americans eat around 350 slices of pizza every second", 
    "The Hawaiian pizza was actually invented in Canada by Sam Panopoulos in 1962",
    "The U.S. military has developed a pizza that can stay fresh for up to three years",
    "October is officially National Pizza Month in the United States",
    "The largest pizza ever made was 13,580 square feet, created in Rome, Italy in 2012",
    "Pizza was originally considered a food for poor people before becoming a worldwide phenomenon",
    "The first known pizza delivery was to Queen Margherita in 1889 by Raffaele Esposito"
 ]