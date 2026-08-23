/**
 * Wildish by Wild Cookbook - Comprehensive Menu Data Model
 * Extracted & curated from live restaurant database
 */

const WILDISH_MENU = [
  {
    id: "wild-salad",
    name: "Wild Salad",
    icon: "fa-seedling",
    tagline: "Farm-fresh greens, vibrant citrus & house herbal dressings",
    items: [
      {
        id: "green-salad",
        name: "Wild Green Salad",
        price: 1850,
        desc: "Crisp mixed lettuce, vine tomatoes, cucumber, tossed in our signature ginger honey glaze.",
        badges: ["veg", "fresh"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "caesar-salad",
        name: "Wild Caesar Salad",
        price: 2350,
        desc: "Flame-grilled chicken strips, rustic herb croutons, aged parmigiano, soft-boiled egg, crispy chicken bacon, housemade creamy Caesar dressing.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "madu-river-shrimp-salad",
        name: "Madu River Shrimp Salad",
        price: 2550,
        desc: "Charred lagoon shrimps, creamy avocado slices, cherry tomatoes, fresh garden leaves, parmigiano shavings with ginger honey drizzle.",
        badges: ["signature", "seafood"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "vegan-nut-salad",
        name: "Vegan Nut & Green Salad",
        price: 1950,
        desc: "Crunchy iceberg lettuce, sweet basil, roasted sunflower seeds, pumpkin seeds drizzled with organic sesame & tangy tamarind dressing.",
        badges: ["vegan", "veg"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "balsamic-chicken-salad",
        name: "Balsamic Chicken Salad",
        price: 2250,
        desc: "Grilled marinated chicken, mixed tender leaves, red cabbage, crisp carrot & cucumber with aged balsamic glaze and roasted whole cashews.",
        badges: ["fresh"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "soup",
    name: "Soup of the Day",
    icon: "fa-bowl-hot",
    tagline: "Slow-simmered artisanal broths crafted daily",
    items: [
      {
        id: "soup-of-the-day",
        name: "Wild Artisan Soup of the Day",
        price: 1650,
        desc: "Fresh morning pot prepared with seasonal vegetables, seafood or roasted chicken. Ask our service team for today's special creation.",
        badges: ["chef-special"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "crispy-crunchy",
    name: "Wild Crispy & Crunchy",
    icon: "fa-fire-flame-curved",
    tagline: "Golden crunch, fiery seasonings & artisan dips",
    items: [
      {
        id: "calamari-bangles",
        name: "Calamari Bangles",
        price: 3050,
        desc: "Tender ring calamari fried golden, tossed with chili vinegar, Korean chili glaze, served with mixed baby greens.",
        badges: ["popular", "seafood"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "chicken-fingers",
        name: "Wild Chicken Fingers",
        price: 2950,
        desc: "Crispy double-breaded chicken tenders served with seasoned golden french fries and spicy fire chili dip.",
        badges: ["popular"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "cereal-prawn",
        name: "Wild Cereal Prawn",
        price: 3450,
        desc: "Wok-fried jumbo prawns in double golden crust, sweet cereal crumble, fresh orange zest, mixed greens and spicy wild mayo.",
        badges: ["signature", "seafood"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "nachos-cajun",
        name: "Cajun Spiced Nachos",
        price: 1850,
        desc: "Crispy artisanal corn tortilla chips tossed with house Cajun spices, spicy mayo drizzle, tangy sour cream and guacamole.",
        badges: ["veg"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "sandos-burgers",
    name: "Wildwichers & Burgers",
    icon: "fa-burger",
    tagline: "Artisan baked breads, gourmet patties & generous sides",
    items: [
      {
        id: "lamb-sando",
        name: "Signature Lamb Sando",
        price: 3950,
        desc: "Housemade rosemary focaccia, tender wok-seared Australian lamb in sweet hoisin glaze, melted sharp cheddar with seasoned fries.",
        badges: ["signature", "bestseller"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-club-sando",
        name: "Wild Club Sando",
        price: 2550,
        desc: "Toasted brioche, roasted chicken, melted cheddar, sliced avocado, sunny fried egg, smoked ham, tomato, crisp lettuce with fries.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "salmon-burger",
        name: "Norwegian Salmon Burger",
        price: 5550,
        desc: "Handmade Norwegian salmon patty, crisp lettuce, heirloom tomato, pickled red onion, cucumber, melted cheddar & diced avocado with french fries.",
        badges: ["chef-special", "seafood"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "beef-burger",
        name: "Aussie Prime Beef Burger",
        price: 4980,
        desc: "Juicy Australian prime beef patty, caramelized onion relish, cheddar melt, crisp lettuce, tomato and signature sauce with fries.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-chicken-burger",
        name: "Wild Crispy Chicken Burger",
        price: 2650,
        desc: "Golden fried seasoned chicken, crisp lettuce, pickled cucumber, tomato, cheddar cheese and zesty Russian dressing with fries.",
        badges: ["popular"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "vege-sando",
        name: "Artisan Vege Sando",
        price: 1650,
        desc: "Toasted bread, melted cheddar, rich ripe avocado slices, garden tomato, crisp lettuce with golden fries.",
        badges: ["veg"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "vege-burger",
        name: "Wild Vege Burger",
        price: 1850,
        desc: "Crisp golden vegetable & lentil patty, lettuce, pickled gherkins, fresh tomato, cheddar melt, Russian dressing with fries.",
        badges: ["veg"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "pasta",
    name: "Artisan Pasta",
    icon: "fa-plate-wheat",
    tagline: "Handcrafted sauces simmered with Italian & Ceylon soul",
    items: [
      {
        id: "ceylon-shrimp-pasta",
        name: "Wild Ceylon Styled Shrimp Pasta",
        price: 2990,
        desc: "Choice of Penne or Spaghetti tossed in our fiery spicy pink cream sauce, garlic butter shrimps and curry leaf aromatics.",
        badges: ["signature", "spicy", "seafood"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-chicken-pasta",
        name: "Wild Chicken Pink Sauce",
        price: 2650,
        desc: "Penne or Spaghetti tossed in rich tomato-cream pink sauce, sautéed chicken breast strips and parmigiano.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281048?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "pomodoro-pasta",
        name: "Classic Pomodoro",
        price: 2300,
        desc: "Penne or Spaghetti simmered in sweet slow-cooked San Marzano tomato sauce, fresh basil, extra virgin olive oil and parmigiano.",
        badges: ["veg"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "mains",
    name: "Chef's Signature Mains",
    icon: "fa-utensils",
    tagline: "Charcoal, wild fire & iconic Sri Lankan lagoon delicacies",
    items: [
      {
        id: "crab-curry-roast-paan",
        name: "Madu Lagoon Crab Curry with Roast Paan",
        price: 12500,
        desc: "Wild Cookbook's legendary rich Madu Lagoon crab curry simmered in organic coconut milk and ground roasted spices. Served with warm house-baked crusty roast paan & fresh coconut pol sambol.",
        badges: ["signature", "bestseller", "spicy", "wild-cookbook"],
        spicy: true,
        image: "assets/images/crab-curry.png"
      },
      {
        id: "wild-surf-grill",
        name: "Wild Surf & Turf Ocean Grill Platter",
        price: 18600,
        desc: "Spectacular feast of grilled whole rock lobster, succulent king fish steak, butterflied jumbo prawns, tender calamari rings. Accompanied by Thai chili glaze, sesame BBQ sauce, garlic butter rice, and a warm house bakery basket.",
        badges: ["signature", "feast", "seafood"],
        spicy: true,
        image: "assets/images/wild-surf-grill.png"
      },
      {
        id: "prawn-curry-roast-paan",
        name: "Madu River Prawn Curry with Roast Paan",
        price: 14500,
        desc: "Wild jumbo lagoon prawns in rich velvety spiced coconut gravy, served with golden crunchy roast paan and spicy pol sambol.",
        badges: ["signature", "seafood"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "jumbo-river-prawns",
        name: "Wild Jumbo River Prawns",
        price: 6450,
        desc: "Fire-grilled freshwater jumbo prawns glazed with hot Thai chili sauce, served with sweet corn and garden salad.",
        badges: ["popular", "seafood"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-baby-chicken",
        name: "Wild Baby Chicken Roast",
        price: 3320,
        desc: "Whole baby chicken slow-marinated in preserved lemon and wild herbs, flame-roasted and glazed with smoky wild BBQ glaze. Served with fragrant steamed rice.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ceylon-coconut-king-fish",
        name: "Ceylon Coconut King Fish",
        price: 3200,
        desc: "Pan-seared king fish fillet swimming in a fragrant yellow organic coconut milk curry, tempered with curry leaves and mustard seeds. Served with jasmine rice.",
        badges: ["popular", "seafood"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "sichuan-beef-rice",
        name: "Sichuan Beef with Jasmine Rice",
        price: 4950,
        desc: "Wok-tossed Australian tenderloin strips, button mushrooms, baby corn, fresh beans in authentic numbing Sichuan chili sauce with steamed rice.",
        badges: ["spicy"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "cajun-chicken-quesadilla",
        name: "Cajun Chicken Quesadilla",
        price: 2850,
        desc: "Crispy folded flour tortilla stuffed with Cajun chicken breast, sweet corn, sautéed bell peppers, mozzarella melt, served with house guacamole and sour cream.",
        badges: ["popular"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ceylon-beef-curry",
        name: "Ceylon Style Beef Tenderloin Curry",
        price: 6550,
        desc: "Prime Australian beef tenderloin simmered in rich spicy yellow coconut gravy with roasted curry powder, paired with warm house roast paan.",
        badges: ["chef-special", "spicy"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "pizza",
    name: "Wild Artisan Pizza",
    icon: "fa-pizza-slice",
    tagline: "Stone-baked crispy dough, rich Neapolitan sauce & creative wild toppings",
    items: [
      {
        id: "madu-hot-shrimp-pizza",
        name: "Madu River Hot Shrimp Pizza",
        price: 4650,
        desc: "Hot garlic butter lagoon shrimps, fiery kochchi chili paste, kalamata olives, sweet onions and generous melted mozzarella.",
        badges: ["signature", "spicy", "seafood"],
        spicy: true,
        image: "assets/images/gallery-pizza.jpg"
      },
      {
        id: "ceylon-lunu-dehi-pizza",
        name: "Wild Ceylon Lunu Dehi Pizza",
        price: 3280,
        desc: "Signature pickled lime (Lunu Dehi) Neapolitan sauce base, grilled spiced chicken, green chilies, red onions, crisp curry leaves crumble and mozzarella.",
        badges: ["signature", "unique", "spicy"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-meat-lovers",
        name: "Wild Meat Lovers Pizza",
        price: 5990,
        desc: "Loaded with spiced roasted chicken, garlic shrimps, Australian beef pepperoni, crisp chicken bacon, and gooey mozzarella cheese.",
        badges: ["bestseller"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-lamb-pizza",
        name: "Hoisin Lamb & Kochchi Pizza",
        price: 5750,
        desc: "Wok-glazed Australian hoisin lamb, roasted kochchi chili glaze, sliced red onion, black olives, mozzarella.",
        badges: ["chef-special", "spicy"],
        spicy: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-margherita",
        name: "Wild Margherita Neapolitan",
        price: 3150,
        desc: "Homemade slow-simmered Neapolitan tomato sauce, creamy mozzarella, sweet Italian basil leaves and extra virgin olive oil drizzle.",
        badges: ["veg"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "desserts",
    name: "Decadent Desserts",
    icon: "fa-cake-candles",
    tagline: "Sweet indulgences, tropical aromas & warm baked confectioneries",
    items: [
      {
        id: "wild-coco-pearl",
        name: "Wild Coco Pearl (Signature Sago)",
        price: 2050,
        desc: "Silky pearl sago infused with rich organic coconut jelly, fragrant basil seeds, diced Alphonso mango, sweet grapes, fresh strawberries and chilled vanilla milk.",
        badges: ["signature", "bestseller"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "san-sebastian-cheesecake",
        name: "San Sebastian Burnt Cheesecake",
        price: 2950,
        desc: "Istanbul's famous caramelized crust cheesecake, velvety molten center, lavishly crowned with warm melted Belgian milk chocolate.",
        badges: ["bestseller", "popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "chocolate-cheese-brownie",
        name: "Warm Chocolate Cheese Brownie",
        price: 2850,
        desc: "Decadent fudgy dark chocolate cheesecake brownie, served warm with homemade butterscotch sauce, Madagascar vanilla ice cream and wild berry compote.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "sticky-date-pudding",
        name: "Warm Sticky Date & Ginger Pudding",
        price: 2200,
        desc: "Rich Medjool date sponge infused with fresh Sri Lankan ginger, drenched in golden butterscotch sauce, paired with strawberry compote & vanilla ice cream.",
        badges: ["chef-special"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "tiramisu-classico",
        name: "Wildish Tiramisù Classico",
        price: 2650,
        desc: "Espresso-soaked Italian savoiardi ladyfingers layered with whipped mascarpone cream and dusted with raw Venezuelan cocoa powder.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "mocktails",
    name: "Signature Mocktails & Elixirs",
    icon: "fa-martini-glass-citrus",
    tagline: "Botanical infusions, Ceylon spices & refreshing tropical blends",
    items: [
      {
        id: "arctic-nona",
        name: "Arctic Nona",
        price: 1750,
        desc: "Muddled fresh highland strawberries, natural strawberry purée, tart pomegranate reduction and freshly squeezed Persian lime juice over crushed ice.",
        badges: ["signature", "bestseller"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "glacier-de-menthe",
        name: "Glacier De Menthe",
        price: 1650,
        desc: "Garden-picked spearmint, crisp mountain cucumber ribbons, fresh lime juice and chilled artisanal botanical soda.",
        badges: ["refreshing"],
        spicy: false,
        image: "assets/images/glacier-de-menthe.jpg"
      },
      {
        id: "frozen-mahaththaya",
        name: "Frozen Mahaththaya",
        price: 1700,
        desc: "Tropical sweet pineapple slush, bruised fresh mint, Blue Curaçao essence and zesty lime spritz.",
        badges: ["popular"],
        spicy: false,
        image: "assets/images/frozen-mahaththaya.png"
      },
      {
        id: "hi-lunudehi",
        name: "Hi LunuDehi (Ceylon Brine Cooler)",
        price: 1150,
        desc: "Authentic aged salted lime (Lunu Dehi), aromatic olive brine, black olives, golden passion fruit purée topped with fizzy sparkling citrus.",
        badges: ["signature", "unique"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "centella-sensor",
        name: "Centella Sensor (Gotukola Elixir)",
        price: 1400,
        desc: "Fresh Gotukola herbal press, sweet white peach purée, cold-pressed ginger root juice, and wild lime zest.",
        badges: ["botanical"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ocean-sparkler",
        name: "Ocean Sparkler",
        price: 1590,
        desc: "Golden pineapple juice, fiery ginger press, blue curaçao cordial, Ceylon ginger beer, topped with caramelized pineapple chunks.",
        badges: ["popular"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "beverages",
    name: "Artisan Coffee, Teas & Shakes",
    icon: "fa-mug-hot",
    tagline: "Single origin espresso, estate teas & thick gourmet milkshakes",
    items: [
      {
        id: "caramel-milkshake",
        name: "Caramel Popcorn Milkshake",
        price: 1550,
        desc: "Velvety caramel gelato blended with thick whole milk, topped with whipped cream and butterscotch popcorn.",
        badges: ["popular"],
        spicy: false,
        image: "assets/images/gallery-milkshake.png"
      },
      {
        id: "dirty-chai-latte",
        name: "Dirty Ceylon Chai Latte",
        price: 1200,
        desc: "Slow-brewed spiced Ceylon black tea with cinnamon and cardamom, velvety steamed milk, topped with a shot of dark espresso.",
        badges: ["signature"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "flat-white-artisan",
        name: "Specialty Flat White",
        price: 900,
        desc: "Double ristretto extracted from medium-roast beans, poured with microfoam latte art.",
        badges: ["coffee"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wild-energy-booster",
        name: "Wild Energy Booster Smoothie",
        price: 1900,
        desc: "Rolled oats, Medjool dates, ripe Cavendish banana, artisanal buffalo curd, fresh milk and raw honey.",
        badges: ["healthy"],
        spicy: false,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

const WILDISH_STATS = {
  youtubeSubscribers: "10.8M+",
  youtubeVideos: "736+",
  googleRating: 5.0,
  reviewCount: 480,
  location: "Capitol Twin Peaks, Colombo 02",
  openingHours: "Daily 11:00 AM – 10:30 PM",
  phone: "+94 71 333 3401",
  phoneDisplay: "071 333 3401",
  tagline: "So good. It gets Wild.",
  chef: "Chef Charith N. Silva"
};

if (typeof window !== "undefined") {
  window.WILDISH_MENU = WILDISH_MENU;
  window.WILDISH_STATS = WILDISH_STATS;
}
