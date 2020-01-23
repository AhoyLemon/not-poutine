const siteURL = "";

const crimes = [

  {
    name:        "Poutine Skillet",
    place:       "CJ Mahoney's",
    pic:         "poutine-skillet.jpg",
    city:        "Rochester",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/gSMQcN5b8ipnkemaA",
    price:       11.74,
    description: "Deep fried tater tots, melted white cheddar curds, brown gravy, garnished with bacon bits and green onions.",
    requirements: {
      fries:     false,
      curds:     false,
      gravy:     true
    }
  },

  {
    name:        "Butter Chicken Poutine",
    place:       "Bliss",
    pic:         "bliss-butter-chicken.jpg",
    city:        "Quesnel",
    state:       "BC",
    country:     "CA",
    map:         "https://goo.gl/maps/gSMQcN5b8ipnkemaA",
    price:       12.00,
    description: "Fries, Butter Chicken and mozza",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Farm-To-Table Poutine",
    place:       "Wise Acre",
    pic:         "wiseacre.jpg",
    city:        "Minneapolis",
    state:       "MN",
    country:     "US",
    price:       16.37,
    map:         "https://goo.gl/maps/gYZcT9YDxgYLzKMGA",
    description: "home fries with sautéed farm vegetables, house-made breakfast sausage, Castle Rock Organic Dairy cheese curds, poached eggs, and Granny Dell's black pepper gravy",
    requirements: {
      fries: false,
      curds: true,
      gravy: false
    },
  },

  {
    name:        "Sweet Poutine",
    place:       "Robson's Fries",
    pic:         "sweet-poutine-japan.jpg",
    city:        "Tokyo",
    //state:       "BC",
    country:     "Japan",
    map:         "https://goo.gl/maps/NwE6XjnYybofkDqo8",
    price:       6.47,
    description: "We've topped it with custard loaded with eggs, mixed berries, and pure Canadian maple syrup. And of course, plenty of cheese!",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Broadway Poutine",
    place:       "Broadway Pizza",
    pic:         "broadway-pizza.jpg",
    city:        "Minneapolis",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/EEczXVf2tCoj2tRA7",
    price:       13.05,
    description: "crispy tots and handmade battered cheddar curds smothered with smoky cheese sauce, zesty herb seasoned tomatoes, jalapeno bacon and more cheddar on top!",
    requirements: {
      fries:     false,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Pepperoni Pizza Poutine",
    place:       "LaFork! Poutine & Crêpes",
    pic:         "lafork-pepperoni.jpg",
    city:        "Dearborn",
    state:       "MI",
    country:     "US",
    map:         "https://g.page/LaFork?share",
    price:       11.85,
    description: "fresh cut fries, mozzarella cheese, marinara sauce and pepperoni",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Cheesy Lobster Sauce Poutine",
    place:       "Bite of Maine",
    pic:         "bito-maine.jpg",
    city:        "Virginia Beach",
    state:       "VA",
    country:     "US",
    map:         "https://goo.gl/maps/Ft4j5qqXh9ERoSNg6",
    price:       13.12,
    description: "Fries topped with mozarella cheese and a lobster cheesy sauce poured on top to melt it.",
    requirements: {
          fries: true,
          curds: false,
          gravy: false
    }
  },

  {
    name:        "BarBtine Médio",
    place:       "Canuck's Poutinerie",
    pic:         "canucks-medio.jpg",
    city:        "São Paulo",
    //state:       "MN",
    country:     "Brazil",
    map:         "https://goo.gl/maps/EAbxiEvedoSgYL7e8",
    price:       10.06,
    description: "fries, creamy cheddar, Canadian BBQ, and cilantro pesto.",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Luna Beer Cheese Poutine",
    place:       "Beards Brewery",
    pic:         "luna-beer-cheese.jpg",
    city:        "Petoskey",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/xSyKb9ZPF9MMARe16",
    price:       18.28,
    description: "House made Luna beer cheese, green onion, white cheddar cheese curds",
    requirements: {
          fries: true,
          curds: true,
          gravy: false
    }
  },

  {
    name: "Hector's Poutine",
    place: "Angry Dog",
    pic: "hectors.jpg",
    city: "Dallas",
    state: "TX",
    country: "US",
    map: "https://goo.gl/maps/C6Ew6BWzTpyL8Dcb7",
    price: 12.98,
    description: "Fries, Cheddar cheese, chorizo and jalapeño gravy",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    } 
  },

  {
    name:        "Poutine x Cod Roe Sauce",
    place:       "Becker's",
    pic:         "becker-cod-roe.jpg",
    city:        "Tokyo",
    //state:       "BC",
    country:     "Japan",
    map:         "https://goo.gl/maps/j1pyEgKzrquqTtTU6",
    price:       4.07,
    description: "french fries, shredded cheese, cod roe sauce, dried nori seaweed",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Flyin' Hawaiian Poutine",
    place:       "Joe Beevrz Canadian Pub",
    pic:         "beevrz-hawaiian.jpg",
    city:        "Yorkton",
    state:       "Saskatchewan",
    country:     "CA",
    map:         "https://goo.gl/maps/j1pyEgKzrquqTtTU6",
    price:       4.07,
    description: "Caramelized pineapple, candied peppered pig candy.",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     true
    }
  },

  {
    name:        "Poutine",
    place:       "Soo Eagles Hockey Rink",
    pic:         "soo-eagles.jpg",
    city:        "Sault Ste Marie",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/2VaWVtsXXVTdQf6h9",
    price:       10.44,
    description: "steak fries, gravy and shredded mozzarella",
    requirements: {
          fries: true,
          curds: false,
          gravy: true
    }
  },

  {
    name:        "Lobster Poutine",
    place:       "The Cook & The Ox",
    pic:         "lobster-poutine.jpg",
    city:        "MSP Airport",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/xSyKb9ZPF9MMARe16",
    price:       22.20,
    description: "Lobster cream sauce, fries, white cheddar, garlic bread crumbs",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Pink Persia Poutine",
    place:       "Frittenwerk",
    pic:         "pink-persia-poutine.jpg",
    city:        "Düsseldorf",
    country:     "Germany",
    price:       7.59,
    map:         "https://goo.gl/maps/HeaZbTSqr2oHzwmLA",
    description: "large portion of house fries with fluffy falafel balls, pink hummus, crispy arugula and refreshing lemon aioli",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },

  {
    name: "Vladimir Poutine",
    place: "Hop Cat",
    pic: "vladimir-poutine.jpg",
    city: "Grand Rapids",
    state: "MI",
    country: "US",
    map: "https://goo.gl/maps/TnDQwdAVYohrmkDNA",
    price: 14.36,
    description: "crack fries, chorizo gravy, yellow cheese, crispy bacon, scallions, perogies",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    } 
  },

  {
    name: "Short Rib Poutine",
    place: "Whiskey Cake",
    pic: "whiskey-cake.jpg",
    city: "Plano",
    state: "TX",
    country: "US",
    map: "https://goo.gl/maps/1TLS5xZ9igx7afxh8",
    price: 6.53,
    description: "hand cut fries, beef pan jus, local goat cheese, pickled veg, sunny side up local egg",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    } 
  },

  {
    name: "Okie Poutine",
    place: "The Mule",
    pic: "okie-poutine.jpg",
    city: "Oklahoma City",
    state: "OK",
    country: "US",
    map: "https://g.page/TheMuleOKC?share",
    price: 11.09,
    description: "French Fries, White Gravy, Watonga Cheese Curds",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    } 
  },

  {
    name: "Playoff Poutine",
    place: "Lambeau Field",
    pic: "playoff-poutine.jpg",
    city: "Green Bay",
    state: "WI",
    country: "US",
    map: "https://goo.gl/maps/igBWK8kwuwEp8AFz8",
    price: 23.51,
    description: "French fries, Johnsonville “brat coins” fresh cheese curds, Cudahy slab bacon, chicken gravy, beer mustard crema & scallions in an old style football helmet.",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    } 
  },

  {
    name: "Duck Confit Poutine",
    place: "Refreshment Port",
    pic: "refreshment-port-duck-confit.jpg",
    city: "Orlando",
    state: "FL",
    country: "US",
    map: "https://goo.gl/maps/FHhrc3KEAxvSGWWE8",
    price: 11.28,
    description: "with Fig Demi-Sauce and Brie Cheese Fondue",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    }
  },

  {
    name: "Puotine",
    place: "Bar Ostannya Barykada",
    pic: "ukraine-barricade.jpg",
    city: "Kyiv",
    country: "Ukraine",
    map: "https://goo.gl/maps/pTMWMPQh5d99zBhm9",
    price: 7.63,
    //description: "French Fries with Beef Brisket, Beer-Cheese Sauce, and Poutine Gravy topped with Crispy Onions",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },

  {
    name: "The Unicorn Poutine",
    place: "The Enchanted Poutinerie",
    pic: "enchanted-unicorn.jpg",
    city: "North York",
    state: "ON",
    country: "Canada",
    map: "https://goo.gl/maps/pTMWMPQh5d99zBhm9",
    price: 10.79,
    description: "Fresh Rainbow Quebec Curds, Multi-colour gravy",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    },
  },

  {
    name: "Beef Brisket Poutine",
    place: "Refreshment Port",
    pic: "refreshment-port-brisket.jpg",
    city: "Orlando",
    state: "FL",
    country: "US",
    map: "https://goo.gl/maps/FHhrc3KEAxvSGWWE8",
    price: 11.94,
    description: "French Fries with Beef Brisket, Beer-Cheese Sauce, and Poutine Gravy topped with Crispy Onions",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },


  {
    name:        "Poutine",
    place:       "Red Cow",
    pic:         "redcow.jpg",
    city:        "Minneapolis",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/8vMxcWNKqB5KqBUo7",
    price:       14.55,
    description: "house fries w/ Summit beer cheese and braised beef",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },

];