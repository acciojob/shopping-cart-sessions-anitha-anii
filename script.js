// Function to add a product to the cart
    function addToCart(event) {
      const product = event.currentTarget;
      const productId = product.dataset.id;
      const productName = product.dataset.name;
      const productPrice = product.dataset.price;

      const cart = getCartData();

      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
      }

      // Save the updated cart data
      saveCartData(cart);

      // Refresh the cart display
      displayCartItems();
    }

    // Function to get the cart data from session storage
    function getCartData() {
      const cartData = sessionStorage.getItem('cart');
      return cartData ? JSON.parse(cartData) : [];
    }

    // Function to save the cart data to session storage
    function saveCartData(cart) {
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to display the cart items
    function displayCartItems() {
      const cartItems = document.getElementById('cartItems');
      cartItems.innerHTML = '';

      const cart = getCartData();

      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
      });
    }

    // Add event listeners to product list items
    const productList = document.getElementById('productList');
    const productItems = productList.getElementsByTagName('li');
    for (let i = 0; i < productItems.length; i++) {
      productItems[i].addEventListener('click', addToCart);
    }

    // Display the cart items on page load
    displayCartItems();

