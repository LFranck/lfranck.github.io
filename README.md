# Bienvenue
Ceci un espace pour partager mes projets.
    
# Liste des projets disponibles

## [Calmomètre](calmometre.html)

*Version 1.0.6*

**Calmomètre** est un indicateur sonore en temps réel qui aide à garder une conversation apaisée. Il écoute le niveau de la voix via le microphone et affiche un voyant à trois couleurs — vert, orange, rouge — qui prévient dès que le ton commence à monter, avec un signal sonore en cas de dépassement. Les seuils et le lissage sont réglables, et tout se passe dans le navigateur : aucun enregistrement, aucune donnée envoyée ailleurs.

## [Panic App](panicapp.html)

*Version 0.2.0*

**Panic App** est une page web qui déclenche une session vocale guidée en cas de panique ou de forte anxiété. D'un simple bouton PANIC, une voix pose de courtes questions (calcul, mémoire, observation, logique…), écoute les réponses au micro et adapte progressivement la difficulté, pour détourner l'attention vers des tâches simples plutôt que de la crise. Pensée pour fonctionner sans regarder l'écran, elle repose sur les capacités vocales du navigateur (synthèse et reconnaissance vocale).

## [SandSim.exe](sable.html)

*Version 0.23.56*

**SandSim.exe** (prototype en cours de développement) reproduit dans le navigateur ces cadres de "sable animé" : plusieurs sables colorés (marron, vert forêt, vert prairie, gris, blanc), de densités différentes, tombent dans un liquide transparent et se fraient lentement un passage à travers une couche de bulles d'air pour former des dunes et des paysages, avec un angle de repos naturel. Le poids du sable accumulé peut forcer le passage à travers les bulles, et un grain lourd repousse de côté un grain plus léger. Le tout se détache sur un ciel animé, où le soleil traverse le ciel et les nuages dérivent, avec un mode Nuit (ciel étoilé, lune, sable éclairé d'une lumière bleutée) qui s'installe en fondu. Un bouton permet de retourner le cadre à 180° pour faire retomber le sable accumulé de l'autre côté (le ciel, lui, reste à l'endroit), et la page peut passer en plein écran. Des réglages ajustent la résolution de la grille de simulation, la quantité de bulles, la viscosité du liquide, la force de gravité, un courant tourbillonnant (bruit de Perlin animé) qui pousse le sable de côté, et peuvent lier les bords gauche et droite pour que le sable passe de l'un à l'autre. Le nombre total de grains et la proportion de chaque couleur se règlent aussi, avec une vue figée qui range le sable en couches de couleurs pour visualiser ces proportions d'un coup d'œil, ainsi que la densité de chaque sable individuellement (panneau de réglage fin). Les cartouches de réglages s'affichent ou se masquent depuis la fenêtre Informations.

## [Échecs](echecs.html)

*Version 0.12.12*

**Échecs** (prototype en cours de développement) est un jeu d'échecs jouable au doigt, à la souris ou à la voix, directement dans le navigateur. Il implémente les règles complètes de déplacement — prise en passant, roque, promotion, détection de l'échec, de l'échec et mat, du pat et des nulles (répétition, 50 coups) — la notation des coups joués, les pièces capturées affichées, une nouvelle partie et l'annulation de coup. Le pilotage vocal (commandes comme « e2 e4 », « cavalier f3 », « petit roque », « annule », « nouvelle partie ») repose sur la reconnaissance et la synthèse vocales du navigateur. Un clic sur le statut (« … à jouer ») fait défiler la méthode d'entraînement "échecs / prises / menaces / pièces en prise", en surlignant sur le plateau les coups (ou pièces en danger) de la catégorie active.
