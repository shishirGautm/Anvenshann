const buttons = document.querySelectorAll(".order-btn");
const modal = document.getElementById("orderModal");
const closeBtn = document.getElementById("closeModal");

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        productName.value = btn.dataset.product;
        productPrice.value = "Rs. " + btn.dataset.price;
        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};
