document.querySelectorAll(".product").forEach(product => {

  const price = parseInt(product.dataset.price);
  const minus = product.querySelector(".minus");
  const plus = product.querySelector(".plus");
  const countEl = product.querySelector(".count");
  const totalEl = product.querySelector(".total-price");

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

});
