// Tests hors navigateur de la compréhension vocale d'echecs.html.
//
// Lancer depuis la racine du dépôt :   node tests/echecs-voix.test.js
// (ou avec un autre fichier :          node tests/echecs-voix.test.js chemin/vers/echecs.html)
//
// On extrait d'echecs.html le bloc "Compréhension des commandes vocales" (normalisation, tables de
// lettres et de chiffres, clé phonétique, parseVoiceCommand), repéré par deux commentaires-balises,
// et on l'exécute dans un contexte isolé avec les deux variables globales dont il dépend (FILES,
// pendingPromotion). Seule la traduction phrase -> intention est testée : ni le plateau, ni le
// choix entre plusieurs transcriptions, ni la vraie reconnaissance vocale.
// Code de sortie : 0 si tout passe, 1 sinon.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const file = process.argv[2] || path.join(__dirname, "..", "echecs.html");
const html = fs.readFileSync(file, "utf8");
const START = "// ---------- Compréhension des commandes vocales ----------";
const END = "// Coups légaux, pour le camp au trait";
const start = html.indexOf(START);
const end = html.indexOf(END);
if (start < 0 || end < 0) throw new Error("bloc vocal introuvable dans " + file + " (balises : « " + START + " » … « " + END + " »)");
const ctx = { FILES: ["a", "b", "c", "d", "e", "f", "g", "h"], pendingPromotion: null };
vm.createContext(ctx);
vm.runInContext(html.slice(start, end) + "\n;this.api = { phoneticKey, parseVoiceCommand };", ctx);
const { phoneticKey, parseVoiceCommand } = ctx.api;

// Intention -> texte court, pour comparer avec l'attendu.
const show = (i) => {
  if (!i) return "null";
  const n = (q) => String.fromCharCode(97 + q.col) + (8 - q.row);
  switch (i.kind) {
    case "move": return "move " + n(i.from) + "-" + n(i.to);
    case "pieceMove": return "pieceMove " + (i.type || "?") + " " + n(i.to);
    case "castle": return "castle " + i.side;
    case "promote": return "promote " + i.type;
    default: return i.kind;
  }
};

// [phrase transcrite, intention attendue, promotion en attente ?]
const CASES = [
  // Roque : homophones et variantes
  ["roque", "castle king"], ["roc", "castle king"], ["rock", "castle king"], ["Roc.", "castle king"],
  ["roquer", "castle king"], ["petit roque", "castle king"], ["petit roc", "castle king"],
  ["grand roque", "castle queen"], ["grand roc", "castle queen"], ["grande roque", "castle queen"],
  ["rauque", "castle king"], ["je roque", "castle king"],
  // Coups case -> case
  ["e2 e4", "move e2-e4"], ["E2 E4", "move e2-e4"], ["e2e4", "move e2-e4"], ["e2-e4", "move e2-e4"],
  ["e 2 e 4", "move e2-e4"], ["e deux e quatre", "move e2-e4"], ["de deux de quatre", "move d2-d4"],
  ["dé 2 dé 4", "move d2-d4"], ["b un c trois", "move b1-c3"], ["g huit f six", "move g8-f6"],
  ["e2 prend d3", "move e2-d3"], ["a sept a cinq", "move a7-a5"], ["h deux h trois", "move h2-h3"],
  ["euh 2 euh 4", "move e2-e4"],
  // Pièce + case (dont le bug "trois" pris pour "roi")
  ["cavalier f3", "pieceMove N f3"], ["cavalier f trois", "pieceMove N f3"],
  ["cheval f3", "pieceMove N f3"], ["cheval f trois", "pieceMove N f3"], ["chevaux c3", "pieceMove N c3"],
  ["cavaliers f3", "pieceMove N f3"],
  ["fou c4", "pieceMove B c4"], ["fou c'est 4", "pieceMove B c4"], ["tour d1", "pieceMove R d1"],
  ["dame h5", "pieceMove Q h5"], ["reine h5", "pieceMove Q h5"], ["roi e2", "pieceMove K e2"],
  ["pion e4", "pieceMove P e4"], ["e4", "pieceMove ? e4"], ["e quatre", "pieceMove ? e4"],
  ["f trois", "pieceMove ? f3"], ["g j'ai 3", "pieceMove ? g3"], ["cavalier g j'ai 3", "pieceMove N g3"],
  // Commandes
  ["annule", "undo"], ["annuler", "undo"], ["annulez", "undo"], ["annulé", "undo"], ["retour", "undo"],
  ["nouvelle partie", "newGame"], ["Nouvelles parties", "newGame"], ["recommence", "newGame"],
  ["recommencer", "newGame"],
  // Ne doit rien donner (faux positifs à éviter)
  ["bonjour", "null"], ["tout va bien", "null"], ["je croque une pomme", "null"],
  ["partie", "null"], ["trois", "null"], ["madame", "null"],
  // Promotion en attente
  ["dame", "promote Q", true], ["reine", "promote Q", true], ["tour", "promote R", true],
  ["cavalier", "promote N", true], ["cheval", "promote N", true], ["chevaux", "promote N", true],
  ["fou", "promote B", true], ["roi", "null", true],
  ["nouvelle partie", "newGame", true],
];

let fails = 0;
for (const [phrase, expected, promo] of CASES) {
  ctx.pendingPromotion = promo ? {} : null;
  const got = show(parseVoiceCommand(phrase));
  const ok = got === expected;
  if (!ok) fails++;
  console.log((ok ? "  ok  " : "  ÉCHEC") + "  " + JSON.stringify(phrase).padEnd(26) + " -> " + got + (ok ? "" : "   (attendu : " + expected + ")"));
}

// Clés phonétiques : variantes qui doivent se rejoindre, mots qui doivent rester distincts.
console.log("\nClés phonétiques :");
const SAME = [["roque", "roc", "rock", "roquer", "roques", "rauque"], ["annule", "annuler", "anule"], ["dame", "dames"], ["cavalier", "cavaliers"], ["grand", "grande"], ["petit", "petite"]];
const DIFF = [["tour", "tout"], ["roi", "trois"], ["roque", "croque"], ["dame", "madame"], ["pion", "champion"]];
for (const group of SAME) {
  const keys = group.map(phoneticKey);
  const ok = keys.every((k) => k === keys[0]);
  if (!ok) fails++;
  console.log((ok ? "  ok  " : "  ÉCHEC") + "  identiques : " + group.map((w, i) => w + "=" + keys[i]).join(", "));
}
for (const [a, b] of DIFF) {
  const ka = phoneticKey(a), kb = phoneticKey(b), ok = ka !== kb;
  if (!ok) fails++;
  console.log((ok ? "  ok  " : "  ÉCHEC") + "  distincts : " + a + "=" + ka + " / " + b + "=" + kb);
}
console.log("\n" + (fails ? fails + " échec(s)" : "Tous les tests passent") + " sur " + (CASES.length + SAME.length + DIFF.length));
process.exitCode = fails ? 1 : 0;
