window.onload = function() {
    // default language
    let currentLang = "en";

    // load translation file
    async function loadTranslations(lang) {
        const response = await fetch(`../locales/${lang}.json`);
        return response.json();
    }

    // apply translations
    async function applyTranslations(lang) {
        const translations = await loadTranslations(lang);

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[key]) {
                el.textContent = translations[key];
            }
        })
    }

    //listen to language changes
    document.getElementById("languageSwitcher").addEventListener("change", (e) => {
        currentLang = e.target.value;
        applyTranslations(currentLang);
    })

    // initialize
    applyTranslations(currentLang);
}

