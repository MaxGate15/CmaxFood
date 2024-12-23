document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page");
    const menuPage = document.getElementById("menu-page");
    const cartCount = document.getElementById("cart-count");
  
    let cart = [];
  
    /** LOGIN FORM HANDLER **/
    document.getElementById("login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      loginPage.style.display = "none";  // Hide the login page
      menuPage.style.display = "block";  // Show the menu page
    });
  
    /** ADD TO CART HANDLER **/
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const card = e.target.closest(".food-card");
        const selectedFood = {
          name: card.getAttribute("data-name"),
          price: parseFloat(card.getAttribute("data-price")),
          image: card.getAttribute("data-image"),
        };
        cart.push(selectedFood);
        updateCart();
        updateCartCount();
      });
    });
  
    /** UPDATE CART **/
    const cartContainer = document.createElement("div");
    const cartTotal = document.querySelector(".cart-total");
    cartContainer.classList.add("cart-container");
    menuPage.appendChild(cartContainer);
  
    function updateCart() {
      cartContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
  
        const img = document.createElement("img");
        img.src = item.image;
  
        const name = document.createElement("p");
        name.textContent = item.name;
  
        const price = document.createElement("p");
        price.textContent = `GH₵${item.price}`;
  
        cartItem.appendChild(img);
        cartItem.appendChild(name);
        cartItem.appendChild(price);
  
        cartContainer.appendChild(cartItem);
  
        total += item.price;
      });
  
      cartTotal.textContent = `Total: GH₵${total.toFixed(2)}`;
    }
  
    /** UPDATE CART ITEM COUNT **/
    function updateCartCount() {
      cartCount.textContent = `(${cart.length})`; // Update the count displayed next to the cart icon
      cartCount.classList.add("large"); // Make the cart count number larger when updated
      
      // Remove the 'large' class after a short time to return it to normal size
      setTimeout(() => {
        cartCount.classList.remove("large");
      }, 300);
    }
  });
  