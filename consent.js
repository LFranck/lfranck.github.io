/*
  Mesure d'audience Google Analytics, soumise au consentement du visiteur (RGPD / CNIL).
  Partagé par toutes les applis : <script src="consent.js" data-ga-id="G-…" defer></script>

  - Tant que le visiteur n'a pas accepté, rien n'est chargé depuis Google et aucun cookie n'est
    déposé : un bandeau "Accepter / Refuser" s'affiche en bas de page.
  - Accepter charge gtag.js (la balise Google fournie) ; le choix est mémorisé dans le navigateur
    (localStorage), le bandeau ne revient plus.
  - Refuser est aussi simple qu'accepter, et mémorisé de même.
  - Un petit bouton 🍪, en bas à gauche, rouvre le bandeau pour changer d'avis à tout moment :
    retirer son accord coupe la mesure tout de suite et efface les cookies _ga.
*/
(function () {
  const GA_ID = document.currentScript && document.currentScript.dataset.gaId;
  if (!GA_ID) return;
  const KEY = "lfranck.consent.v1"; // "granted" | "denied"

  let choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) { /* stockage indisponible : on redemande */ }
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch (e) {} };

  // La balise Google (gtag.js), chargée seulement après accord.
  function loadAnalytics() {
    window["ga-disable-" + GA_ID] = false;
    if (window.__lfAnalyticsLoaded) return;
    window.__lfAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  // Retrait de l'accord : coupe la mesure pour la suite de la visite et efface les cookies _ga
  // (sur le domaine courant et ses domaines parents, où Google peut les avoir posés).
  function stopAnalytics() {
    window["ga-disable-" + GA_ID] = true;
    const parts = location.hostname.split(".");
    const domains = [""];
    for (let i = 0; i < parts.length - 1; i++) domains.push("; domain=." + parts.slice(i).join("."));
    for (const c of document.cookie.split(";")) {
      const name = c.split("=")[0].trim();
      if (!/^_ga/.test(name)) continue;
      for (const d of domains) document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + d;
    }
  }

  const style = document.createElement("style");
  style.textContent = `
    #lfConsent {
      position:fixed; left:50%; bottom:16px; transform:translateX(-50%); z-index:2147483000;
      width:min(520px, calc(100% - 32px)); box-sizing:border-box;
      background:#1b1b1b; color:#eee; border:1px solid #333; border-radius:14px;
      box-shadow:0 12px 40px rgba(0,0,0,.5); padding:14px 16px;
      font:13.5px/1.45 system-ui,-apple-system,Segoe UI,sans-serif;
    }
    #lfConsent p { margin:0 0 12px; }
    #lfConsent .lfConsentActions { display:flex; gap:10px; justify-content:flex-end; flex-wrap:wrap; }
    #lfConsent button {
      grid-column:auto; margin:0; border-radius:10px; padding:8px 16px; font:inherit; font-weight:700;
      cursor:pointer; border:1px solid #444; background:none; color:#ddd;
    }
    #lfConsent button.lfAccept { background:#fff; color:#111; border-color:#fff; }
    #lfConsentManage {
      position:fixed; left:10px; bottom:10px; z-index:2147482999; margin:0; padding:0;
      width:30px; height:30px; border-radius:50%; border:1px solid #333; background:#1b1b1b;
      font-size:15px; line-height:1; cursor:pointer; opacity:.55;
    }
    #lfConsentManage:hover { opacity:1; }
  `;
  document.head.appendChild(style);

  function showBanner() {
    if (document.getElementById("lfConsent")) return;
    const box = document.createElement("div");
    box.id = "lfConsent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Consentement à la mesure d'audience");
    box.innerHTML =
      "<p>Avec votre accord, ce site utilise <strong>Google Analytics</strong> pour compter les " +
      "visites (cookies de mesure d'audience). Rien d'autre n'est collecté par ce site.</p>" +
      '<div class="lfConsentActions">' +
      '<button type="button" class="lfRefuse">Refuser</button>' +
      '<button type="button" class="lfAccept">Accepter</button></div>';
    box.querySelector(".lfAccept").addEventListener("click", () => decide("granted"));
    box.querySelector(".lfRefuse").addEventListener("click", () => decide("denied"));
    document.body.appendChild(box);
  }

  function showManageButton() {
    if (document.getElementById("lfConsentManage")) return;
    const btn = document.createElement("button");
    btn.id = "lfConsentManage";
    btn.type = "button";
    btn.textContent = "🍪";
    btn.title = "Cookies : modifier mon choix";
    btn.setAttribute("aria-label", "Cookies : modifier mon choix");
    btn.addEventListener("click", showBanner);
    document.body.appendChild(btn);
  }

  function decide(value) {
    save(value);
    if (value === "granted") loadAnalytics(); else stopAnalytics();
    const box = document.getElementById("lfConsent");
    if (box) box.remove();
    showManageButton();
  }

  if (choice === "granted") loadAnalytics();
  if (choice === "granted" || choice === "denied") showManageButton();
  else showBanner();
})();
