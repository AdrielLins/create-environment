// ==UserScript==
// @name     Always Focus
// @version    0.1.1
// @description Makes tdInterativa always with focus.
// @include  http://tdinterativa.natura.net/*
// @run-at   document-start
// @grant    none
// @copyright  2018+, Adriel Lins Maciel
// ==/UserScript==

document.hasFocus = function () {
    return true;
};
