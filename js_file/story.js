/* ==========================================================
   SaniCare Org - story page

   Reads ?id= from the address, finds that story in stories.js,
   and fills in the page.

   Likes, comments and donations are demo features only.
   Nothing is saved to a database or sent to a payment service.
   ========================================================== */

(function () {
    "use strict";

    /* ---------- Helpers ---------- */

    function $(id) {
        return document.getElementById(id);
    }

    // 24600 -> "R24 600"
    function money(n) {
        return "R" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function make(tag, className, text) {
        var el = document.createElement(tag);

        if (className) {
            el.className = className;
        }

        if (text !== undefined) {
            el.textContent = text;
        }

        return el;
    }

    /* ---------- Find the story ---------- */

    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"), 10);

    var story = null;

    for (var i = 0; i < STORIES.length; i++) {
        if (STORIES[i].id === id) {
            story = STORIES[i];
            break;
        }
    }

    if (!story) {
        $("storyWrap").hidden = true;
        $("storyMissing").hidden = false;
        $("heroTag").textContent = "OOPS";
        $("heroTitle").textContent = "Story not found";

        document.title = "Story not found | SaniCare Organization";
        return;
    }

    /* ---------- Hero and page title ---------- */

    document.title = story.title + " | SaniCare Organization";

    $("heroTag").textContent = story.tag;
    $("heroTitle").textContent = story.title;

 
    /* ---------- Banner image with scroll parallax ---------- */

    var banner = $("storyBanner");
    banner.replaceChildren();

    if (story.image) {
        var photo = make("img", "story-banner-image");

        photo.src = "_images/" + story.image;
        photo.alt = story.title;
        photo.loading = "eager";
        photo.decoding = "async";

        banner.appendChild(photo);

        /* Set to false if the picture never moves on your computer.
           (Windows "Animation effects" being switched off asks the
           browser to reduce motion, which this page respects.) */
        var RESPECT_REDUCED_MOTION = true;

        var imageAvailable = true;
        var waitingForFrame = false;

        var reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        // Moves the picture up or down depending on where the banner
        // sits on screen, so it shifts as the page is scrolled.
        function updateBannerPosition() {
            waitingForFrame = false;

            if (!imageAvailable) {
                return;
            }

            if (RESPECT_REDUCED_MOTION && reduceMotion.matches) {
                photo.style.transform = "translate3d(0, 0, 0) scale(1.04)";
                return;
            }

            var box = banner.getBoundingClientRect();
            var viewport = window.innerHeight ||
                document.documentElement.clientHeight;

            // +1 = banner just entering at the bottom of the screen,
            //  0 = banner in the middle, -1 = banner just leaving the top
            var progress = (box.top + box.height / 2 - viewport / 2) /
                (viewport / 2 + box.height / 2);
            progress = Math.max(-1, Math.min(1, progress));

            // The picture is taller than the banner (see the CSS), which
            // leaves spare room to slide into without showing any edges.
            var maxShift = box.height * 0.15 * 0.85;
            var shift = -progress * maxShift;

            photo.style.transform =
                "translate3d(0, " + shift.toFixed(1) + "px, 0) scale(1.05)";
        }

        // Scroll events fire very often, so only redraw once per frame
        function requestBannerUpdate() {
            if (!waitingForFrame) {
                waitingForFrame = true;
                window.requestAnimationFrame(updateBannerPosition);
            }
        }

        window.addEventListener("scroll", requestBannerUpdate, { passive: true });
        window.addEventListener("resize", requestBannerUpdate);

        if (reduceMotion.addEventListener) {
            reduceMotion.addEventListener("change", requestBannerUpdate);
        }

        photo.addEventListener("error", function () {
            imageAvailable = false;
            photo.remove();

            banner.className = "story-banner thumb-" + story.thumb;

            var fallbackIcon = make("i", "fa " + story.icon);
            fallbackIcon.setAttribute("aria-hidden", "true");

            banner.appendChild(fallbackIcon);
        });

        photo.addEventListener("load", requestBannerUpdate);
        requestBannerUpdate();

    } else {
        banner.className = "story-banner thumb-" + story.thumb;

        var bigIcon = make("i", "fa " + story.icon);
        bigIcon.setAttribute("aria-hidden", "true");

        banner.appendChild(bigIcon);
    }


    /* ---------- Date, location and reading time ---------- */

    var meta = $("storyMeta");

    [
        ["fa-calendar-o", story.date],
        ["fa-map-marker", story.location],
        ["fa-clock-o", story.readTime]
    ].forEach(function (item) {
        var span = make("span");

        var icon = make("i", "fa " + item[0]);
        icon.setAttribute("aria-hidden", "true");

        span.appendChild(icon);
        span.appendChild(document.createTextNode(" " + item[1]));

        meta.appendChild(span);
    });

    /* ---------- Story text ---------- */

    var body = $("storyBody");

    story.paragraphs.forEach(function (paragraph) {
        body.appendChild(make("p", "", paragraph));
    });

    /* ---------- Like button ---------- */

    var likes = story.likes;
    var liked = false;

    function showLikes() {
        $("likeCount").textContent = likes;

        $("likeBtn").classList.toggle("liked", liked);

        $("likeBtn").setAttribute(
            "aria-pressed",
            liked ? "true" : "false"
        );

        $("likeIcon").className =
            liked ? "fa fa-heart" : "fa fa-heart-o";

        $("likeLabel").textContent = liked ? "Liked" : "Like";
    }

    $("likeBtn").addEventListener("click", function () {
        liked = !liked;

        likes += liked ? 1 : -1;

        showLikes();
    });

    showLikes();

    /* ---------- Comments ---------- */

    var commentTotal = 0;

    function showCommentCount() {
        $("commentCount").textContent = commentTotal;
    }

    function addComment(name, text, when, atTop) {
        var item = make("div", "comment");

        var avatar = make(
            "div",
            "comment-avatar",
            name.charAt(0).toUpperCase()
        );

        avatar.setAttribute("aria-hidden", "true");

        var content = make("div", "comment-body");
        var head = make("div", "comment-head");

        head.appendChild(make("strong", "", name));
        head.appendChild(make("small", "", when));

        content.appendChild(head);
        content.appendChild(make("p", "", text));

        item.appendChild(avatar);
        item.appendChild(content);

        var list = $("commentList");

        if (atTop && list.firstChild) {
            list.insertBefore(item, list.firstChild);
        } else {
            list.appendChild(item);
        }

        commentTotal += 1;
        showCommentCount();
    }

    // Display two sample comments for each story.
    var first = SAMPLE_COMMENTS[
        story.id % SAMPLE_COMMENTS.length
    ];

    var second = SAMPLE_COMMENTS[
        (story.id + 3) % SAMPLE_COMMENTS.length
    ];

    addComment(first.name, first.text, "2 days ago", false);
    addComment(second.name, second.text, "5 days ago", false);

    $("commentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var name = $("commentName").value.trim() || "Anonymous";
        var text = $("commentText").value.trim();

        if (!text) {
            $("commentError").textContent =
                "Please write a comment before posting.";

            $("commentText").focus();
            return;
        }

        $("commentError").textContent = "";

        addComment(name, text, "Just now", true);

        $("commentName").value = "";
        $("commentText").value = "";
    });

    /* ---------- Donation panel ---------- */

    var raised = story.raised;
    var donors = story.donors;
    var chosenAmount = 0;
    var method = "PayPal";

    function showFunding() {
        var pct = Math.min(
            100,
            Math.round((raised / story.goal) * 100)
        );

        $("raisedAmt").textContent = money(raised);
        $("goalAmt").textContent = money(story.goal);
        $("donorCount").textContent = donors;
        $("progressPct").textContent = pct;

        $("progressBar").setAttribute("aria-valuenow", pct);
        $("progressFill").style.width = pct + "%";
    }

    // Start the progress bar at zero so it grows into place.
    $("progressFill").style.width = "0%";

    showFunding();

    var amountButtons = document.querySelectorAll(".amount-btn");

    function clearAmountButtons() {
        for (var a = 0; a < amountButtons.length; a++) {
            amountButtons[a].classList.remove("active");
        }
    }

    for (var b = 0; b < amountButtons.length; b++) {
        amountButtons[b].addEventListener("click", function () {
            clearAmountButtons();

            this.classList.add("active");

            chosenAmount = parseInt(
                this.getAttribute("data-amount"),
                10
            );

            $("customAmount").value = "";
            $("donateMsg").textContent = "";
        });
    }

    $("customAmount").addEventListener("input", function () {
        clearAmountButtons();

        chosenAmount = parseInt(this.value, 10) || 0;

        $("donateMsg").textContent = "";
    });

    var payButtons = document.querySelectorAll(".pay-btn");

    for (var p = 0; p < payButtons.length; p++) {
        payButtons[p].addEventListener("click", function () {
            for (var q = 0; q < payButtons.length; q++) {
                payButtons[q].classList.remove("active");
            }

            this.classList.add("active");

            method = this.getAttribute("data-method");
        });
    }

    $("donateBtn").addEventListener("click", function () {
        var msg = $("donateMsg");

        if (!chosenAmount || chosenAmount < 1) {
            msg.className = "donate-msg error";

            msg.textContent =
                "Please choose or enter an amount first.";

            return;
        }

        raised += chosenAmount;
        donors += 1;

        showFunding();

        msg.className = "donate-msg success";

        msg.textContent =
            "Thank you for your " + money(chosenAmount) +
            " donation via " + method +
            "! (Demo only: no payment was processed.)";

        clearAmountButtons();

        $("customAmount").value = "";
        chosenAmount = 0;
    });

    /* ---------- Newer and older story links ---------- */

    var nav = $("storyNav");
    var newer = null;
    var older = null;

    for (var s = 0; s < STORIES.length; s++) {
        if (STORIES[s].id === story.id - 1) {
            newer = STORIES[s];
        }

        if (STORIES[s].id === story.id + 1) {
            older = STORIES[s];
        }
    }

    function navLink(target, label, isNext) {
        if (!target) {
            return make("span");
        }

        var link = make(
            "a",
            "story-nav-link" + (isNext ? " next" : "")
        );

        link.href = "story.html?id=" + target.id;

        link.appendChild(make("small", "", label));
        link.appendChild(make("span", "", target.title));

        return link;
    }

    nav.appendChild(
        navLink(newer, "\u2039 Newer story", false)
    );

    nav.appendChild(
        navLink(older, "Older story \u203A", true)
    );

})();