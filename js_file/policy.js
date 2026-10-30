
/* ==========================================================
   SaniCare Org - Policy Page Line Animation

   Each policy section receives a divider line.

   Line 1: Draws from left to right.
   Line 2: Draws from right to left.
   Line 3: Draws from left to right.
   Line 4: Draws from right to left.

   Each line animates when the user scrolls down
   and reaches that policy section.
   ========================================================== */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        // Find the main policy container.
        var policyWrap = document.querySelector(".policy-wrap");

        // Stop if the policy container does not exist.
        if (!policyWrap) {
            return;
        }

        // Get all policy sections.
        var policySections = policyWrap.querySelectorAll(".policy-section");

        // Stop if there are no policy sections.
        if (policySections.length === 0) {
            return;
        }

        // Check whether the user prefers reduced motion.
        var reduceMotion = window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Create one divider line for every policy section.
        for (var i = 0; i < policySections.length; i++) {

            var line = document.createElement("div");

            line.className = "policy-line";

            // Alternate the drawing direction.
            if (i % 2 === 0) {

                // First, third, fifth lines:
                // Draw from left to right.
                line.style.transformOrigin = "left center";

            } else {

                // Second, fourth, sixth lines:
                // Draw from right to left.
                line.style.transformOrigin = "right center";

            }

            // Add the line to its policy section.
            policySections[i].appendChild(line);
        }

        // Get all the divider lines.
        var policyLines = policyWrap.querySelectorAll(".policy-line");

        // If reduced motion is enabled, show all lines without animation.
        if (reduceMotion) {

            policyLines.forEach(function (line) {
                line.classList.add("is-drawn");
            });

            return;
        }

        // Check whether the browser supports IntersectionObserver.
        if (!("IntersectionObserver" in window)) {

            // Show all lines if scroll observation is unavailable.
            policyLines.forEach(function (line) {
                line.classList.add("is-drawn");
            });

            return;
        }

        // Add this class to hide the lines before animation.
        policyWrap.classList.add("lines-animate");

        // Watch the lines as the user scrolls down.
        var observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    // Start drawing when a line enters the screen.
                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-drawn");

                        // Stop watching after the line has drawn.
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        // Observe every divider line.
        policyLines.forEach(function (line) {
            observer.observe(line);
        });

    });

})();
