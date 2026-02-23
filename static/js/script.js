// Default Config
const defaultConfig = {
  site_title: 'Price Lens',
  tagline: 'Find the best prices instantly'
};

let config = { ...defaultConfig };

// Sample Data
const groceryData = [
    {
        "id":  1,
        "name":  "Amul Taaza Toned Milk",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "500ml",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  28,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  29,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  27,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  2,
        "name":  "Britannia Good Day Butter Cookies",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "200g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  35,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  34,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  36,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  3,
        "name":  "Tata Salt",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "1kg",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  22,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  23,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  21,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  4,
        "name":  "Fortune Sunflower Oil",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "1L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  145,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  149,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  143,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  5,
        "name":  "India Gate Basmati Rice",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "5kg",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  485,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  490,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  479,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  6,
        "name":  "Maggi Masala Noodles",
        "category":  "snacks",
        "emoji":  "[G]",
        "quantity":  "280g (4-pack)",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  48,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  50,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  47,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  7,
        "name":  "Nestle Everyday Dairy Whitener",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "400g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  175,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  178,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  172,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  8,
        "name":  "Parle-G Gold Biscuits",
        "category":  "snacks",
        "emoji":  "[G]",
        "quantity":  "1kg",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  80,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  82,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  79,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  9,
        "name":  "Amul Butter",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "100g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  55,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  54,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  56,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  10,
        "name":  "Red Label Natural Care Tea",
        "category":  "beverages",
        "emoji":  "[G]",
        "quantity":  "500g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  215,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  220,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  212,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  11,
        "name":  "Tata Sampann Toor Dal",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "1kg",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  135,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  138,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  133,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  12,
        "name":  "Aashirvaad Atta",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "5kg",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  245,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  249,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  242,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  13,
        "name":  "Surf Excel Matic Liquid",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "2L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  425,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  430,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  420,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  14,
        "name":  "Lizol Disinfectant Surface Cleaner",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "975ml",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  185,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  188,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  182,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  15,
        "name":  "Vim Dishwash Gel",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "750ml",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  105,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  108,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  103,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  16,
        "name":  "Colgate Strong Teeth",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "200g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  95,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  97,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  93,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  17,
        "name":  "Dettol Handwash",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "200ml",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  45,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  46,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  44,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  18,
        "name":  "Lays Classic Salted Chips",
        "category":  "snacks",
        "emoji":  "[G]",
        "quantity":  "52g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  20,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  20,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  19,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  19,
        "name":  "Haldirams Aloo Bhujia",
        "category":  "snacks",
        "emoji":  "[G]",
        "quantity":  "200g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  48,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  50,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  47,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  20,
        "name":  "Bru Instant Coffee",
        "category":  "beverages",
        "emoji":  "[G]",
        "quantity":  "50g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  118,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  120,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  115,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  21,
        "name":  "Nescafe Classic Instant Coffee",
        "category":  "beverages",
        "emoji":  "[G]",
        "quantity":  "50g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  165,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  168,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  163,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  22,
        "name":  "Mother Dairy Fresh Paneer",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "200g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  85,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  87,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  84,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  23,
        "name":  "Amul Fresh Cream",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "250ml",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  75,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  76,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  74,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  24,
        "name":  "Kissan Fresh Tomato Ketchup",
        "category":  "fruits",
        "emoji":  "[G]",
        "quantity":  "500g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  78,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  80,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  77,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  25,
        "name":  "Everest Garam Masala",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "100g",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  75,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  77,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  74,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  26,
        "name":  "Real Fruit Power Juice",
        "category":  "beverages",
        "emoji":  "[G]",
        "quantity":  "1L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  125,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  128,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  123,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  27,
        "name":  "Tropicana Orange Juice",
        "category":  "beverages",
        "emoji":  "[G]",
        "quantity":  "1L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  145,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  148,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  143,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  28,
        "name":  "Coca Cola",
        "category":  "beverages",
        "emoji":  "[G]",
        "quantity":  "2L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  90,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  92,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  89,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  29,
        "name":  "Sprite",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "2L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  90,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  91,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  88,
                           "color":  "bg-orange-500"
                       }
                   ]
    },
    {
        "id":  30,
        "name":  "Kwality Walls Vanilla Ice Cream",
        "category":  "dairy",
        "emoji":  "[G]",
        "quantity":  "1L",
        "prices":  [
                       {
                           "platform":  "Blinkit",
                           "price":  285,
                           "color":  "bg-green-500"
                       },
                       {
                           "platform":  "Zepto",
                           "price":  290,
                           "color":  "bg-purple-500"
                       },
                       {
                           "platform":  "Instamart",
                           "price":  280,
                           "color":  "bg-orange-500"
                       }
                   ]
    }
];

const clothingData = [
    {
        "id":  1,
        "name":  "Classic Cotton Crew Neck T-Shirt",
        "brand":  "Adidas",
        "category":  "tshirts",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  749,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  799,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  2,
        "name":  "Printed Round Neck T-Shirt",
        "brand":  "Nike",
        "category":  "tshirts",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1249,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1299,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  3,
        "name":  "Polo Collar T-Shirt",
        "brand":  "Puma",
        "category":  "tshirts",
        "size":  "XL",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  849,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  899,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  4,
        "name":  "V-Neck Casual T-Shirt",
        "brand":  "H&M",
        "category":  "tshirts",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  549,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  599,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  5,
        "name":  "Graphic Print T-Shirt",
        "brand":  "Zara",
        "category":  "tshirts",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1149,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1199,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  6,
        "name":  "Formal Cotton Shirt",
        "brand":  "Raymond",
        "category":  "tshirts",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1449,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1499,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  7,
        "name":  "Casual Checkered Shirt",
        "brand":  "Peter England",
        "category":  "tshirts",
        "size":  "XL",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  949,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  8,
        "name":  "Slim Fit Denim Shirt",
        "brand":  "Levis",
        "category":  "jeans",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1749,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1799,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  9,
        "name":  "Linen Casual Shirt",
        "brand":  "Zara",
        "category":  "tshirts",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1249,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1299,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  10,
        "name":  "Oxford Button-Down Shirt",
        "brand":  "Van Heusen",
        "category":  "tshirts",
        "size":  "XL",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1349,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1399,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  11,
        "name":  "Slim Fit Jeans",
        "brand":  "Levis",
        "category":  "jeans",
        "size":  "32",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  2449,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  2499,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  12,
        "name":  "Regular Fit Blue Jeans",
        "brand":  "Wrangler",
        "category":  "jeans",
        "size":  "34",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1949,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  13,
        "name":  "Skinny Fit Black Jeans",
        "brand":  "Diesel",
        "category":  "jeans",
        "size":  "30",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  3449,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  3499,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  14,
        "name":  "Relaxed Fit Jeans",
        "brand":  "Lee",
        "category":  "jeans",
        "size":  "36",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1749,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1799,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  15,
        "name":  "Distressed Denim Jeans",
        "brand":  "Pepe Jeans",
        "category":  "jeans",
        "size":  "32",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  2249,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  2299,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  16,
        "name":  "Basic Cotton T-Shirt",
        "brand":  "H&M",
        "category":  "tshirts",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  449,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  499,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  17,
        "name":  "Printed V-Neck T-Shirt",
        "brand":  "Forever 21",
        "category":  "tshirts",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  649,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  699,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  18,
        "name":  "Striped Casual T-Shirt",
        "brand":  "Zara",
        "category":  "tshirts",
        "size":  "S",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  849,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  899,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  19,
        "name":  "Crop Top T-Shirt",
        "brand":  "Bershka",
        "category":  "tshirts",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  749,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  799,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  20,
        "name":  "Oversized Graphic T-Shirt",
        "brand":  "Vero Moda",
        "category":  "tshirts",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  949,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  21,
        "name":  "Floral Maxi Dress",
        "brand":  "FabIndia",
        "category":  "ethnic",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1949,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  22,
        "name":  "A-Line Summer Dress",
        "brand":  "Zara",
        "category":  "ethnic",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  2449,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  2499,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  23,
        "name":  "Midi Wrap Dress",
        "brand":  "Mango",
        "category":  "ethnic",
        "size":  "S",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1749,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1799,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  24,
        "name":  "Casual Shirt Dress",
        "brand":  "H&M",
        "category":  "ethnic",
        "size":  "M",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1549,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1599,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  25,
        "name":  "Evening Cocktail Dress",
        "brand":  "Forever 21",
        "category":  "ethnic",
        "size":  "L",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  2249,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  2299,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  26,
        "name":  "High Waist Skinny Jeans",
        "brand":  "Levis",
        "category":  "jeans",
        "size":  "28",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  2249,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  2299,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  27,
        "name":  "Boyfriend Fit Jeans",
        "brand":  "Zara",
        "category":  "jeans",
        "size":  "30",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1949,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  28,
        "name":  "Flared Bootcut Jeans",
        "brand":  "Pepe Jeans",
        "category":  "jeans",
        "size":  "26",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  2449,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  2499,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  29,
        "name":  "Mom Fit Jeans",
        "brand":  "H&M",
        "category":  "jeans",
        "size":  "32",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1749,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1799,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  30,
        "name":  "Ripped Ankle Jeans",
        "brand":  "Forever 21",
        "category":  "jeans",
        "size":  "28",
        "emoji":  "[C]",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  1649,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  1699,
                           "color":  "bg-yellow-500"
                       }
                   ]
    }
];

const gadgetsData = [
    {
        "id":  1,
        "name":  "iPhone 15 Pro Max",
        "brand":  "Apple",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.7 inch, A17 Pro",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  159900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  157900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  2,
        "name":  "iPhone 15 Pro",
        "brand":  "Apple",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.1 inch, A17 Pro",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  134900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  132900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  3,
        "name":  "iPhone 15",
        "brand":  "Apple",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.1 inch, A16",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  79900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  78900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  4,
        "name":  "iPhone 14",
        "brand":  "Apple",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.1 inch",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  69900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  68900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  5,
        "name":  "Samsung Galaxy S24 Ultra",
        "brand":  "Samsung",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.8 inch, Snapdragon 8 Gen 3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  129999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  127999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  6,
        "name":  "Samsung Galaxy S24+",
        "brand":  "Samsung",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.7 inch, Snapdragon 8 Gen 3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  99999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  97999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  7,
        "name":  "Samsung Galaxy S23 FE",
        "brand":  "Samsung",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.4 inch, Exynos 2200",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  59999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  57999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  8,
        "name":  "OnePlus 12",
        "brand":  "OnePlus",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.82 inch, Snapdragon 8 Gen 3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  64999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  63999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  9,
        "name":  "OnePlus 11",
        "brand":  "OnePlus",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.7 inch, Snapdragon 8 Gen 2",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  56999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  55999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  10,
        "name":  "OnePlus Nord 3",
        "brand":  "OnePlus",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.74 inch, Dimensity 9000",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  33999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  32999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  11,
        "name":  "Google Pixel 8 Pro",
        "brand":  "Google",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.7 inch, Tensor G3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  106999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  104999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  12,
        "name":  "Google Pixel 8",
        "brand":  "Google",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.2 inch, Tensor G3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  75999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  73999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  13,
        "name":  "Xiaomi 14 Pro",
        "brand":  "Xiaomi",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.73 inch, Snapdragon 8 Gen 3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  79999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  77999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  14,
        "name":  "Xiaomi 13T Pro",
        "brand":  "Xiaomi",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.67 inch, Dimensity 9200+",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  49999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  47999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  15,
        "name":  "Vivo X100 Pro",
        "brand":  "Vivo",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.78 inch, Dimensity 9300",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  89999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  87999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  16,
        "name":  "Oppo Find X7",
        "brand":  "Oppo",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.7 inch, Snapdragon 8 Gen 3",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  84999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  82999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  17,
        "name":  "Realme GT 3",
        "brand":  "Realme",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "128GB, 6.74 inch, Snapdragon 8+ Gen 1",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  42999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  40999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  18,
        "name":  "Nothing Phone 2",
        "brand":  "Nothing",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.7 inch, Snapdragon 8+ Gen 1",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  44999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  42999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  19,
        "name":  "Motorola Edge 40 Pro",
        "brand":  "Motorola",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.67 inch, Snapdragon 8 Gen 2",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  49999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  47999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  20,
        "name":  "Asus ROG Phone 7",
        "brand":  "Asus",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "256GB, 6.78 inch, Snapdragon 8 Gen 2",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  79999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  77999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  21,
        "name":  "AirPods Pro 2nd Gen",
        "brand":  "Apple",
        "category":  "headphones",
        "emoji":  "[D]",
        "specs":  "ANC, MagSafe Charging, H2 Chip",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  26900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  25900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  22,
        "name":  "AirPods 3rd Gen",
        "brand":  "Apple",
        "category":  "headphones",
        "emoji":  "[D]",
        "specs":  "Spatial Audio, MagSafe Charging",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  19900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  18900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  23,
        "name":  "AirPods 2nd Gen",
        "brand":  "Apple",
        "category":  "headphones",
        "emoji":  "[D]",
        "specs":  "Wireless Charging Case",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  14900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  13900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  24,
        "name":  "AirPods Max",
        "brand":  "Apple",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, Spatial Audio, Premium",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  59900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  58900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  25,
        "name":  "Samsung Galaxy Buds 2 Pro",
        "brand":  "Samsung",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, 360 Audio, IPX7",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  17999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  16999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  26,
        "name":  "Samsung Galaxy Buds FE",
        "brand":  "Samsung",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, Ambient Sound",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  8999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  7999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  27,
        "name":  "OnePlus Buds Pro 2",
        "brand":  "OnePlus",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, Spatial Audio",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  11999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  10999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  28,
        "name":  "OnePlus Buds Z2",
        "brand":  "OnePlus",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, 38hr Battery",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  4999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  3999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  29,
        "name":  "Nothing Ear 2",
        "brand":  "Nothing",
        "category":  "headphones",
        "emoji":  "[D]",
        "specs":  "ANC, Low Latency",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  9999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  8999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  30,
        "name":  "Realme Buds Air 5 Pro",
        "brand":  "Realme",
        "category":  "headphones",
        "emoji":  "[D]",
        "specs":  "ANC, 50dB, LDAC",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  4999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  3999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  31,
        "name":  "Sony WH-1000XM5",
        "brand":  "Sony",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, 30hr Battery, LDAC",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  29990,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  28990,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  32,
        "name":  "Sony WH-1000XM4",
        "brand":  "Sony",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, 30hr Battery, Premium",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  24990,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  23990,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  33,
        "name":  "Bose QuietComfort 45",
        "brand":  "Bose",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, 24hr Battery, Comfort",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  32900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  31900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  34,
        "name":  "Bose QuietComfort Ultra",
        "brand":  "Bose",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, Spatial Audio, Premium",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  39900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  38900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  35,
        "name":  "Sennheiser Momentum 4",
        "brand":  "Sennheiser",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, 60hr Battery, Audiophile",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  34990,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  33990,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  36,
        "name":  "JBL Tour One M2",
        "brand":  "JBL",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, Spatial Sound, 50hr Battery",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  24999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  23999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  37,
        "name":  "Audio-Technica ATH-M50xBT2",
        "brand":  "Audio-Technica",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "Studio Quality, 50hr Battery",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  19999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  18999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  38,
        "name":  "Beats Studio Pro",
        "brand":  "Beats",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "ANC, Spatial Audio, 40hr Battery",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  34900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  33900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  39,
        "name":  "Beats Solo 4",
        "brand":  "Beats",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "On-Ear, 50hr Battery",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  22900,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  21900,
                           "color":  "bg-yellow-500"
                       }
                   ]
    },
    {
        "id":  40,
        "name":  "Marshall Major IV",
        "brand":  "Marshall",
        "category":  "phones",
        "emoji":  "[D]",
        "specs":  "80hr Battery, Iconic Design",
        "prices":  [
                       {
                           "platform":  "Amazon",
                           "price":  14999,
                           "color":  "bg-orange-500"
                       },
                       {
                           "platform":  "Flipkart",
                           "price":  13999,
                           "color":  "bg-yellow-500"
                       }
                   ]
    }
];

const flightsData = [
    {
        "airline":  "IndiGo",
        "from":  "Mumbai",
        "to":  "Delhi",
        "departure":  "06:00",
        "arrival":  "08:15",
        "duration":  "2h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4500,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4450,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Air India",
        "from":  "Mumbai",
        "to":  "Delhi",
        "departure":  "09:30",
        "arrival":  "11:45",
        "duration":  "2h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5200,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5150,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "SpiceJet",
        "from":  "Mumbai",
        "to":  "Delhi",
        "departure":  "14:00",
        "arrival":  "16:15",
        "duration":  "2h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4300,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4250,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Vistara",
        "from":  "Mumbai",
        "to":  "Delhi",
        "departure":  "19:00",
        "arrival":  "21:15",
        "duration":  "2h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5800,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5750,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "IndiGo",
        "from":  "Mumbai",
        "to":  "Delhi",
        "departure":  "22:30",
        "arrival":  "00:45",
        "duration":  "2h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4600,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4550,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Air India",
        "from":  "Delhi",
        "to":  "Mumbai",
        "departure":  "07:00",
        "arrival":  "09:20",
        "duration":  "2h 20m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5100,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5050,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "IndiGo",
        "from":  "Delhi",
        "to":  "Mumbai",
        "departure":  "12:00",
        "arrival":  "14:20",
        "duration":  "2h 20m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4400,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4350,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Vistara",
        "from":  "Delhi",
        "to":  "Mumbai",
        "departure":  "17:30",
        "arrival":  "19:50",
        "duration":  "2h 20m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5900,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5850,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "SpiceJet",
        "from":  "Delhi",
        "to":  "Mumbai",
        "departure":  "21:00",
        "arrival":  "23:20",
        "duration":  "2h 20m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4500,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4450,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "IndiGo",
        "from":  "Bangalore",
        "to":  "Delhi",
        "departure":  "06:30",
        "arrival":  "09:30",
        "duration":  "3h",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5800,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5750,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Air India",
        "from":  "Bangalore",
        "to":  "Delhi",
        "departure":  "11:00",
        "arrival":  "14:00",
        "duration":  "3h",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  6500,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  6450,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Vistara",
        "from":  "Bangalore",
        "to":  "Delhi",
        "departure":  "16:00",
        "arrival":  "19:00",
        "duration":  "3h",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  7200,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  7150,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "SpiceJet",
        "from":  "Bangalore",
        "to":  "Delhi",
        "departure":  "21:30",
        "arrival":  "00:30",
        "duration":  "3h",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5600,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5550,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "IndiGo",
        "from":  "Chennai",
        "to":  "Bangalore",
        "departure":  "07:00",
        "arrival":  "08:15",
        "duration":  "1h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  3200,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  3150,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Air India",
        "from":  "Chennai",
        "to":  "Bangalore",
        "departure":  "12:30",
        "arrival":  "13:45",
        "duration":  "1h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  3800,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  3750,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "SpiceJet",
        "from":  "Chennai",
        "to":  "Bangalore",
        "departure":  "17:00",
        "arrival":  "18:15",
        "duration":  "1h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  3100,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  3050,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Vistara",
        "from":  "Chennai",
        "to":  "Bangalore",
        "departure":  "20:30",
        "arrival":  "21:45",
        "duration":  "1h 15m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4200,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4150,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "IndiGo",
        "from":  "Hyderabad",
        "to":  "Mumbai",
        "departure":  "06:00",
        "arrival":  "07:45",
        "duration":  "1h 45m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4000,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  3950,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Air India",
        "from":  "Hyderabad",
        "to":  "Mumbai",
        "departure":  "10:30",
        "arrival":  "12:15",
        "duration":  "1h 45m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4600,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4550,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "SpiceJet",
        "from":  "Hyderabad",
        "to":  "Mumbai",
        "departure":  "15:00",
        "arrival":  "16:45",
        "duration":  "1h 45m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  3900,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  3850,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Vistara",
        "from":  "Hyderabad",
        "to":  "Mumbai",
        "departure":  "19:30",
        "arrival":  "21:15",
        "duration":  "1h 45m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5100,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5050,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "IndiGo",
        "from":  "Kolkata",
        "to":  "Delhi",
        "departure":  "07:30",
        "arrival":  "10:00",
        "duration":  "2h 30m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4800,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4750,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Air India",
        "from":  "Kolkata",
        "to":  "Delhi",
        "departure":  "13:00",
        "arrival":  "15:30",
        "duration":  "2h 30m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  5400,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5350,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "SpiceJet",
        "from":  "Kolkata",
        "to":  "Delhi",
        "departure":  "18:00",
        "arrival":  "20:30",
        "duration":  "2h 30m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  4700,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  4650,
                           "color":  "bg-red-500"
                       }
                   ]
    },
    {
        "airline":  "Vistara",
        "from":  "Kolkata",
        "to":  "Delhi",
        "departure":  "22:00",
        "arrival":  "00:30",
        "duration":  "2h 30m",
        "emoji":  "[F]",
        "prices":  [
                       {
                           "platform":  "Skyscanner",
                           "price":  6000,
                           "color":  "bg-blue-500"
                       },
                       {
                           "platform":  "MakeMyTrip",
                           "price":  5950,
                           "color":  "bg-red-500"
                       }
                   ]
    }
];

const busesData = [
    {
        "operator":  "Mumbai to Pune",
        "busType":  "AC Sleeper",
        "from":  "Mumbai",
        "to":  "Pune",
        "departure":  "06:00",
        "arrival":  "09:30",
        "duration":  "3h 30m",
        "emoji":  "[B]",
        "prices":  [
                       {
                           "platform":  "RedBus",
                           "price":  650,
                           "color":  "bg-red-500"
                       },
                       {
                           "platform":  "ZingBus",
                           "price":  620,
                           "color":  "bg-teal-500"
                       }
                   ]
    },
    {
        "operator":  "Mumbai to Pune",
        "busType":  "AC Seater",
        "from":  "Mumbai",
        "to":  "Pune",
        "departure":  "09:00",
        "arrival":  "12:30",
        "duration":  "3h 30m",
        "emoji":  "[B]",
        "prices":  [
                       {
                           "platform":  "RedBus",
                           "price":  450,
                           "color":  "bg-red-500"
                       },
                       {
                           "platform":  "ZingBus",
                           "price":  430,
                           "color":  "bg-teal-500"
                       }
                   ]
    },
    {
        "operator":  "Mumbai to Pune",
        "busType":  "Volvo AC",
        "from":  "Mumbai",
        "to":  "Pune",
        "departure":  "14:00",
        "arrival":  "17:30",
        "duration":  "3h 30m",
        "emoji":  "[B]",
        "prices":  [
                       {
                           "platform":  "RedBus",
                           "price":  750,
                           "color":  "bg-red-500"
                       },
                       {
                           "platform":  "ZingBus",
                           "price":  730,
                           "color":  "bg-teal-500"
                       }
                   ]
    },
    {
        "operator":  "Mumbai to Pune",
        "busType":  "AC Sleeper",
        "from":  "Mumbai",
        "to":  "Pune",
        "departure":  "22:00",
        "arrival":  "01:30",
        "duration":  "3h 30m",
        "emoji":  "[B]",
        "prices":  [
                       {
                           "platform":  "RedBus",
                           "price":  680,
                           "color":  "bg-red-500"
                       },
                       {
                           "platform":  "ZingBus",
                           "price":  650,
                           "color":  "bg-teal-500"
                       }
                   ]
    },
    {
        "operator":  "Delhi to Jaipur",
        "busType":  "AC Sleeper",
        "from":  "Delhi",
        "to":  "Jaipur",
        "departure":  "07:00",
        "arrival":  "12:30",
        "duration":  "5h 30m",
        "emoji":  "[B]",
        "prices":  [
                       {
                           "platform":  "RedBus",
                           "price":  850,
                           "color":  "bg-red-500"
                       },
                       {
                           "platform":  "ZingBus",
                           "price":  820,
                           "color":  "bg-teal-500"
                       }
                   ]
    },
    {
        "operator":  "Delhi to Jaipur",
        "busType":  "Volvo AC",
        "from":  "Delhi",
        "to":  "Jaipur",
        "departure":  "10:00",
        "arrival":  "15:30",
        "duration":  "5h 30m",
        "emoji":  "[B]",
        "prices":  [
                       {
                           "platform":  "RedBus",
                           "price":  950,
                           "color":  "bg-red-500"
                       },
                       {
                           "platform":  "ZingBus",
                           "price":  920,
                           "color":  "bg-teal-500"
                       }
                   ]
    },
    {
        "operator":  "Delhi to Jaipur",
        "busType":  "AC Seater",
