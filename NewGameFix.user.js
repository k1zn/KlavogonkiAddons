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
        if (e.ctrlKey) {
            let keyCode = e.keyCode || e.which;
            let gameId = new URLSearchParams(window.location.search).get('gmid')
            if (keyCode === 0x27 && gameId) location.href = '/g/' + gameId + '.replay';
        }
    });
})();
