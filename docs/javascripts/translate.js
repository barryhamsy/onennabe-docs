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

  // ── 4. Build the button + dropdown and attach to header ─────────────────
  function buildButton() {
    if (document.getElementById("translate-btn")) return; // already built

    var header = document.querySelector(".md-header__inner");
    if (!header) return;

    // Translate element container
    var elDiv = document.getElementById("google_translate_element");
    if (!elDiv) {
      elDiv = document.createElement("div");
      elDiv.id = "google_translate_element";
      document.body.appendChild(elDiv);
    }

    // Button
    var btn = document.createElement("button");
    btn.id = "translate-btn";
    btn.innerHTML = "🌐 Translate";
    btn.title = "Translate this page";
    header.appendChild(btn);

    // Dropdown wrapper
    var dropdown = document.createElement("div");
    dropdown.id = "translate-dropdown";
    dropdown.appendChild(elDiv);
    document.querySelector(".md-header").appendChild(dropdown);

    // Toggle
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("visible");
    });

    // Close on outside click
    document.addEventListener("click", function () {
      dropdown.classList.remove("visible");
    });

    // Save language whenever user picks one
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

  // ── 5. Re-apply translation on MkDocs instant navigation ────────────────
  // MkDocs Material uses a custom navigation that doesn't do full page reloads.
  // We hook into the document$ observable exposed by the theme.
  function hookNavigation() {
    if (typeof document$ !== "undefined") {
      // Material theme's RxJS observable — fires on every page load
      document$.subscribe(function () {
        buildButton();
        applyLang(getSavedLang());
      });
    } else {
      // Fallback: poll until document$ is available
      var tries = 0;
      var iv = setInterval(function () {
        if (typeof document$ !== "undefined") {
          clearInterval(iv);
          hookNavigation();
        }
        if (++tries > 20) {
          clearInterval(iv);
          // Last resort: just build on DOMContentLoaded
          buildButton();
          applyLang(getSavedLang());
        }
      }, 300);
    }
  }

  document.addEventListener("DOMContentLoaded", hookNavigation);

})();