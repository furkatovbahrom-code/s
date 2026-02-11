document.querySelectorAll(".product").forEach(product => {

  const price = parseInt(product.dataset.price);
  const name = product.dataset.name;

  const minus = product.querySelector(".minus");
  const plus = product.querySelector(".plus");
  const countEl = product.querySelector(".count");
  const totalEl = product.querySelector(".total-price");
  const buyBtn = product.querySelector(".buy");

  let count = 1;

  plus.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
    totalEl.textContent = count * price;
  });

  minus.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countEl.textContent = count;
      totalEl.textContent = count * price;
    }
  });

  buyBtn.addEventListener("click", () => {

    const total = count * price;

    const message = Сәлеметсіз бе! Мен ${name} өнімінен ${count} дана алғым келеді. Жалпы баға: ${total} ₸;

    const phoneNumber = "77000000000"; // O'ZINGNI NOMERINGNI YOZ

    const url = https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)};

    window.open(url, "_blank");
  });

});
