# Database function manual

Description des fonctions de gestion de la database, contenues dans le fichier `./src/models`

### WARNING
Toutes les fonctions sont ASYNCHRONES ! Vous devez donc placer le mot clé `await` devant chaque appel de
fonction pour obtenir le résultat désiré.


# clientModels.ts

###`createClient(name: string, password: string)`

Crée un client et le stocke dans la db.
Si `name` existe déjà, renvoie 400 et le client n'est pas créé.


###`findClientByName(name: string, password: string)`

Renvoie un objet `{id: number, name: string}` si `name` et `password` correspondent.

Si le `name` est correct mais `password` est différent, renvoie le code d'erreur 400(mot de passe incorrect).
Si aucun des deux ne correspondent, renvoie 404.

### `findClientById(id: number)`
Renvoie un objet `{id: number, name: string}` si `id` correspond.
Si `id` n'existe pas, renvoie 404

# commentModels.ts

###`createComment(idTip: number, idClient: number, content: string, date: Date)`
Crée un commentaire et le stocke dans la database.

### `findCommentById(id: number, idTip: number)`
Récupère un `objet` `{idTip, idClient, content, date}`. Si un id n'existe pas, renvoie 404

### `getAllComments(idTip: number)`
Récupère un `object[]` contenant tous les commentaires liés au tip dont l'id est `idTip`

#tipModels.ts
##Info: 
Cette section va être modifié apres création de la table 'Catégories'.

### `getAllTips(category: string)`
Renvoie un `object[]` contenant tous les tips de `category`

### `createTip(idClient: number, title: string, category: string, date: Date, content: string)`
Crée un tip.

### `findTipByTitle(title: string)`
Renvoie un objet `{id, idClient, title, category, content, date}`
Si aucun tip ne correspond, renvoie 404

### `findTipById(id: number)`
Comme le précédent mais par id