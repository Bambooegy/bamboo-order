function order(itemName) {
  const size = prompt(
    "Choose size:\nM = Medium\nL = Large",
    "M"
  );

  if (!size) return;

  const phone = "201019634984"; // ← ضع رقم واتساب هنا
  const message = `New Order:%0AItem: ${itemName}%0ASize: ${size.toUpperCase()}`;

  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}

