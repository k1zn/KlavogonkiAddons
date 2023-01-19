// ==UserScript==
// @name         VK Formatting Fix
// @version      1.0
// @description  << >> to « »
// @author       k1zn
// @match        *://vk.com/*
// @match        *://vk.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const to_be_replaced = {
        "<<": "«",
        ">>": "»",
        "--": "—"
    }

    document.querySelectorAll(`div[contenteditable="true"]`).forEach(e=> {
        e.addEventListener("input", (beb) => {
            if (/<<|>>|--/.exec(beb.target.innerText)) {
                beb.target.innerText = beb.target.innerText.replace(/<<|>>|--/gi, (matched) => to_be_replaced[matched]);
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
