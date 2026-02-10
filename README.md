# Player Finder 🎮

Application mobile React Native pour découvrir et filtrer des joueurs de jeux vidéo.

## 📱 Description

Player Finder est une application mobile simple qui permet de :
- Afficher une liste de joueurs de différents jeux vidéo
- Filtrer les joueurs par jeu (Valorant, FIFA, Fortnite)
- Consulter les profils détaillés des joueurs avec leurs statistiques

**Projet conçu pour un entretien de stage Front-End** - Réalisable en 2 heures.

## 🚀 Installation et lancement

### Prérequis
- Node.js installé (version 14 ou supérieure)
- npm ou yarn
- Expo Go sur votre téléphone (optionnel, pour tester sur mobile)

### Étapes d'installation

```bash
# 1. Naviguer dans le dossier du projet
cd "Player Finder"

# 2. Installer les dépendances
npm install

# 3. Lancer l'application
npm start
```

### Options de lancement
- **Appuyez sur `w`** : Ouvrir dans le navigateur web
- **Appuyez sur `a`** : Ouvrir sur émulateur Android
- **Appuyez sur `i`** : Ouvrir sur simulateur iOS
- **Scanner le QR code** : Avec l'app Expo Go sur votre téléphone

## 📂 Structure du projet

```
Player Finder/
├── App.js                      # Point d'entrée avec navigation
├── package.json                # Dépendances du projet
├── app.json                    # Configuration Expo
├── babel.config.js             # Configuration Babel
├── data/
│   └── playersData.js         # Données mock (12 joueurs)
├── screens/
│   ├── HomeScreen.js          # Écran principal avec liste et filtres
│   └── PlayerDetailScreen.js  # Écran de détail d'un joueur
└── components/
    ├── PlayerCard.js          # Composant carte joueur
    └── FilterButton.js        # Composant bouton de filtre
```

## 🎯 Fonctionnalités implémentées

### ✅ Écran principal (HomeScreen) - Version EXPERT
- **Barre de recherche dynamique** : Filtrage instantané par pseudo ou par jeu.
- **Pull-to-Refresh** : Tirer vers le bas pour actualiser la liste (simulé).
- **États de chargement** : Utilisation d'un `ActivityIndicator` pour une expérience fluide.
- **Animations de transition** : Utilisation de `LayoutAnimation` (Presets EaseIn/Out).
- **Indicateur Favoris** : Les joueurs aimés affichent un ❤️ directement dans la liste.

### ✅ Écran de détail (PlayerDetailScreen) - Version EXPERT
- **Système de Favoris** : Bouton coeur avec animation `Spring` et persistance.
- **Actions Intuitives** : Boutons "Envoyer une demande" et "Partager le profil".
- **Design Premium** : Ombres portées, bordures travaillées, et typographie hiérarchisée.

## 💡 Concepts React Native démontrés (Expert)

| Concept | Utilisation dans le projet |
|---------|---------------------------|
| **AsyncStorage** | Persistance locale des favoris (données sauvegardées même après fermeture) |
| **useFocusEffect** | Rafraîchissement intelligent de l'état quand l'utilisateur revient sur l'écran |
| **Pull-to-Refresh** | Implémentation du composant `RefreshControl` |
| **LayoutAnimation** | Transitions fluides et animations de ressort (`Spring`) |
| **ActivityIndicator** | Gestion professionnelle des temps de chargement |
| **Share & Alert API** | Utilisation des fonctionnalités natives du système |

## 🎨 Design

- **Palette de couleurs** : Violet (#6C63FF) comme couleur principale
- **Typographie** : Hiérarchie claire avec différentes tailles de police
- **Ombres** : Effet de profondeur sur les cartes (iOS et Android)
- **Badges dynamiques** : Couleurs différentes selon le niveau du joueur
- **Responsive** : Fonctionne sur toutes les tailles d'écran

## 📝 Guide de présentation pour l'entretien


1. **Architecture du code**
   - Structure claire et modulaire
   - Séparation des responsabilités (data, screens, components)
   - Composants réutilisables

2. **Maîtrise des hooks**
   - `useState` pour la gestion d'état locale
   - `useEffect` pour les effets de bord
   - Expliquer le cycle de vie des composants

3. **Optimisation des performances**
   - Utilisation de `FlatList` au lieu de `ScrollView`
   - `keyExtractor` pour identifier les éléments
   - `renderItem` pour optimiser le rendu

4. **Navigation**
   - Configuration du Stack Navigator
   - Passage de paramètres entre écrans
   - Personnalisation des headers

5. **Code propre**
   - Commentaires explicatifs en français
   - Nommage clair des variables et fonctions
   - Formatage cohérent

### Questions potentielles et réponses

**Q: Pourquoi utiliser FlatList plutôt que map() ?**
> FlatList est optimisé pour les longues listes : il ne rend que les éléments visibles à l'écran (virtualisation), ce qui améliore les performances.

**Q: Comment fonctionne le filtrage ?**
> J'utilise `useState` pour stocker le filtre actif, et `useEffect` pour mettre à jour la liste filtrée automatiquement quand le filtre change. La fonction `filterPlayersByGame` dans `playersData.js` gère la logique de filtrage.

**Q: Comment passez-vous les données entre écrans ?**
> J'utilise les paramètres de navigation : `navigation.navigate('PlayerDetail', { player })` pour envoyer, et `route.params.player` pour recevoir.

**Q: Pourquoi séparer les données dans un fichier à part ?**
> Cela suit le principe de séparation des responsabilités. Si demain on connecte une vraie API, il suffit de modifier `playersData.js` sans toucher aux composants.

## 🚀 Améliorations possibles (à mentionner)

Si vous aviez plus de temps, vous pourriez ajouter :

- **Recherche par pseudo** : Barre de recherche en plus des filtres
- **Tri** : Par niveau, par jeu, par ordre alphabétique
- **Animations** : Transitions fluides avec `react-native-reanimated`
- **Favoris** : Système de likes avec AsyncStorage
- **API réelle** : Connexion à une base de données
- **Tests** : Tests unitaires avec Jest et React Native Testing Library
- **Dark mode** : Thème sombre/clair
- **Internationalisation** : Support multilingue

## 🛠️ Technologies utilisées

- **React Native** : Framework mobile
- **Expo** : Toolchain pour React Native
- **React Navigation** : Navigation entre écrans
- **JavaScript** : Langage de programmation

## 👤 Auteur

Projet réalisé dans le cadre d'un entretien de stage Front-End.

---

**Temps de réalisation estimé** : 2 heures  
**Niveau** : Débutant à intermédiaire en React Native
