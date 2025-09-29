const icons = document.querySelectorAll('.topnav-right a');
let activePopup = null;

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const popupId = icon.dataset.popup;
        const popup = popupId ? document.getElementById(popupId) : null;

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            if (activePopup) activePopup.classList.remove('active');
            activePopup = null;
            return;
        }

        icons.forEach(i => i.classList.remove('active'));
        if (activePopup) activePopup.classList.remove('active');

        icon.classList.add('active');
        if (popup) {
            popup.classList.add('active');
            activePopup = popup;
        }
    });
});

const shapeContainers = document.querySelectorAll('#appsPopup .shape-container');
shapeContainers.forEach(container => {
    container.addEventListener('click', (e) => {
        // e.preventDefault(); // href block
        container.classList.add('squircle-morph');
        setTimeout(() => {
            container.classList.remove('squircle-morph');
        }, 300); // squircle
    });
});

// close pop-up when clicking outside it
document.addEventListener('click', (e) => {
    if (!activePopup) return;
    const isClickInsidePopup = activePopup.contains(e.target);
    const isClickOnTrigger = document.querySelector('.iconApps').contains(e.target);
    if (!isClickInsidePopup && !isClickOnTrigger) {
        activePopup.classList.remove('active');
        document.querySelector('.topnav-right a.active')?.classList.remove('active');
        activePopup = null;
    }
});

const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('#searchInput');

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchBox.classList.add('active-border');
        setTimeout(() => {
            searchBox.classList.remove('active-border');
        }, 80);
    }
});