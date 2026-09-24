# Bienvenue
Ceci un espace pour partager mes projets.

☕ Ces applis sont gratuites et sans publicité : si elles vous rendent service ou vous amusent, vous pouvez [m'offrir un café sur Ko-fi](https://ko-fi.com/lfranck). Merci !

🍪 Les visites sont comptées avec Google Analytics, uniquement si vous l'acceptez dans le bandeau affiché à la première visite (le bouton 🍪, en bas à gauche, permet de changer d'avis).
    
# Liste des projets disponibles

## [Calmomètre](calmometre.html)

*Version 1.2.6*

**Calmomètre** est un indicateur sonore en temps réel qui aide à garder une conversation apaisée. Il écoute le niveau de la voix via le microphone et affiche un voyant à trois couleurs — vert, orange, rouge — qui prévient dès que le ton commence à monter, avec un signal sonore en cas de dépassement. Les seuils et le lissage sont réglables, et tout se passe dans le navigateur : aucun enregistrement, aucun son envoyé ailleurs.

## [Panic App](panicapp.html)

*Version 0.4.1*

**Panic App** est une page web qui déclenche une session vocale guidée en cas de panique ou de forte anxiété. D'un simple bouton PANIC, une voix pose de courtes questions (calcul, mémoire, observation, logique…), écoute les réponses au micro et adapte progressivement la difficulté, pour détourner l'attention vers des tâches simples plutôt que de la crise. Pensée pour fonctionner sans regarder l'écran, elle repose sur les capacités vocales du navigateur (synthèse et reconnaissance vocale).

## [SandSim.exe](sable.html)

*Version 1.30.72*

**SandSim.exe** reproduit dans le navigateur ces cadres de "sable animé" : plusieurs sables colorés (marron, vert forêt, vert prairie, gris, blanc), de densités différentes, tombent dans un liquide transparent et se fraient lentement un passage à travers une couche de bulles d'air pour former des dunes et des paysages, avec un angle de repos naturel. Le poids du sable accumulé peut forcer le passage à travers les bulles, et un grain lourd repousse de côté un grain plus léger. Le tout se détache sur un ciel animé, où le soleil traverse le ciel et les nuages dérivent, avec un mode Nuit (ciel étoilé, lune, sable éclairé d'une lumière bleutée) qui s'installe en fondu, et un mode Auto où la nuit tombe quand le soleil sort du ciel. Des étoiles filantes passent la nuit, un avion de temps en temps le jour, et très rarement un ovni rigolo dont le rayon tracteur aspire des grains de sable avant de les relâcher (un cartouche Ciel permet de les faire apparaître à la demande ; l'ovni choisit une altitude au-dessus du sable amoncelé pour ne jamais passer derrière un tas). Un bouton permet de retourner le cadre à 180° pour faire retomber le sable accumulé de l'autre côté (le ciel, lui, reste à l'endroit), un autre de passer le tableau du format vertical au format horizontal, un bouton Thème change les couleurs du sable et le ciel qui va avec (Montagne ; Désert de l'orange au jaune, avec brume de chaleur ; Arctique du bleu au blanc et au gris, avec aurore boréale la nuit ; et une planète inconnue au nom illisible, aux sables violet, magenta, turquoise, vert acide et rose, sous un ciel sarcelle où flotte une géante gazeuse à anneaux qui vire au bleu-vert la nuit, réduite à un croissant par son ombre ; là-bas, le soleil est enfermé dans une sphère de Dyson en construction, la lune laisse place à une base stellaire extraterrestre aux anneaux de glyphes lumineux, les avions à de petits ovnis, et le grand ovni à une capsule Apollo ; les océans, avec basalte, sable fin, algues, corail et nacre vus sous l'eau, de plus en plus sombres à mesure qu'on descend, où des rayons de lumière descendent de la surface et des bulles remontent, où la nuit un poisson-lune luminescent remplace la lune et du plancton les étoiles, avec des méduses, des poissons-clowns et un sous-marin jaune à la drague ; et la lune, avec son régolithe gris et son sol orange sous un ciel noir étoilé même en plein jour, la Terre en croissant le jour et pleine la nuit, des satellites et un module lunaire), et la page peut passer en plein écran. Une option permet aussi d'incliner librement le tableau en faisant tourner le cadre à la souris ou au doigt, ou en penchant son téléphone : la gravité suit l'inclinaison. Des réglages ajustent la résolution de la grille de simulation (jusqu'à 660 × 960 grains), la quantité de bulles, la viscosité du liquide, la force de gravité, un courant tourbillonnant (bruit de Perlin animé) qui pousse le sable de côté, et peuvent lier les bords gauche et droite pour que le sable passe de l'un à l'autre. Les zones de sable au repos ne sont plus recalculées, ce qui allège fortement la simulation, et tous les réglages sont mémorisés d'une visite à l'autre. Le nombre total de grains et la proportion de chaque couleur se règlent aussi, avec une vue figée qui range le sable en couches de couleurs pour visualiser ces proportions d'un coup d'œil, ainsi que la densité de chaque sable individuellement (panneau de réglage fin). Les cartouches de réglages s'affichent ou se masquent depuis la fenêtre Informations, et chacun se ferme aussi d'un clic sur sa croix.

## [Échecs](echecs.html)

*Version 0.14.17*

**Échecs** (prototype en cours de développement) est un jeu d'échecs jouable au doigt, à la souris ou à la voix, directement dans le navigateur. Il implémente les règles complètes de déplacement — prise en passant, roque, promotion, détection de l'échec, de l'échec et mat, du pat et des nulles (répétition, 50 coups) — la notation des coups joués, les pièces capturées affichées, une nouvelle partie et l'annulation de coup. Le pilotage vocal (commandes comme « e2 e4 », « cavalier f3 », « petit roque », « annule », « nouvelle partie ») repose sur la reconnaissance et la synthèse vocales du navigateur. Un clic sur le statut (« … à jouer ») fait défiler la méthode d'entraînement "échecs / prises / menaces / pièces en prise", en surlignant sur le plateau les coups (ou pièces en danger) de la catégorie active.
