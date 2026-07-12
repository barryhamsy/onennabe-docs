// Inject Google Translate
(function () {
  // Add the translate element div to body
  var div = document.createElement("div");
  div.id = "google_translate_element";
  document.body.appendChild(div);

  // Load Google Translate script
  var script = document.createElement("script");
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);

  // Init function
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: "en",
      includedLanguages: "ms,zh-CN,th,id,ar,fr,de,ja,ko,pt,es,tr,vi",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    }, "google_translate_element");
  };

  // Add translate button to navbar after DOM loads
  document.addEventListener("DOMContentLoaded", function () {
    var interval = setInterval(function () {
      var header = document.querySelector(".md-header__inner");
      if (!header) return;
      clearInterval(interval);

      // Create 🌐 button
      var btn = document.createElement("button");
      btn.id = "translate-btn";
      btn.title = "Translate page";
      btn.innerHTML = "🌐 Translate";
      header.appendChild(btn);

      // Create dropdown container
      var dropdown = document.createElement("div");
      dropdown.id = "translate-dropdown";
      dropdown.appendChild(document.getElementById("google_translate_element"));
      document.querySelector(".md-header").appendChild(dropdown);

      // Toggle on click
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("visible");
      });

      // Close on outside click
      document.addEventListener("click", function () {
        dropdown.classList.remove("visible");
      });
    }, 100);
  });
})();