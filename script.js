const whatsappNumber = "201019634984"; // رقمك

const menuData = {
  "Coffee Boba": [
    ["Iced Latte Boba", 150, 180],
    ["Dalgona Boba", 170, 195],
    ["Spanish Latte Boba", 155, 185]
  ],
  "Popping Boba": [
    ["Red Bull Popping Boba", 150, 175],
    ["Popping Boba Fruit Tea", 130, 160]
  ],
  "Milk Tea Boba": [
    ["Classic Boba", 120, 155],
    ["Brown Sugar Milk Boba", 135, 165]
  ],
  "Taro Boba": [
    ["Classic Taro", 150, 180],
    ["Brown Sugar Taro Boba", 160, 185]
  ],
  "Matcha Boba": [
    ["Matcha Boba", 155, 185],
    ["Brown Sugar Matcha", 165, 185],
    ["Strawberry Matcha Latte Boba", 175, 190]
  ],
  "Milk Boba": [
    ["Oreo Milk Boba", 160, 195],
    ["Lotus Milk Boba", 160, 195],
    ["Chocolate Milk Boba", 155, 190],
    ["Caramel Milk Boba", 155, 190],
    ["Red Velvet Milk Boba", 160, 195],
    ["Mango Milk Boba", 150, 180],
    ["Blueberry Milk Boba", 150, 180],
    ["Strawberry Milk Boba", 150, 180],
    ["Watermelon Milk Boba", 150, 180]
  ]
};

const cart = [];
const menu = document.getElementById("menu");

for (let category in menuData) {
  const section = document.createElement("section");
  section.innerHTML = `<h2>${category}</h2>`;

  menuData[category].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<h4>${item[0]}</h4>`;

    // زر Medium
    const btnMedium = document.createElement("button");
    btnMedium.textContent = `Medium - ${item[1]} EGP`;
    btnMedium.onclick = () => {
      cart.push(`${item[0]} (Medium - ${item[1]} EGP)`);
      renderCart();
    };

    // زر Large
    const btnLarge = document.createElement("button");
    btnLarge.textContent = `Large - ${item[2]} EGP`;
    btnLarge.onclick = () => {
      cart.push(`${item[0]} (Large - ${item[2]} EGP)`);
      renderCart();
    };

    div.appendChild(btnMedium);
    div.appendChild(btnLarge);

    section.appendChild(div);
  });

  menu.appendChild(section);
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });
}

function sendWhatsApp() {
  if (cart.length === 0) return alert("Cart is empty");
  const message = "Hello Bamboo 🌿%0AOrder:%0A" + cart.join("%0A");
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`);
}
