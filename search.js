
        // Filtering functionality
        const brandFilter = document.getElementById('brand-filter');
        const priceFilter = document.getElementById('price-filter');
        const cameraItems = document.querySelectorAll('.camera-item');

        brandFilter.addEventListener('change', filterItems);
        priceFilter.addEventListener('change', filterItems);

        function filterItems() {
            const selectedBrand = brandFilter.value.toLowerCase();
            const selectedPrice = priceFilter.value;
            
            cameraItems.forEach(item => {
                const brand = item.getAttribute('data-brand').toLowerCase();
                const price = parseInt(item.getAttribute('data-price'), 10);

                let showItem = true;

                // Filter by brand
                if (selectedBrand && brand !== selectedBrand) {
                    showItem = false;
                }

                // Filter by price
                if (selectedPrice) {
                    if (selectedPrice === '0-1000' && price > 1000) {
                        showItem = false;
                    } else if (selectedPrice === '1000-3000' && (price < 1000 || price > 3000)) {
                        showItem = false;
                    } else if (selectedPrice === '3000+' && price < 3000) {
                        showItem = false;
                    }
                }

                // Show or hide the item based on filters
                item.style.display = showItem ? 'block' : 'none';
            });
        }
  
