document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggleBtn = document.getElementById('claro_escuro');
    const themeIcon = document.getElementById('claro_escuro_icon');

    
    const imgModoEscuro = 'modo_escuro.png';
    const imgModoClaro = 'modo_claro.bg.png'; 

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.src = imgModoClaro;
            themeIcon.alt = 'Alternar para Modo Escuro';
        }
    } else {
        if (themeIcon) {
            themeIcon.src = imgModoEscuro;
            themeIcon.alt = 'Alternar para Modo Claro';
        }
    }

    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.src = imgModoClaro;
                
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.src = imgModoEscuro;
                
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});