(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../../../../../../node_modules/reveal.js/dist/reveal.esm.js'), require('../../../../../../node_modules/reveal.js/plugin/markdown/markdown.esm.js'), require('../../../../../../node_modules/reveal.js/plugin/notes/notes.esm.js')) :
    typeof define === 'function' && define.amd ? define(['../../../../../../node_modules/reveal.js/dist/reveal.esm.js', '../../../../../../node_modules/reveal.js/plugin/markdown/markdown.esm.js', '../../../../../../node_modules/reveal.js/plugin/notes/notes.esm.js'], factory) :
    (global = global || self, factory(global.Reveal, global.Markdown, global.RevealNotes));
}(this, (function (Reveal, Markdown, RevealNotes) { 'use strict';

    Reveal = Reveal && Object.prototype.hasOwnProperty.call(Reveal, 'default') ? Reveal['default'] : Reveal;
    Markdown = Markdown && Object.prototype.hasOwnProperty.call(Markdown, 'default') ? Markdown['default'] : Markdown;
    RevealNotes = RevealNotes && Object.prototype.hasOwnProperty.call(RevealNotes, 'default') ? RevealNotes['default'] : RevealNotes;

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
            });
            deck.initialize();
        });

})));
