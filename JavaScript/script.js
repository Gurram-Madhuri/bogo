document.addEventListener("DOMContentLoaded", function () {
  const carts = document.querySelectorAll(".bogo_cart");
  const totalSpan = document.querySelector(".parcel p span");

  carts.forEach(function (cart) {
    const radio = cart.querySelector('input[type="radio"]');

    cart.addEventListener("click", function () {
      // Clear all selections
      carts.forEach(function (c) {
        c.classList.remove("active-cart");
        const r = c.querySelector('input[type="radio"]');
        if (r) r.checked = false; // Uncheck
        if (r) r.style.accentColor = " "; // unselected radio
      });

      // Set current cart
      cart.classList.add("active-cart");
      if (radio) radio.checked = true;
      if (radio) radio.style.accentColor = "blue";

      // Update price in parcel
      const price = cart.querySelector(".product_price h4");
      if (price) {
        totalSpan.textContent = price.textContent;
      }
    });
  });
});


