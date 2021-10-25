// ==UserScript==
// @name         Fix 4pda.ru links
// @version      1.0
// @author       kizn
// @match        *://4pda.to/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.innerHTML = document.body.innerHTML.replace(/4pda.ru/g, '4pda.to');
})();