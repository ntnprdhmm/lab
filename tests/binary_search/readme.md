BINARY SEARCH
=============

Consigne
--------

Pour un tableau d'entiers donné (entre 5 et 20 entiers), tu dois rechercher un élément en utilisant la méthode binary search.
Le principe est le même que pour chercher un mot dans un dictionnaire : tu ouvres le dictionnaire en deux. Puis tu réitères cette opération dans l'une des deux parties (celle ou se trouve ton mot), jusqu'à ce que tu tombes dessus.
Pour simplifier la chose, on va utiliser des entiers ici. 

Pour la partie visuelle, tu dois afficher le tableau en temps réel et 'noircir' les cases au fûr et à mesure de l'avancée de la recherche.

Pour le tri du tableau avant d'executer l'algorithme de recherche, tu **NE DOIS PAS** utiliser de fonction déjà toute faite : tu dois écrire toi même la fonction de tri du tableau.

Le nombre à chercher dans le tableau doit être choisit dans un champ select parmi toutes les valeurs du tableau.

Aide
----

L'article wikipédia explique bien le principe de l'algorithme :
https://en.wikipedia.org/wiki/Binary_search_algorithm

Un peu de culturage
-------------------

L'avantage de cet algorithme dans la vrai vie est qu'il est très efficace pour rechercher dans une énorme quantitié de données (il permet notamment de trouver un mot dans un dictionnaire contenant tous les mots du monde en 35 étapes maximum).
Dans notre cas ce n'est pas le meilleur algorithme car les tableaux de test contiennent des entiers ... Mais c'est juste pour simplifier l'exercice.

données
-------

Deux exemples pour commencer : 

[8, 6, 4, 5, 3, 4, 2]
[10, 52, 30, 98, 56, 47, 85, 32, 12]
