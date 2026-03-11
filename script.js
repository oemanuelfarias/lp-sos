document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do AOS (Animate On Scroll) com proteção contra CLS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disableMutationObserver: true, // Crucial para performance / CLS
            once: true,
            duration: 800,
            easing: 'ease-out-cubic',
            offset: 50
        });
    }

    // Parallax Effect para a Seção 3 (Assistência Técnica)
    const parallaxWrapper = document.querySelector('.parallax-wrapper');
    const layerBack = document.querySelector('.layer-back');
    const layerMid = document.querySelector('.layer-mid');
    const layerFront = document.querySelector('.layer-front');

    if (parallaxWrapper && layerBack && layerMid && layerFront) {
        let scheduled = false;
        window.addEventListener('scroll', () => {
            if (!scheduled) {
                requestAnimationFrame(() => {
                    // Requer que a seção esteja visível na viewport
                    const rect = parallaxWrapper.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    if (rect.top <= windowHeight && rect.bottom >= 0) {
                        // Fator de progressão do scroll (0 a 1 em relação ao centro da viewport)
                        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                        
                        // Mapeia o progresso para variações suaves
                        // Layer Back (afunda lento)
                        const backY = scrollProgress * 30; // move para baixo
                        // Layer Mid (levita suave)
                        const midY = scrollProgress * -20; // move para cima leve
                        // Layer Front (move rápido para cima esquerda)
                        const frontY = scrollProgress * -60;
                        const frontX = scrollProgress * -20;

                        // Aplica transformações (preservando o initial translate e scale definidos via CSS)
                        layerBack.style.transform = `translate(calc(-50% + ${0}px), calc(-50% + ${backY}px)) scale(0.9)`;
                        layerMid.style.transform = `translate(calc(-50% + ${0}px), calc(-50% + ${midY}px)) scale(1)`;
                        layerFront.style.transform = `translate(calc(-50% + ${frontX}px), calc(-50% + ${frontY}px)) scale(1.1)`;
                    }
                    scheduled = false;
                });
                scheduled = true;
            }
        }, { passive: true });
    }

    // ========================================
    // TRACKING: Eventos personalizados (GTM)
    // ========================================
    window.dataLayer = window.dataLayer || [];

    // WhatsApp clicks (whatsapp_click) e Rota clicks (rota_sr, rota_sc)
    document.querySelectorAll('[data-track]').forEach(function(el) {
        el.addEventListener('click', function() {
            var eventName = this.getAttribute('data-track');
            var pushData = { event: eventName };

            // Para whatsapp_click, inclui a loja como parametro
            if (eventName === 'whatsapp_click') {
                var loja = this.getAttribute('data-track-loja') || 'desconhecida';
                pushData.loja = loja;
                pushData.button_text = this.textContent.trim();
            }

            // Para rota_sr e rota_sc, inclui o endereco
            if (eventName === 'rota_sr' || eventName === 'rota_sc') {
                pushData.endereco = this.textContent.trim();
            }

            dataLayer.push(pushData);
        });
    });
});
