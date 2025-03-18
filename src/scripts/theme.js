const toggleTheme = () => {
    const toggleButton = document.querySelector('.button-header');
    const icon = toggleButton.querySelector('img');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.src = 'src/assets/icons/sun-icon.svg';
        toggleButton.setAttribute('aria-label', 'Alternar para modo claro');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.src = 'src/assets/icons/sun-icon.svg';
            toggleButton.setAttribute('aria-label', 'Alternar para modo claro');
        } else {
            localStorage.setItem('theme', 'light');
            icon.src = 'src/assets/icons/moon-icon.svg';
            toggleButton.setAttribute('aria-label', 'Alternar para modo escuro');
        }
    });
};

export default toggleTheme;
