# Puissance 4 - Jeu Web

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

## Description

Puissance 4 est une application web interactive du célèbre jeu de stratégie. Développée en HTML5, CSS3 et JavaScript vanilla, elle permet à deux joueurs de s'affronter localement sur le même appareil. Le but est d'aligner 4 pions de sa couleur horizontalement, verticalement ou en diagonale sur une grille de 6 lignes et 7 colonnes.

### Caractéristiques principales :
- Interface web responsive adaptée aux écrans PC et mobiles
- Mode 2 joueurs local
- Système de chronomètre intégré
- Détection automatique de victoire
- Animations visuelles fluides
- Navigation intuitive entre les différentes pages
- Design moderne avec thème sombre

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation requise

## Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/AJOUIRJAayoub/puissance4-web.git
   cd puissance4-web
   ```

2. **Lancer le jeu**
   - Ouvrez le fichier `PUISSANCE 4 - ACCUEIL.html` dans votre navigateur
   - Ou utilisez un serveur local (Live Server dans VS Code par exemple)

## Comment jouer

1. **Navigation**
   - Accédez au jeu depuis la page d'accueil
   - Consultez les règles avant de commencer
   - Naviguez entre les sections via le menu

2. **Déroulement d'une partie**
   - Le joueur 1 (rouge) commence toujours
   - Cliquez sur une colonne pour y déposer votre pion
   - Le pion tombe automatiquement à la position la plus basse
   - Les joueurs alternent à chaque tour

3. **Conditions de victoire**
   - Aligner 4 pions de sa couleur (horizontal, vertical ou diagonal)
   - Message de victoire affiché automatiquement
   - Possibilité de commencer une nouvelle partie

4. **Fonctionnalités supplémentaires**
   - Chronomètre pour suivre la durée de la partie
   - Bouton "Nouvelle Partie" pour recommencer
   - Score affiché (0-0 par défaut)

## Structure du projet

```
PUISSANCE 4/
├── IMG/                           # Images et ressources visuelles
│   ├── Logo_Puissance4.png       # Logo du jeu
│   ├── LogoMenu2.0.jpg          # Icône menu mobile
│   ├── JeuxPuissance4.png       # Image du jeu
│   └── Ayoub.jpg               # Photo de profil
├── PUISSANCE 4 - ACCUEIL.html   # Page d'accueil
├── PUISSANCE 4 - ACCUEIL.css    # Styles page d'accueil
├── PUISSANCE 4 - JEU.html       # Page principale du jeu
├── PUISSANCE 4 - JEU.css        # Styles du jeu
├── Puissance 4 - JEU.js         # Logique JavaScript du jeu
├── PUISSANCE 4 - REGLE.html     # Page des règles
├── PUISSANCE 4 - REGLE.css      # Styles page règles
├── PUISSANCE 4 - SCORE.html     # Page des scores
├── PUISSANCE 4 - SCORE.css      # Styles page scores
├── PUISSANCE 4 - CONTACT.html   # Page de contact
├── PUISSANCE 4 - CONTACT.css    # Styles page contact
└── JEU JS PUISSANCE 4.txt       # Code JavaScript alternatif
```

## Personnalisation

### Couleurs des joueurs
Dans `Puissance 4 - JEU.js`, modifiez les couleurs :
```javascript
divElt.style.backgroundColor=joueur==1?"red":"yellow";
```

### Dimensions de la grille
Pour changer la taille du plateau :
```javascript
let colonne = 7; // Nombre de colonnes
let ligne = 6;   // Nombre de lignes
```

### Styles visuels
Les fichiers CSS permettent de personnaliser :
- Couleurs du thème (fond sombre par défaut)
- Tailles et espacements
- Animations et transitions

## Technologies utilisées

- **HTML5** : Structure sémantique des pages
- **CSS3** : Mise en forme et responsive design
- **JavaScript** : Logique du jeu et interactivité
- **DOM Manipulation** : Gestion dynamique du plateau

## Fonctionnalités techniques

- Génération dynamique du plateau de jeu
- Gestion des événements de clic
- Algorithme de détection de victoire (4 directions)
- Système de chronomètre intégré
- Menu responsive pour mobile

## Améliorations possibles

- Ajout d'un mode contre l'ordinateur (IA)
- Système de sauvegarde des scores
- Sons et effets sonores
- Animations de victoire plus élaborées
- Mode multijoueur en ligne
- Statistiques de jeu

## Dépannage

### Le jeu ne se charge pas
- Vérifiez que tous les fichiers sont dans le même dossier
- Assurez-vous d'ouvrir le fichier d'accueil en premier

### Les styles ne s'appliquent pas
- Vérifiez les chemins relatifs dans les balises `<link>`
- Rafraîchissez le cache du navigateur (Ctrl+F5)

### Le JavaScript ne fonctionne pas
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez que JavaScript est activé dans votre navigateur

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## Licence

La licence de ce projet n'est pas spécifiée. Veuillez contacter les auteurs pour plus d'informations sur les conditions d'utilisation.

## Auteurs

- **Ayoub AJOUIRJA** - Développeur principal
- **Riad AJOUIRJA** - Développeur principal

## Contexte

Ce projet a été réalisé dans le cadre d'un projet JavaScript à SUPINFO, demandant la création d'un jeu Puissance 4 fonctionnel.

---
Projet SUPINFO - Puissance 4
