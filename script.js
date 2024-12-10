document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.querySelector('.categories');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    // Calculate the width to scroll (card width + gap)
    const scrollAmount = 200 + 16; // 200px (card width) + 1rem (gap)

    nextBtn.addEventListener('click', () => {
        categoriesContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        categoriesContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Hide/show navigation buttons based on scroll position
    categoriesContainer.addEventListener('scroll', () => {
        const maxScroll = categoriesContainer.scrollWidth - categoriesContainer.clientWidth;
        
        prevBtn.style.display = categoriesContainer.scrollLeft <= 0 ? 'none' : 'flex';
        nextBtn.style.display = categoriesContainer.scrollLeft >= maxScroll ? 'none' : 'flex';
    });

    // Initial button visibility check
    prevBtn.style.display = 'none';
});