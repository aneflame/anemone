const icons = document.querySelectorAll('.topnav-right a');
let activePopup = null;

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // 1
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            if (activePopup) activePopup.style.display = 'none';
            activePopup = null;
            return;
        }

        // 2
        icons.forEach(i => i.classList.remove('active'));
        if (activePopup) activePopup.style.display = 'none';

        // 3
        icon.classList.add('active');
        const popupId = icon.dataset.popup;
        if (popupId) {
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = 'block';
                activePopup = popup;
            }
        }
    });
});