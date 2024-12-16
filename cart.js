document.addEventListener('DOMContentLoaded', () => {
    // Get all cart items
    const cartItems = document.querySelectorAll('.cart-item');
    
    cartItems.forEach(item => {
        const quantityInput = item.querySelector('input[type="number"]');
        const minusBtn = item.querySelector('.quantity-btn:first-child');
        const plusBtn = item.querySelector('.quantity-btn:last-child');
        const removeBtn = item.querySelector('.remove-btn');
        
        // Handle minus button click
        minusBtn.addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotals();
            }
        });
        
        // Handle plus button click
        plusBtn.addEventListener('click', () => {
            if (quantityInput.value < 10) {
                quantityInput.value = parseInt(quantityInput.value) + 1;
                updateTotals();
            }
        });
        
        // Handle manual quantity input
        quantityInput.addEventListener('change', () => {
            // Ensure value is between 1 and 10
            if (quantityInput.value < 1) quantityInput.value = 1;
            if (quantityInput.value > 10) quantityInput.value = 10;
            updateTotals();
        });
        
        // Handle remove button click
        removeBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to remove this item?')) {
                item.remove();
                updateTotals();
                
                // Check if cart is empty
                if (document.querySelectorAll('.cart-item').length === 0) {
                    showEmptyCart();
                }
            }
        });
    });
    
    // Function to update totals
    function updateTotals() {
        let subtotal = 0;
        const shipping = 29.99; // Fixed shipping cost
        
        // Calculate subtotal
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', '').replace(',', ''));
            const quantity = parseInt(item.querySelector('input[type="number"]').value);
            subtotal += price * quantity;
        });
        
        // Update summary display
        const summaryItems = document.querySelectorAll('.summary-item');
        summaryItems[0].querySelector('span:last-child').textContent = `$${subtotal.toFixed(2)}`;
        summaryItems[1].querySelector('span:last-child').textContent = `$${shipping.toFixed(2)}`;
        summaryItems[2].querySelector('span:last-child').textContent = `$${(subtotal + shipping).toFixed(2)}`;
    }
    
    // Function to show empty cart message
    function showEmptyCart() {
        const cartContainer = document.querySelector('.cart-items');
        cartContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="material-icons" style="font-size: 48px; color: #999;">shopping_cart</i>
                <p style="margin-top: 1rem; color: #666;">Your cart is empty</p>
                <a href="index.html" style="display: inline-block; margin-top: 1rem; color: #000; text-decoration: none;">
                    Continue Shopping
                </a>
            </div>
        `;
        
        // Hide summary and checkout
        document.querySelector('.cart-summary').style.display = 'none';
    }
    
    // Add click handler for checkout button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        alert('Checkout functionality coming soon!');
    });
    
    // Initial totals calculation
    updateTotals();
});