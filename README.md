# Bienvenue
Ceci un espace pour partager mes projets.

☕ Ces applis sont gratuites et sans publicité : si elles vous rendent service ou vous amusent, vous pouvez [m'offrir un café sur Ko-fi](https://ko-fi.com/lfranck). Merci !

🍪 Les visites sont comptées avec Google Analytics, uniquement si vous l'acceptez dans le bandeau affiché à la première visite (le bouton 🍪, en bas à gauche, permet de changer d'avis).

ℹ️ Chaque appli a ses propres aides, accessibles depuis les boutons « i » : n'hésitez pas à explorer et à essayer les réglages.

# Liste des projets disponibles

<table>
  <tr>
    <td align="center" valign="top"><a href="calmometre.html"><img src="assets/calmometre.png" alt="Calmomètre" width="180"></a><br><a href="calmometre.html">Calmomètre</a></td>
    <td align="center" valign="top"><a href="panicapp.html"><img src="assets/panic.png" alt="Panic App" width="180"></a><br><a href="panicapp.html">Panic App</a></td>
    <td align="center" valign="top"><a href="sable.html"><img src="assets/sable.png" alt="SandSim.exe" width="180"></a><br><a href="sable.html">SandSim.exe</a><br><sub><a href="sableWebGL.html">version WebGL (expérimentale)</a></sub></td>
    <td align="center" valign="top"><a href="echecs.html"><img src="assets/echecs.png" alt="Échecs" width="180"></a><br><a href="echecs.html">Échecs</a></td>
    <td align="center" valign="top"><a href="planete.html"><img src="assets/planete.png" alt="PlanetForge" width="180"></a><br><a href="planete.html">PlanetForge</a></td>
  </tr>
</table>

## [Calmomètre](calmometre.html)

*Version 1.4.11*

### But de l'appli

Aider à garder une conversation apaisée : **Calmomètre** écoute le niveau de la voix et prévient dès que le ton commence à monter.

### Fonctionnalités

- Voyant à trois couleurs (vert, orange, rouge) qui suit le niveau sonore en temps réel.
- Alerte au passage au rouge, au choix : bip, courte mélodie ou voix.
- Alerte graduée, qui s'accentue quand les dépassements se rapprochent.
- Seuils, lissage et type d'alerte réglables, mémorisés d'une visite à l'autre.
- Tout se passe dans le navigateur : aucun enregistrement, aucun son envoyé ailleurs.

## [Panic App](panicapp.html)

*Version 0.4.1*

### But de l'appli

Aider à traverser une crise de panique ou de forte anxiété, en détournant l'attention vers des tâches simples plutôt que vers la crise.

### Fonctionnalités

- Un simple bouton PANIC lance une session vocale guidée.
- Une voix pose de courtes questions (calcul, mémoire, observation, logique…) et écoute les réponses au micro.
- La difficulté s'adapte progressivement aux réponses.
- Pensée pour fonctionner sans regarder l'écran.
- Repose sur la synthèse et la reconnaissance vocales du navigateur. Sous Chrome et Edge, la reconnaissance vocale envoie l'audio aux serveurs de Google ou Microsoft pour le transcrire ; la page, elle, ne l'enregistre pas.

## [SandSim.exe](sable.html)

*Version 1.36.88*

### But de l'appli

Reproduire dans le navigateur ces cadres de « sable animé » où des sables colorés tombent lentement dans un liquide pour dessiner des dunes et des paysages — à regarder pour se détendre, hypnotique.

### Fonctionnalités

- Simulation de sables colorés de densités différentes, qui traversent une couche de bulles d'air et s'empilent avec un angle de repos naturel.
- Ciel animé : soleil, nuages, avions, étoiles filantes, et un ovni rigolo qui aspire du sable de temps en temps.
- Modes Jour, Nuit et Auto (la nuit tombe quand le soleil sort du ciel).
- Plusieurs thèmes, chacun avec ses sables et son ciel : Montagne, Désert, Arctique, Océans, Lune (ciel sans atmosphère, constellé d'étoiles fixes)… et une mystérieuse planète inconnue. En mode Auto, le thème change à chaque cycle jour/nuit.
- MultiCouches : trois tableaux de sable simulés en même temps et superposés, pour donner de la profondeur. Les dunes du fond, plus hautes, se fondent dans la brume de l'horizon (réglable pour chaque couche), chaque couche a son propre courant, et l'ovni vient aspirer du sable dans l'une ou l'autre.
- Retournement du cadre à 180°, passage du format vertical au format horizontal, plein écran.
- Raccourcis clavier : F plein écran, R retourner le cadre, N nouveau paysage, J jour / nuit / auto, T thème.
- Inclinaison libre du tableau à la souris, au doigt ou en penchant son téléphone : la gravité suit.
- Réglages de la simulation : résolution, bulles, viscosité, gravité, courant tourbillonnant, bords reliés…
- Réglage du nombre de grains, de la proportion et de la densité de chaque couleur.
- Réglages mémorisés d'une visite à l'autre.

### Version WebGL (expérimentale)

[SandSim.exe WebGL](sableWebGL.html) : la même appli, dont l'affichage du sable est calculé par la carte graphique. Elle permet de monter beaucoup plus haut en résolution (jusqu'à 1320 grains sur le petit côté, avec 300 000 grains au plus), et offre un vrai plein écran, à la résolution de l'écran. En cours d'optimisation : selon la machine, les très hautes résolutions peuvent encore ralentir.

## [Échecs](echecs.html)

*Version 0.14.20*

### But de l'appli

Suivre un livre de stratégie d'échecs sans échiquier sous la main : on dicte les coups lus dans le livre, et le plateau s'affiche à l'écran. Plus besoin de reconstituer la position de tête, et les mains restent libres pour tenir le livre. Rien n'empêche aussi de jouer une partie au doigt ou à la souris. *(Prototype en cours de développement.)*

### Fonctionnalités

- Pilotage vocal (« e2 e4 », « cavalier f3 », « petit roque », « annule »…), tolérant aux approximations de la transcription. Sous Chrome et Edge, la reconnaissance vocale envoie l'audio aux serveurs de Google ou Microsoft pour le transcrire ; la page, elle, ne l'enregistre pas.
- Règles complètes : prise en passant, roque, promotion, échec, mat, pat et nulles (répétition, 50 coups).
- Notation des coups joués et affichage des pièces capturées.
- Nouvelle partie et annulation de coup.
- Méthode d'entraînement « échecs / prises / menaces / pièces en prise », qui surligne sur le plateau les coups ou pièces concernés.

## [PlanetForge](planete.html)

*Version 0.11.7*

### But de l'appli

Regarder naître la surface d'une planète : partie d'une sphère parfaitement lisse, elle est coupée des milliers de fois en deux hémisphères par un plan tiré au hasard, un côté monte, l'autre descend. Faille après faille, les continents émergent, puis les côtes et les montagnes se ciselent. *(Prototype en cours de développement.)*

### Fonctionnalités

- Formation animée, de 0,5 à 50 000 failles par seconde, limitée à un nombre de failles ou sans fin, avec la dernière faille tracée sur la carte.
- Amplitude des failles réglable : chaque faille fait monter (et descendre de l'autre côté) d'un nombre de crans tiré au hasard entre 1 et l'amplitude choisie, plutôt que toujours d'un seul cran.
- Trois vues : carte de Mercator, carte équirectangulaire et globe 3D éclairé, qu'on fait tourner et incliner à la souris ou au doigt.
- Vue au sol à la première personne, sur n'importe quel point de la planète : on s'y pose d'un clic, puis on se déplace au clavier (flèches, ZQSD / WASD), à l'altitude de son choix, avec la courbure de la planète, la brume au loin et le relief exagéré à volonté.
- Part d'océans réglable, calottes polaires, ombrage du relief (accentuation réglable).
- Altitudes en mètres : point culminant, fosse la plus profonde et dénivelé total, comparé à celui de la Terre (19 784 m, de la fosse des Mariannes à l'Everest).
- Palettes : Terre, Désert, Glace, Volcan, Mars, Alien.
- Biomes selon le climat (latitude, altitude, éloignement de la mer) : forêt tropicale, savane, désert, forêt tempérée, prairie, steppe, taïga, toundra.
- Rivières qui ruissellent jusqu'à la mer, en remplissant les cuvettes en lacs.
- Érosion réglable : les rivières creusent leurs vallées et déposent leurs débris à l'embouchure, les pentes s'adoucissent.
- Résolution de la carte au choix (512, 1024 ou 2048 points de large), plein écran, export de l'image en PNG.
- Raccourcis clavier : Espace pause, N nouvelle planète, P projection, V vue au sol, R rotation automatique, F plein écran, E export PNG, + / − vitesse.
- Réglages mémorisés d'une visite à l'autre.
