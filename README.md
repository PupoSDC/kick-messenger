# Kick-Messenger

Une interface qui permetre écrire, poster et lister des messages.
Un message est composé d’un texte et d’un champ précisant s’il est public ou privé.
Tous les utilisators peuvent voir des messages publics, mais seul l'utilisateur qui a écrit le message privé le verra.

## App

### API

Un REST API simple a été dẽveloppé avec Node.js avec les endpoints suivants :

| endpoint                   | Request Type | Commentaire                                                           |
|----------------------------|--------------|-----------------------------------------------------------------------|
| `/api/login?user=username` | `GET`        | Pour se connecter en tant que nouvel utilisateur                      |
| `/api/messages`            | `GET`        | Récupère les 10 messages les plus récents visibles par  l'utilisateur |
| `/api/messages`            | `POST`       | Poster un nouveau message au serveur                                  |

Le client se connectera également au serveur à travers un socket pour recevoir de nouveaux messages lorsqu'ils sont
publiés. Les données sont stockées dans une instance mongoDB.

### Client

L'app est structurée de la manière suivante :

| Dossier       | Commentaire                                                  |
|---------------|---------------------------------------------------------------------------|
| `actions`     | Interactions client avec l'API et actions modificatrices d''état          |
| `components`  | Composants de base dissociés de l'état de l'app                           |
| `Containers`  | Composants qui interagissent avec le gestionnaire d'état                  |
| `reducers`    | Changement d'état par des actions envoyées par des composants `Container` |


### Characteristiques

- CI avec tracis
- CD avec github
- Gestion d'état avec Redux
- Composants conçus avec React
- Tests unitaires avec Jest et Enzyme (\~70% de couverture de test)

### Problèmes connus / Suggestions pour continuer le développement

- L'app ne supporte pas le défilement des messages, à cause d'une mauvaise implémentation des `flexbox` niches.
- L'app manque une sisteme de gestion d'errours dans le client.
- Integration de test unitaire Insufficiente (doit etre >90%)

### Testing

Vous pouvez demarrer cette app localement avec ces instructions:

```sh
git clone git@github.com:PupoSDC/kick-messenger.git
cd kick-messenger && npm install
npm start
```
<<<<<<< HEAD
ou vous pouvez aussi enssayer l'app dans [Heroku](https://kick-messenger.herokuapp.com/).

N'oubliez pas de faire le login avant de commencer a poster:

- <https://kick-messenger.herokuapp.com/Api/Login?user=Amanda>
- <http://localhost:3000/Api/login?user=Pedro>

### Histoire du Project

Le project a ete developé en 9 phases distincts, identifie avec des tags des commits suivants :

|  tag  | Description                                      |
|-------|--------------------------------------------------|
| KLK-1 | Boiler plate set up                              |
| KLK-2 | Creation of Server side API                      |
| KLK-3 | Boilerplated app workflow                        |
| KLK-4 | Create React functional components               |
| KLK-5 | Create React stateful component for user input   |
| KLK-6 | Composed app to be functional                    |
| KLK-7 | Increase test coveraged of the app               |
| KLK-8 | Improved styles before delivery                  |
| KLK-9 | Setting up CI/CD for the application and         |

=======
Pour le bon funcionement de l'app, vous devez avoir MongoDB installé dans votre machine local.

Vous pouvez aussi enssayer l'app dans [Heroku](https://kick-messenger.herokuapp.com/).

N'oubliez pas de faire le login avant de commencer a poster:

- <https://kick-messenger.herokuapp.com/Api/Login?user=Amanda>
- <http://localhost:3000/Api/login?user=Pedro>

### Histoire du Project

Le project a ete developé en 9 phases distincts, identifie avec des tags des commits suivants :

|  tag  | Description                                      |
|-------|--------------------------------------------------|
| KLK-1 | Boiler plate set up                              |
| KLK-2 | Creation of Server side API                      |
| KLK-3 | Boilerplated app workflow                        |
| KLK-4 | Create React functional components               |
| KLK-5 | Create React stateful component for user input   |
| KLK-6 | Composed app to be functional                    |
| KLK-7 | Increase test coveraged of the app               |
| KLK-8 | Improved styles before delivery                  |
| KLK-9 | Setting up CI/CD for the application and         |

>>>>>>> KLK-10 Added Readme for final delivery
Idealement, le development des composants aurait été fait avec la methodologie `Test driven Development`, mais a cause
de mon manque d'experience avec Enzyme et Jest ce n'etait pas posssible.
