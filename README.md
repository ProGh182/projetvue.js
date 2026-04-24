# Le Gourmet - Gestion d'un Restaurant en Ligne

Application Vue.js 3 permettant de gérer un restaurant en ligne avec menu, panier et gestion des commandes.

## Fonctionnalités

### 1. Page d'Accueil
- Affichage du nom et description du restaurant
- Informations sur les services proposés
- Lien d'accès au menu

### 2. Page Menu
- Affichage de la liste des plats avec description
- Badges pour les plats nouveaux
- Bouton d'ajout au panier
- Toast de notification lors de l'ajout

### 3. Panier
- Affichage des articles avec quantité et prix
- Modification de la quantité d'articles
- Suppression d'articles
- Calcul du total
- Formulaire de validation de commande

### 4. Gestion des Commandes (Admin)
- Liste de toutes les commandes
- Détails des articles commandés
- Statut de la commande (En cours / Prête)
- Filtrage par statut

## Concepts Vue.js 3 Utilisés

### 1. Directives de Base
- **v-for**: Affichage dynamique de listes (menu, panier, commandes)
- **v-if / v-else**: Affichage conditionnel (panier vide, statuts)
- **v-bind**: Liaison de données avec les attributs (class, id)

### 2. Composants et Props
- **Gourmet**: Composant réutilisable pour afficher un plat
- **PanierItem**: Affichage d'un article du panier
- **CommandeItem**: Affichage d'une commande
- Props typées pour la sécurité des données

### 3. Events Personnalisés
- **@festoyons**: Event d'ajout au panier depuis Gourmet
- **@update-quantity**: Modification de quantité
- **@remove-item**: Suppression d'article
- **@update-status**: Mise à jour du statut de commande

### 4. Slots
- **Named slots** dans Gourmet avec id "victuaille"
- Personnalisation de l'affichage des plats

### 5. Watchers
- Surveillance des modifications du panier
- Calcul automatique du total avec computed

### 6. Lifecycle Hooks
- **onMounted** dans App.vue: affichage du message "Les moules sont prêtes" en console
- Initialisation des données au montage des composants

### 7. Provide/Inject
- Partage de la fonction showNotification
- Partage du tableau orders entre Admin et CommandeItem

### 8. Vue Router
- Routes: Home, Menu, Cart, Admin
- Navigation entre les pages
- Links actifs dans la navigation

## Architecture

```
src/
├── App.vue                 # Composant racine
├── main.js                 # Point d'entrée
├── components/
│   ├── Gourmet.vue         # Composant plat
│   ├── PanierItem.vue      # Article du panier
│   └── CommandeItem.vue    # Commande
├── views/
│   ├── Home.vue            # Page d'accueil
│   ├── Menu.vue            # Affichage du menu
│   ├── Cart.vue            # Panier et checkout
│   └── Admin.vue           # Gestion des commandes
├── router/
│   └── index.js            # Configuration routes
└── stores/
    └── store.js            # Gestion d'état avec Composition API
```

## Installation et Lancement

### Prérequis
- Node.js (version 14+)
- npm ou yarn

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
L'application sera accessible à http://localhost:5173

### Build pour production
```bash
npm run build
```

## Utilisation

1. **Accueil**: Consulter les informations sur le restaurant
2. **Menu**: Explorer les plats et les ajouter au panier
3. **Panier**: Vérifier les articles, modifier les quantités et confirmer la commande
4. **Admin**: Voir les commandes en cours et les marquer comme prêtes

## Technologies

- **Vue.js 3**: Framework principal
- **Vue Router 4**: Navigation et routage
- **Vite**: Build tool et serveur de développement
- **Composition API**: Gestion d'état et logique réutilisable

## Auteurs

Projet réalisé par groupe pour le cours Vue.js 3 à EFREI.
