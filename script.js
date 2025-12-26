const whatsappNumber = "201019634984"; // رقمك

const menuData = {
  "Ice-Cream": [
    ["Mix flavor", 55, 115] // Medium و Large
  ],
  "Milkshake": [
    ["Strawberry Milkshake", 140, 165] // Medium و Large
    // Raspberry Milkshake غير منشور
  ],
  "Iced Coffee": [
    ["Iced Latte", 125],
    ["Iced Spanish Latte", 135],
    ["Iced Americano", 90]
  ],
  "Desserts": [
    ["Walnut and Caramel Cheesecake", 120],
    ["Lotus Cheesecake", 120],
    ["Blueberry Cheesecake", 120]
  ],
  "Hot Drinks": [
    ["Espresso", 60],
    ["Double Espresso", 85],
    ["Americano", 75],
    ["Cappuccino", 95],
    ["Caffè Latte", 95],
    ["Spanish Latte", 110],
    ["Macchiato", 95],
    ["Cortado", 95],
    ["French Coffee", 85],
    ["Flat White", 95],
    ["Mocha", 95],
    ["Turkish Coffee", 70],
    ["Black Tea", 45],
    ["Green Tea", 55],
    ["Hot Chocolate", 110]
  ],
  "Fresh Juices": [
    ["Fresh Mango", 85],
    ["Fresh Strawberry", 85],
    ["Orange Juice", 85],
    ["Lemon Mint", 85],
    ["Banana Milkshake", 85]
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

    if (item.length === 3) { // Medium و Large
      const btnMedium = document.createElement("button");
      btnMedium.textContent = `Medium - ${item[1]} EGP`;
      btnMedium.onclick = () => {
        cart.push(`${item[0]} (Medium - ${item[1]} EGP)`);
        renderCart();
      };

      const btnLarge = document.createElement("button");
      btnLarge.textContent = `Large - ${item[2]} EGP`;
      btnLarge.onclick = () => {
        cart.push(`${item[0]} (Large - ${item[2]} EGP)`);
        renderCart();
      };

      div.appendChild(btnMedium);
      div.appendChild(btnLarge);
    } else { // سعر واحد فقط
      const btnSingle = document.createElement("button");
      btnSingle.textContent = `${item[1]} EGP`;
      btnSingle.onclick = () => {
        cart.push(`${item[0]} (${item[1]} EGP)`);
        renderCart();
      };
      div.appendChild(btnSingle);
    }

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
