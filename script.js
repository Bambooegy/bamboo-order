let cart = [];

function addItem(name, price) {
  cart.push({ name, price });
  alert(name + " added");
}

function sendWhatsApp() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "New Order:%0A";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} (${item.price} EGP)%0A`;
    total += item.price;
  });

  message += `%0ATotal: ${total} EGP`;

  let phone = "2010XXXXXXX"; // رقم الواتساب
  let url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}
