## README pour un projet RESTful avec Express, Keycloak et CORS

```markdown
# rest_tp2

Familiarisation avec les API de RESTFUL avec une base de données sqlite3 qui a la tables personnes avec les id, nom et adresse. 

## Description

Ce projet est une API RESTful construite avec Express.js, Keycloak pour l'authentification et CORS pour la gestion desCross-Origin Resource Sharing. Il fournit des exemples d'endpoints pour la gestion des ressources.

## Technologies utilisées

*   Node.js
*   Express.js
*   Keycloak
*   CORS
*   Postman
*   Docker

## Installation

1.  Clonez le dépôt : `git clone https://github.com/BintaBall/tp2_rest`
2.  Accédez au répertoire du projet : `cd rest_tp2`
3.  Installez les dépendances : `npm install`

## Configuration

1.  Configurez Keycloak :
```bash
node indexKeycloak.js
```
    *   Créez un realm dans Keycloak.
    *   Créez un client dans Keycloak pour votre application.
   

2.  Configurez CORS :
```bash
node indexCors.js
```
    *   Les options CORS sont configurées dans le fichier `indexCors.js`.
    *   Le fichier `cors.html` nous permet de voir le résultat de  notre configuration dans la consule.
    *   Modifiez les options selon vos besoins.

## Utilisation

#ExpressJS
```bash
node index.js
``` 
*    Lancer la base de données
Le projet fournit les endpoints suivants pour ExpressJS utilisable sur Postman:

*   `GET /localhost:3000/personnes`: Récupère toutes les personnes.
*   `POST /localhost:3000/personnes`: Crée une nouvelle personne.
*   `PUT /localhost:3000/personnes/:id`: Met à jour une personne existante.
*   `DELETE /localhost:3000/personnes/:id`: Supprime une personne existante.
