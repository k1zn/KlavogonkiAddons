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
            let item = localStorage.getItem("recent_games");
            let parsed = JSON.parse(item);
            if (parsed && parsed.length > 0) {
                let lastGame = parsed[0]?.params || console.error("There is no params in last game!");

                location.href = location.protocol + `//klavogonki.ru/create/?${new URLSearchParams(lastGame).toString() || "error=1"}&submit=1`
            }
        }
    });
})();
