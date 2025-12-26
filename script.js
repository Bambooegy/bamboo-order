let order = [];

function addToOrder(name, element) {
  let size = element.previousElementSibling.value;
  order.push(`${name} - ${size}`);
  alert("Added to order ✅");
}

function sendWhatsApp() {
  if (order.length === 0) {
    alert("Please add items first");
    return;
  }

  let message = "Hello Bamboo 🌿%0A%0AMy Order:%0A";
  order.forEach(item => {
    message += `- ${item}%0A`;
  });

  let phone = "201019634984"; // ← حط رقم الواتساب هنا
  let url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}
