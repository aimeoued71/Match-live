# Match Live

Première base d'interface web responsive pour **Match Live**.

## Contenu
- Interface française adaptée aux écrans Android et ordinateur.
- Navigation En direct / Aujourd'hui / Actualités.
- Manifest PWA et service worker pour préparer l'installation sur téléphone.
- Aucun faux score : l'écran indique clairement que les données live ne sont pas encore connectées.

## Lancer
Ouvrir `index.html` dans un navigateur pour un aperçu. Pour tester l'installation PWA et le service worker, servir le dossier via un serveur HTTPS ou localhost.

## Prochaine étape : API football
La clé API ne doit jamais être écrite dans `app.js` ou dans le navigateur. Il faut créer un petit backend qui conserve la clé dans une variable d'environnement, appelle le fournisseur football et renvoie uniquement les données nécessaires à l'application.

## État actuel
Cette version est une maquette fonctionnelle de navigation, pas encore une application de scores en temps réel. La connexion API, les favoris, les notifications push et le packaging APK restent à réaliser.
