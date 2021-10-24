// ==UserScript==
// @name         New Game Fix
// @namespace    https://github.com/k1zn/KlavogonkiAddons
// @version      1.0
// @description  Fix for keyboard shortcut " Ctrl + -> "
// @author       kiZzn
// @match        *://klavogonki.ru/g/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && e.ctrlKey === true) {
            let gameId = new URLSearchParams(window.location.search).get('gmid')
            location.href = '/g/' + gameId + '.replay';
        }
    });
})();
