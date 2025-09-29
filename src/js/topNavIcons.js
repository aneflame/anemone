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
        e.preventDefault(); // href block
        container.classList.add('squircle-morph');
        setTimeout(() => {
            container.classList.remove('squircle-morph');
        }, 300); // Squircle
    });
});