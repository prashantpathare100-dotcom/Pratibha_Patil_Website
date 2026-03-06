// assets/js/gallery.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    let currentIndex = 0;
    const totalImages = galleryItems.length;

    function openModal(index) {
        currentIndex = index;
        const imgSrc = galleryItems[index].querySelector('img').src;
        const imgAlt = galleryItems[index].querySelector('img').alt;
        
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        const imgSrc = galleryItems[currentIndex].querySelector('img').src;
        const imgAlt = galleryItems[currentIndex].querySelector('img').alt;
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        const imgSrc = galleryItems[currentIndex].querySelector('img').src;
        const imgAlt = galleryItems[currentIndex].querySelector('img').alt;
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
    }

    // Add click event to gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    // Modal controls
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrev);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            } else if (e.key === 'ArrowRight') {
                showNext();
            }
        }
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});





// assets/js/gallery-filter.js
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



// assets/js/gallery.js (updated)
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    let currentIndex = 0;
    const totalImages = galleryItems.length;

    function openModal(index) {
        currentIndex = index;
        const img = galleryItems[index].querySelector('img');
        const imgSrc = img.src;
        const imgAlt = img.alt;
        
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        if (modalCaption) modalCaption.textContent = imgAlt;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        const img = galleryItems[currentIndex].querySelector('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        if (modalCaption) modalCaption.textContent = img.alt;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        const img = galleryItems[currentIndex].querySelector('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        if (modalCaption) modalCaption.textContent = img.alt;
    }

    // Add click event to gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'ArrowLeft') showPrev();
            else if (e.key === 'ArrowRight') showNext();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});