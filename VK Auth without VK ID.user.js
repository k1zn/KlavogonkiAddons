// ==UserScript==
// @name         VK Auth without VK ID
// @version      1.0
// @description  Authorization in VK without VK ID
// @author       vk.com/kizzn
// @match        *://id.vk.com/auth
// @match        *://id.vk.com/auth*
// @match        *://oauth.vk.com/authorize?client_id=8172446*
// @match        *://oauth.vk.com/authorize?client_id=8172446
// @run-at       document-start
// @grant        none
// ==/UserScript==

if (location.host === "oauth.vk.com" && !document.title.includes("Вход")) {
    document.documentElement.innerHTML = `<center>Redirecting...</center>` // shittycode Yep yes
    location.href = "https://vk.com";
}
else if (location.host === "id.vk.com") location.href = "https://oauth.vk.com/authorize?client_id=8172446&scope=0&redirect_uri=https://vk.com&display=page&response_type=token&revoke=1";
