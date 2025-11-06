- Nom: ADDARIO 
- Prénom: Maëlie 
- URL pocketbase: http://127.0.0.1:8090/_/#/collections?collection=_pb_users_auth_&filter=&sort=-%40rowid
- URL: /



Difficultés rencontrées et erreurs non résolues
1) Déploiement

J’ai rencontré de nombreuses erreurs lors du déploiement sur le VPS (notamment des erreurs liées à package.json introuvable et à la configuration d’Apache).

Malgré plusieurs tentatives de correction (chemins, fichiers manquants, services PM2 et Apache), le site n’a pas pu être rendu accessible en ligne via le serveur.

En revanche, le déploiement GitHub Actions fonctionne correctement, et le projet se build et se copie bien sur le VPS.

2) Sauvegarde des lunettes dans PocketBase

L’enregistrement des lunettes générées manuellement fonctionne correctement dans PocketBase.

Cependant, le changement de couleur des différentes parties (branches, monture, verres, etc.) n’est pas sauvegardé, même si l’envoi initial du SVG est bien enregistré.

Ce problème vient d’un manque de gestion dynamique des états dans le code au moment de la sauvegarde (le SVG est stocké, mais les variables de couleurs ne sont pas mises à jour).

3) Génération par IA non finalisée

J’avais prévu d’ajouter la génération automatique de lunettes via l’IA, mais cette fonctionnalité n’a pas pu être terminée à temps.

L’appel à l’API et la génération du SVG fonctionnent en partie, mais les lunettes générées ne s’enregistrent pas dans PocketBase, faute de lien complet entre la génération IA et le système de sauvegarde.

4) Gestion du temps et charge de travail

Cette SAE était selon moi (et plusieurs autres étudiants) trop dense pour la durée donnée (3 jours).

En si peu de temps, il fallait : créer une identité visuelle complète, concevoir une maquette Figma cohérente, développer un site fonctionnel avec un configurateur, mettre en place un backend PocketBase avec toutes les collections et relations, et enfin déployer le tout sur un VPS.

Même avec l’aide de l’IA, j’ai ressenti une certaine frustration de ne pas avoir pu produire un travail 100 % personnel.
La contrainte de temps ne laissait pas la place à une vraie phase de réflexion et d’expérimentation.

