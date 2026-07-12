document.addEventListener("DOMContentLoaded", function () {
  var btn = document.createElement("button");
  btn.textContent = "🌐 Translate";
  btn.id = "translate-btn";
  btn.onclick = function () {
    var el = document.getElementById("google_translate_element");
    el.style.display = el.style.display === "none" ? "block" : "none";
  };
  document.querySelector(".md-header__inner").appendChild(btn);
});