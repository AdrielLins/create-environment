// ==UserScript==
// @name     		AlwaysFocus
// @version      	1.0
// @description  	JavaScript Extension Td Interativa
// @author       	Adriel Lins Maciel <adriellm@gmail.com>
// @source   		https://github.com/AdrielLins/create-environment/blob/master/AllwaysOnFocus.js
// @match        	http://tdinterativa.natura.net/*
// @run-at   		document-start
// @grant    		none
// ==/UserScript==

document.hasFocus = function () {
    return true;
};