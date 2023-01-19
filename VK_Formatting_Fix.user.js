// ==UserScript==
// @name         VK Quotes Fix
// @version      1.0
// @description  << >> to « »
// @author       k1zn
// @match        *://vk.com/*
// @match        *://vk.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll(`div[contenteditable="true"]`).forEach(e=> {
        e.addEventListener("input", (beb) => {
            if (/<<|>>/.exec(beb.target.innerText)) {
                beb.target.innerText = beb.target.innerText.replace(/<<|>>/gi, (matched) => matched.includes("<") ? "«" : "»");
                beb.target.focus();
                const sel = document.getSelection();
                if (sel.rangeCount) {
                    ['Start', 'End'].forEach(pos =>
                        sel.getRangeAt(0)["set" + pos](beb.target.firstChild, beb.target.firstChild.length)
                    )
                }
            };
        });
    });
})();
