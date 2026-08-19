# Le grec en poche

Une petite application web en français pour apprendre le grec moderne avant un
voyage. Elle propose un parcours de huit semaines composé de mots essentiels et
de phrases utiles, avec traduction, transcription phonétique et répétition
espacée.

## Fonctionnalités

- 40 mots et 34 phrases répartis par thème ;
- cartes recto-verso avec raccourcis clavier ;
- prononciation grecque via la synthèse vocale du navigateur ;
- progression enregistrée localement dans le navigateur (`localStorage`) ;
- interface adaptative, utilisable sur ordinateur et mobile ;
- aucune inscription, aucun serveur et aucune base de données nécessaires.

> La synthèse vocale dépend des voix installées sur l'appareil. Une voix grecque
> peut ne pas être disponible sur tous les navigateurs.

## Lancer l'application en local

### Prérequis

- Node.js 22 ou une version ultérieure ;
- npm.

```bash
npm ci
npm run dev
```

Ouvrez ensuite l'adresse affichée dans le terminal, généralement
`http://localhost:5173`.

Pour vérifier la version statique destinée à GitHub Pages :

```bash
npm run build:github
npx vite preview --outDir dist-github
```

Le résultat de la compilation se trouve dans `dist-github/`.

## Publier sur GitHub Pages

Le dépôt contient déjà le workflow
`.github/workflows/deploy-pages.yml`. Il compile et publie automatiquement
l'application à chaque envoi sur la branche `main`.

### Première mise en ligne

1. Créez un dépôt sur GitHub et envoyez-y le projet sur une branche nommée
   `main`.
2. Sur GitHub, ouvrez **Settings → Pages**.
3. Dans **Build and deployment**, choisissez **GitHub Actions** comme source.
4. Ouvrez l'onglet **Actions** et attendez que le workflow
   **Déployer sur GitHub Pages** se termine. Il est également possible de le
   lancer manuellement avec **Run workflow**.
5. L'adresse publiée est indiquée dans le résumé du déploiement. Pour un dépôt
   nommé `pocket-greek`, elle prend normalement la forme :
   `https://VOTRE-COMPTE.github.io/pocket-greek/`.

Les mises à jour suivantes sont publiées automatiquement après chaque `push`
sur `main`.

### En cas d'échec

- Vérifiez dans **Settings → Pages** que la source est bien **GitHub Actions**.
- Consultez les journaux du workflow dans l'onglet **Actions**.
- Vérifiez que la branche principale s'appelle `main`. Sinon, adaptez
  `branches: [main]` dans le workflow.
- Sur un compte GitHub Free, le dépôt doit être public pour utiliser GitHub
  Pages.
- Si le site s'affiche sans styles ou sans JavaScript, relancez
  `npm run build:github` localement et vérifiez que `dist-github/index.html`
  existe.

La configuration Vite utilise des chemins relatifs (`base: "./"`), ce qui rend
le site compatible aussi bien avec un dépôt de projet
(`compte.github.io/nom-du-depot/`) qu'avec un dépôt `compte.github.io`.

## Commandes utiles

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build:github` | Produit le site statique pour GitHub Pages |
| `npm run lint` | Analyse le code avec ESLint |
| `npm test` | Compile et exécute les tests du projet |

## Données et confidentialité

La progression reste dans le stockage local du navigateur. Elle n'est envoyée
à aucun serveur. Le bouton **Réinitialiser ma progression** efface ces données.

## Technologies

React, TypeScript et Vite. Le projet inclut aussi une configuration Vinext pour
son environnement de développement d'origine, mais la publication GitHub Pages
utilise uniquement la compilation statique définie dans
`vite.github.config.ts`.
