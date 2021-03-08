// ==UserScript==
// @name         Resolution Spoofer
// @namespace    https://mehvix.com
// @version      2020-03-07
// @description  Spoofs window.screen to 1920x1080 to prevent browser fingerprinting.
// @author       Mehvix
// @include      http://*
// @include      https://*
// @run-at       document-start
// @license      GNU General Public License v3
// @downloadURL  https://raw.githubusercontent.com/Mehvix/resolution-spoofer/master/resolution-spoofer.js
// @updateURL    https://raw.githubusercontent.com/Mehvix/resolution-spoofer/master/resolution-spoofer.js
// ==/UserScript==

(function () {
    "use strict";

    var set = function (obj, prop, val) {
        Object.defineProperty(obj, prop, {
            enumerable: true,
            configurable: true,
            value: val,
        });
    };

    var spoofScreenResolution = function () {
        var screen = {
            width: 1920,
            height: 1080,
            depth: 24,

            // what I got on my laptop with 'regular' W10 taskbar            
            // vp = view port
            vpwidth: 1915,
            vpheight: 893,
            taskbar: 40,
        };

        // w3schools (https://www.w3schools.com/jsref/obj_window.asp) list a lot more properties than those below. Testing in Brave, I do not see any thing beyond what is listed below so I'm assuming they're deprecated

        // window
        set(window, "innerWidth", screen.width);
        set(window, "innerHeight", screen.height);
        set(window, "outerWidth", screen.width);
        set(window, "outerHeight", screen.height);

        // > screen
        set(window.screen, "availHeight", screen.height - screen.taskbar);
        set(window.screen, "availLeft", 0);
        set(window.screen, "availTop", 0);
        set(window.screen, "availWidth", screen.width);
        set(window.screen, "colorDepth", screen.colorDepth);
        set(window.screen, "height", screen.height);
        // set(window.screen, "orientation", ...); // todo get most common orientation
        set(window.screen, "pixelDepth", screen.depth);
        set(window.screen, "width", screen.width);

        // > VisualViewport
        // Read-only: https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
        // set(window.visualViewport, "width", screen.vpwidth);
        // set(window.visualViewport, "height", screen.vpwidth);
        

        // div
        // read only too?
        // div = document.getElementsByTagName("div")[0];
        // set(div, "clientWidth", screen.vpwidth);
        // set(div, "clientHeight", screen.vpheight);

    };

    spoofScreenResolution();
})();
