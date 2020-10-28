// ==UserScript==
// @name         Gmail Selector
// @namespace    https://github.com/uhalid/GmailSelector
// @version      1.0
// @description  Select your email with shortcuts without using your mouse
// @author       Uhalid
// @match       *://mail.google.com/*
// @grant        none
// @icon https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-64.png
// ==/UserScript==

(function () {
    'use strict';
    const keyCodes = {
        18: 'alt',
        48: '0',
        49: '1',
        50: '2',
        51: '3',
        52: '4',
        53: '5',
        54: '6',
        55: '7',
        56: '8',
        57: '9',

    }
    const datatooltipValues = {
        'it-IT': {
            "tr": "Seleziona",
            "back": "Posta in arrivo"
        },
        'en-EN': {
            "tr": "Select",
            "back": "Inbox"
        },
    }
    const backKeyCodes = {
        "it-IT": 220,
        "en-EN": 192
    }
    var map = {};
    var userLang = navigator.language || navigator.userLanguage;
    var TrdatatooltipValue = datatooltipValues[userLang].tr;
    var BackdatatooltipValue = datatooltipValues[userLang].back;
    console.log(BackdatatooltipValue);
    var BackKeyCode = backKeyCodes[userLang];
    console.log(BackKeyCode);
    function openEMail(num) {
        num -= 1;
        var tdElement = document.querySelectorAll(`[data-tooltip="${TrdatatooltipValue}"]`);
        var trElement = tdElement[1].closest("tr");
        //In case google changes jscontroller value
        var valueAttribute = trElement.getAttribute("jscontroller");

        var emalils = document.querySelectorAll(`[jscontroller="${valueAttribute}"]`);
        emalils[num].click();
    }

    function back() {
        var goBack = document.querySelector(`[data-tooltip="${BackdatatooltipValue}"]`);

        goBack.click();
    }

    onkeydown = onkeyup = function (e) {
        e = e || event;
        map[e.keyCode] = e.type == 'keydown';

        if (map[18] && map[BackKeyCode]) {
            back();
            map = {};
        }
        if (map[18] && map[49]) { // ALT + 1
            map = {};
            openEMail(1);
        }
        if (map[18] && map[50]) { // ALT + 2
            map = {};
            openEMail(2);
        }
        if (map[18] && map[51]) { // ALT + 3
            map = {};
            openEMail(3);
        }
        if (map[18] && map[52]) { // ALT + 4
            map = {};
            openEMail(4);
        }
        if (map[18] && map[53]) { // ALT + 5
            map = {};
            openEMail(5);
        }
        if (map[18] && map[54]) { // ALT + 6
            map = {};
            openEMail(6);
        }
        if (map[18] && map[55]) { // ALT + 7
            map = {};
            openEMail(7);
        }
        if (map[18] && map[56]) { // ALT + 8
            map = {};
            openEMail(8);
        }
        if (map[18] && map[57]) {// ALT + 9
            map = {};
            openEMail(9);
        }
        if (map[18] && map[48]) {// ALT + 10
            map = {};
            openEMail(10);
        }
    }
})();