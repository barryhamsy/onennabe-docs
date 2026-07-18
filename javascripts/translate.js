(function () {

  // ── 1. Inject Google Translate script once ──────────────────────────────
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: "en",
      includedLanguages: "ms,zh-CN,th,id,ar,fr,de,ja,ko,pt,es,tr,vi",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    }, "google_translate_element");
  };

  if (!document.getElementById("gt-script")) {
    var s = document.createElement("script");
    s.id = "gt-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(s);
  }

  // ── 2. Remember chosen language across pages ────────────────────────────
  function getSavedLang() { return localStorage.getItem("suo_lang") || ""; }
  function saveLang(lang) { localStorage.setItem("suo_lang", lang); }

  // ── 3. Apply saved language after translate widget is ready ─────────────
  function applyLang(lang) {
    if (!lang) return;
    var tries = 0;
    var iv = setInterval(function () {
      var sel = document.querySelector(".goog-te-combo");
      if (sel) {
        sel.value = lang;
        sel.dispatchEvent(new Event("change"));
        clearInterval(iv);
      }
      if (++tries > 40) clearInterval(iv);
    }, 250);
  }

  // ── 4. Build button — works on ALL page types including standalone tabs ──
  function buildButton() {
    if (document.getElementById("translate-btn")) return;

    // Try multiple possible header selectors
    var anchor =
      document.querySelector(".md-header__inner .md-header__title") ||
      document.querySelector(".md-header__inner") ||
      document.querySelector(".md-header");

    if (!anchor) return;

    // Translate element container
    var elDiv = document.getElementById("google_translate_element");
    if (!elDiv) {
      elDiv = document.createElement("div");
      elDiv.id = "google_translate_element";
      document.body.appendChild(elDiv);
    }

    // Button — append to header using fixed positioning so it always shows
    var btn = document.createElement("button");
    btn.id = "translate-btn";
    btn.innerHTML = "🌐 Translate";
    btn.title = "Translate this page";

    // Append to header element
    var header = document.querySelector(".md-header");
    header.style.position = "relative";
    header.appendChild(btn);

    // Dropdown
    var dropdown = document.createElement("div");
    dropdown.id = "translate-dropdown";
    dropdown.appendChild(elDiv);
    header.appendChild(dropdown);

    // Toggle
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("visible");
    });

    // Close on outside click
    document.addEventListener("click", function () {
      dropdown.classList.remove("visible");
    });

    // Save language when user picks one
    var observer = new MutationObserver(function () {
      var sel = document.querySelector(".goog-te-combo");
      if (sel && !sel._suoBound) {
        sel._suoBound = true;
        sel.addEventListener("change", function () {
          saveLang(sel.value);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ── 5. Hook into MkDocs Material navigation + fallback ──────────────────
  function init() {
    buildButton();
    applyLang(getSavedLang());
  }

  function hookNavigation() {
    if (typeof document$ !== "undefined") {
      document$.subscribe(function () {
        // Remove old button on each navigation so it gets rebuilt fresh
        var old = document.getElementById("translate-btn");
        if (old) old.remove();
        var oldD = document.getElementById("translate-dropdown");
        if (oldD) oldD.remove();
        init();
      });
    } else {
      var tries = 0;
      var iv = setInterval(function () {
        if (typeof document$ !== "undefined") {
          clearInterval(iv);
          hookNavigation();
        }
        if (++tries > 20) {
          clearInterval(iv);
          init();
        }
      }, 300);
    }
  }

  document.addEventListener("DOMContentLoaded", hookNavigation);

})();