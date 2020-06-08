import Reveal from   './reveal.esm.js';
import Markdown from './plugin/markdown/markdown.esm.js';
import RevealNotes from './plugin/notes/notes.esm.js';

    document.addEventListener('DOMContentLoaded', (ev) => {
        let deck = new Reveal({
            width: 960,
            height: 700,

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
    });