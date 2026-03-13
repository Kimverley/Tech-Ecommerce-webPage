// array of product objects

const products = [
  {
    id: 1,
    name: "PHANTOM X",
    category: "headphones",
    price: 349,
    description:
      "Wireless noise-cancelling headphones with premium sound quality",
    icon: "🎧",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "WAVE PRO",
    category: "speakers",
    price: 599,
    description: "High-fidelity bluetooth speaker with 360° sound",
    icon: "🔊",
    badge: "NEW",
  },
  {
    id: 3,
    name: "PULSE MINI",
    category: "earbuds",
    price: 179,
    description: "True wireless earbuds with active noise cancellation",
    icon: "🎵",
    badge: "HOT",
  },
  {
    id: 4,
    name: "SONIC ELITE",
    category: "headphones",
    price: 499,
    description: "Studio-grade over-ear headphones for professionals",
    icon: "🎧",
    badge: "PRO",
  },
  {
    id: 5,
    name: "BASS BOOM",
    category: "speakers",
    price: 299,
    description: "Portable speaker with powerful bass and 20hr battery",
    icon: "🔊",
    badge: null,
  },
  {
    id: 6,
    name: "AIR PODS+",
    category: "earbuds",
    price: 149,
    description: "Lightweight wireless earbuds with crystal clear sound",
    icon: "🎵",
    badge: "SALE",
  },
  {
    id: 7,
    name: "CABLE PREMIUM",
    category: "accessories",
    price: 49,
    description: "Gold-plated audio cable for audiophile-grade connection",
    icon: "🔌",
    badge: null,
  },
  {
    id: 8,
    name: "STUDIO RACK",
    category: "accessories",
    price: 89,
    description: "Premium headphone stand with USB charging ports",
    icon: "📱",
    badge: null,
  },
  {
    id: 9,
    name: "THUNDER SUB",
    category: "speakers",
    price: 799,
    description: "Wireless subwoofer with deep bass response",
    icon: "🔊",
    badge: "PREMIUM",
  },
  {
    id: 10,
    name: "ECHO MAX",
    category: "headphones",
    price: 429,
    description: "Premium wireless headphones with spatial audio",
    icon: "🎧",
    badge: null,
  },
  {
    id: 11,
    name: "VIBE 360",
    category: "speakers",
    price: 399,
    description: "Smart speaker with voice assistant and multi-room audio",
    icon: "🔊",
    badge: null,
  },
  {
    id: 12,
    name: "MINI BEATS",
    category: "earbuds",
    price: 99,
    description: "Compact wireless earbuds perfect for workouts",
    icon: "🎵",
    badge: "BUDGET",
  },
];

//create another array to hold the selected cart itmes - array of objects
let cart = [];

//function to display all products
function displayProducts() {
  console.log(products);

  const grid = document.getElementById("productsGrid");
  let html = "";
  //loop through products array and create html for each
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    html += `
        <div class = "product-card">
                ${product.badge}
                <div class = "product-icon">${product.icon}</div>
                <div class = "product-category">${product.category}</div>
                <div class = "product-name">${product.name}</div>
                <div class = "product-description">${product.description}</div>

            <div class = "product-footer">
                <div class = "product-price">$${product.price}</div>
                <button class = "add-btn" onclick="addToCart(${product.id})">ADD TO CART </button>
            </div>
        </div>
        `;
  }

  grid.innerHTML = html;
}

//function to addCart()

function addToCart(productId) {
  //to find the product in an array - products
  let selectedProduct = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      selectedProduct = products[i];
      break;
    }
  }

  // if the selectedProduct
  if (selectedProduct) {
    let exsistingItem = null;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        exsistingItem = cart[i];
        break;
      }
    }

    if (exsistingItem) {
      exsistingItem.quantity++;
    } else {
      cart.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        description: selectedProduct.description,
        icon: selectedProduct.icon,
        quantity: 1,
      });
    }
    console.log(cart);
  }
  updateCartDisplay();
}

//function to update cart count
function updateCartDisplay() {
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  //calc total item

  let totalItem = 0;
  for (let i = 0; i < cart.length; i++) {
    totalItem += cart[i].quantity;
    console.log(totalItem);
  }
  cartCount.textContent = totalItem;

  //display cart items

  if (cart.length === 0) {
    cartItems.innerHTML = `
        <div style="text-align:center;padding:40px;color:#999;">Your cart is empty</div>`;
    cartTotal.textContent = "$0";
    return;
  }

  let cartHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartHTML += `
        <div class="cart-item">
            <div class="cart-item-name">${item.name} * ${item.quantity} </div>
            <div class="cart-item-price">${itemTotal} </div>
        </div>
        `;
  }
  cartItems.innerHTML = cartHTML;
  cartTotal.textContent = `$${total}`;
}

//function toggleCart()
function toggleCart() {
  const modal = document.getElementById("cartModal");
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
  } else {
    modal.classList.add("active");
  }
}

displayProducts();
