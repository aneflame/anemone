const icons = document.querySelectorAll('.topnav-right a');
        let activePopup = null;

        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                // Якщо вже активний цей же елемент → вимикаємо
                if (icon.classList.contains('active')) {
                    icon.classList.remove('active');
                    if (activePopup) activePopup.style.display = 'none';
                    activePopup = null;
                    return;
                }

                // Інакше вимикаємо всі інші
                icons.forEach(i => i.classList.remove('active'));
                if (activePopup) activePopup.style.display = 'none';

                // Активуємо новий
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