 function updateCartUI() {
      var cartItemsElement = document.getElementById('product-list');
      var cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

      // Clear the cart items
      cartItemsElement.innerHTML = '';

      // Add the cart items to the UI
      cartItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        cartItemsElement.appendChild(li);
      });
    }

    // Function to add a product to the cart
    function addToCart(event) {
      var product = event.target.parentNode.textContent.trim();
      var cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

      // Add the product to the cart
      cartItems.push(product);

      // Store the updated cart in session storage
      sessionStorage.setItem('cart', JSON.stringify(cartItems));

      // Update the cart UI
      updateCartUI();
    }

    // Add event listeners to the add-to-cart buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function (button) {
      button.addEventListener('click', addToCart);
    });

    // Initialize the cart UI on page load
    updateCartUI();

