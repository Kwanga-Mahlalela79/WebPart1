/* ==========================================================
   SaniCare Org - homepage scroll effects

   As each section scrolls into view it plays a short effect, once:
     - Services cards      slide up
     - Payment methods     zoom in
     - Email sign-up box   fades in

   How it works: this script adds a "reveal" class that hides an
   element, then adds "is-visible" when it reaches the screen. The
   animation itself lives in style.css. If this script fails to load,
   nothing is ever hidden, so the page still works.
   ========================================================== */

(function () {
    "use strict";

    /* Set to false if you want the effects to play even when the
       computer is set to reduce motion (for example, when Windows
       "Animation effects" is switched off). */
    var RESPECT_REDUCED_MOTION = true;

    // Pause between cards that appear together (seconds)
    var STAGGER = 0.12;
    var MAX_DELAY = 0.36;

    /* ---------- Stop here if effects should not run ---------- */

    var reduceMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) ||
        (RESPECT_REDUCED_MOTION && reduceMotion)) {
        return;
    }

    /* ---------- Pick the elements and their effects ---------- */

    var groups = [
        { selector: ".services .services-col",       effect: "reveal-up"   },
        { selector: ".paymethods .paymethods-col",   effect: "reveal-zoom" },
        { selector: ".emailsubscription",            effect: "reveal-fade" }
    ];

    var targets = [];

    groups.forEach(function (group) {
        var found = document.querySelectorAll(group.selector);

        for (var i = 0; i < found.length; i++) {
            found[i].classList.add("reveal", group.effect);
            targets.push(found[i]);
        }
    });

    /* ---------- Reveal each one when it scrolls into view ---------- */

    var observer = new IntersectionObserver(function (entries) {
        var position = 0;

        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }

            // Cards that arrive together (like a row of three) follow
            // one another slightly. A card arriving alone has no delay.
            var delay = Math.min(position * STAGGER, MAX_DELAY);
            position += 1;

            entry.target.style.setProperty("--reveal-delay", delay + "s");
            entry.target.classList.add("is-visible");

            // Play once only
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
    });

    targets.forEach(function (element) {
        observer.observe(element);
    });

})();