document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');

    langSelect.addEventListener('change', () => {
        const selectedLang = langSelect.value;
        changeLanguage(selectedLang);
    });

    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-uk]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        document.title = document.querySelector('title').getAttribute(`data-${lang}`);
    }

    changeLanguage('uk');
});
