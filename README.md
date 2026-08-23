# closures


---

## Exercice 1 — Créer un compteur avec une closure

Pour notre objectif, un **compteur** est simplement une fonction qui, à chaque appel, retourne un nombre **supérieur de 1** au précédent.

Exemple de comportement attendu :

```javascript
counter(); // => 1
counter(); // => 2
counter(); // => 3

```


## Exercice 2 — Compteur avec valeur de départ personnalisée

Modifie la fonction  pour qu’au lieu de commencer toujours à 0, elle puisse commencer à partir d’un nombre donné.


```javascript
var counter = creezCounter(100);
counter(); // => 101

```

## Exercice 3 — Générateur de fonctions de puissance (pow)

Une des utilisations principales des closures est de créer des fonctions qui génèrent d’autres fonctions.

Par exemple, on a souvent écrit des fonctions comme :

square (au carré)
cube (au cube)


La fonction suivante est incomplète :

```javascript
function pow(exponent) {
  return function(???) {
    return ???
  }
}

```
Remplace les ??? pour que la fonction fonctionne comme ceci :

```javascript
var square = pow(2);
var cube = pow(3);
var power4 = pow(4);

square(5); // => 25
cube(3);   // => 27
power4(4); // => 256
```
