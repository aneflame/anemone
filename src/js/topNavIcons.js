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
