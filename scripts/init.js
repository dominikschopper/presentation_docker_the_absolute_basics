import Reveal from   '/node_modules/reveal.js/dist/reveal.esm.js';
import Markdown from '/node_modules/reveal.js/plugin/markdown/markdown.esm.js';
import RevealNotes from '/node_modules/reveal.js/plugin/notes/notes.esm.js';

    document.addEventListener('DOMContentLoaded', (ev) => {
        let deck = new Reveal({
            width: 1200,
            height: 900,

            // Factor of the display size that should remain empty around the content
            margin: 0.04,
            minScale: 0.2,
            maxScale: 2.0,


            // Visibility rule for backwards navigation arrows; "faded", "hidden" or "visible"
            controlsBackArrows: 'faded',
            controlsLayout: 'bottom-right',

            // Display a presentation progress bar
            progress: false,
            slideNumber: true,
            showSlideNumber: 'all',
            hash: true,
            loop: true,

            plugins: [
                Markdown, RevealNotes
            ]
        })
        deck.initialize();

        const obj = document.getElementById('svg');
        console.log('<<<object', obj);
        let svg = null;
        const svgLayers = [  ];

        obj.addEventListener('load', (ev) => {
            svg = obj.contentDocument; // Zugriff auf das DOM im <object>
            console.log('ev %o svg %o', ev, svg);
            svgLayers.push(svg.querySelector('#fs-layer2'));
            svgLayers.push(svg.querySelector('#fs-layer3'));
            console.log('<<<layers', svgLayers);
                    // hiding everything by default
            svgLayers.forEach(el => {
                console.log('svg layer', el.id);
                el.setAttribute('opacity', '0');
            });
        });


        let nextLayer = 0;

        function showNextLayer() {
            if (nextLayer < 2) {
                console.log('shwing layer', nextLayer);
                svgLayers[nextLayer].setAttribute('opacity', '0.666');
                nextLayer += 1;
            }
        }
        deck.on('fragmentshown', event => {
            console.log('>>currentFragment', event.fragment);

            if (['svglayer1', 'svglayer2'].includes(event.fragment.id)) {
							showNextLayer();
						}
        });

    });