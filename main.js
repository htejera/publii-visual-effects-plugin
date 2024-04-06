class VisualEffectsPlugin {
    constructor(API, name, config) {
        this.API = API;
        this.name = name;
        this.config = config;
    }

    addInsertions() {
        this.API.addInsertion('publiiFooter', this.injectToolbar.bind(this), 1, this);
        this.API.addInsertion('publiiFooter', this.injectCSS.bind(this), 1, this);
    }

    injectCSS() {
        const grayscaleValue = this.config.grayscale || '100%';
        const invertValue = this.config.invert || '100%';
        const sepiaValue = this.config.sepia || '100%';
        const positionStyle = this.config.comboPosition === 'left' ? 'left: 0;' : 'right: 0;';

        return `
            <style>
                .visual-effects-toolbar {
                    position: fixed;
                    bottom: 20px;
                    ${positionStyle}
                    z-index: 1000;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    background: rgba(255,255,255,0.8);
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                    
                }
                .visual-effects-toolbar button {
                    cursor: pointer;
                    padding: 5px 10px;
                    border: 1px solid #ddd;
                    background-color: #f5f5f5;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                .visual-effects-toolbar button:hover {
                    background-color: #e0e0e0;
                }

                .grayscale *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    -webkit-filter: grayscale(${grayscaleValue}); /* For Safari 6.0 - 9.0 */
                    filter: grayscale(${grayscaleValue});
                }

                .invert *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    filter: invert(${invertValue});
                }

                .sepia *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    filter: sepia(${sepiaValue});
                }

                .intensify *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    filter: saturate(2) contrast(150%);
                }

                .monospace *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    font-family: 'Courier New', Courier, monospace;
                }

                .hideImages img:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    visibility: hidden;
                }

                .forcedTransitions *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    transition: all 2s ease-in-out !important;
                }

                .removedTransitions *:not(.visual-effects-toolbar, .visual-effects-toolbar *) {
                    transition: none !important;
                }
            </style>
        `;
    }

    injectToolbar() {
        let targetElementSelector = this.config.parentSelector || 'body';
        let comboText = this.config.comboText || 'No Effects';
        let selectedLanguage = this.config.language || 'en';

        const texts = {
            en: {
                grayscale: "Grayscale",
                invert: "Invert",
                sepia: "Sepia",
                noEffect: "No effect",
                intensify: "Intensify",
                hideImages: "Hide images",
                monospace: "Monospace",
                forcedTransitions: "Forced transitions",
                removedTransitions: "Removed transitions"
            },
            es: {
                grayscale: "Escala de grises",
                invert: "Invertir",
                sepia: "Sepia",
                noEffect: "Sin efecto",
                intensify: "Intensificar",
                hideImages: "Ocultar imágenes",
                monospace: "Monospace",
                forcedTransitions: "Forzar transiciones",
                removedTransitions: "Remover transiciones"
            },
            de: {
                grayscale: "Graustufen",
                invert: "Invertieren",
                sepia: "Sepia",
                noEffect: "Kein Effekt",
                intensify: "Intensivieren",
                hideImages: "Bilder verbergen",
                monospace: "Monospace",
                forcedTransitions: "Erzwungene Übergänge",
                removedTransitions: "Übergänge entfernen"
            },
            fr: {
                grayscale: "Grisaille",
                invert: "Inverser",
                sepia: "Sépia",
                noEffect: "Aucun effet",
                intensify: "Intensifier",
                hideImages: "Cacher les images",
                monospace: "Monospace",
                forcedTransitions: "Transitions forcées",
                removedTransitions: "Supprimer les transitions"
            },
            it: {
                grayscale: "Scala di grigi",
                invert: "Inverti",
                sepia: "Sepia",
                noEffect: "Nessun effetto",
                intensify: "Intensificare",
                hideImages: "Nascondi immagini",
                monospace: "Monospace",
                forcedTransitions: "Transizioni forzate",
                removedTransitions: "Rimuovi transizioni"
            },
            pt: {
                grayscale: "Escala de cinza",
                invert: "Inverter",
                sepia: "Sépia",
                noEffect: "Sem efeito",
                intensify: "Intensificar",
                hideImages: "Esconder imagens",
                monospace: "Monoespaçado",
                forcedTransitions: "Transições forçadas",
                removedTransitions: "Remover transições"
            }
        };

        let textsForLanguage = texts[selectedLanguage];

        let toolbarHTML = `
            <div class="visual-effects-toolbar">
                <select id="visualEffectsSelect">
                    <option value="">${textsForLanguage.noEffect}</option>
                    <option value="grayscale">${textsForLanguage.grayscale}</option>
                    <option value="invert">${textsForLanguage.invert}</option>
                    <option value="sepia">${textsForLanguage.sepia}</option>
                    <option value="intensify">${textsForLanguage.intensify}</option>
                    <option value="hideImages">${textsForLanguage.hideImages}</option>
                    <option value="monospace">${textsForLanguage.monospace}</option>
                    <option value="forcedTransitions">${textsForLanguage.forcedTransitions}</option>
                    <option value="removedTransitions">${textsForLanguage.removedTransitions}</option>
                </select>
            </div>
        `;

        let scriptContent = `
            document.addEventListener("DOMContentLoaded", function() {
                let targetElement = document.querySelector('${targetElementSelector}');
                targetElement.insertAdjacentHTML('beforeend', \`${toolbarHTML}\`);

                const visualEffectsSelect = document.getElementById('visualEffectsSelect');
                visualEffectsSelect.addEventListener('change', function() {
                    const effect = this.value;
                    document.body.classList.remove("grayscale", "invert", "sepia", "intensify", "monospace", "hideImages", "forcedTransitions", "removedTransitions");
                    
                    if (effect !== "") {
                        document.body.classList.add(effect);
                        localStorage.setItem('pageActionEffect', effect);
                    } else {
                        localStorage.removeItem('pageActionEffect');
                    }
                });

                const savedEffect = localStorage.getItem('pageActionEffect');
                if (savedEffect) {
                    document.body.classList.add(savedEffect);
                    visualEffectsSelect.value = savedEffect;
                }
            });
        `;

        return `<script type="text/javascript">${scriptContent}</script>`;
    }
}

module.exports = VisualEffectsPlugin;
