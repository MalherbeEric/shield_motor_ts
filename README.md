## Usage

Utilisation pour le Shield Motor de Technologie Service

### Shield Moteur #ShieldMotor

*********Utilisation simple des moteurs 

.....Arrêt *** Arrêt des 2 moteurs
ShieldMotor.Stop()

.....Avancer *** Faire avancer les 2 moteurs à la vitesse désirée
ShieldMotor.Avancer(50)

.....Reculer *** Faire reculer les 2 moteurs à la vitesse désirée
ShieldMotor.Reculer(50)

.....Tourner à droite *** Tourner à droite le moteur 1 à la vitesse désirée
            le moteur 2 ne tourne pas ***
ShieldMotor.droite(50)

.....Tourner à gauche *** Tourner à gauche le moteur 2 à la vitesse désirée
            le moteur 1 ne tourne pas ***
ShieldMotor.gauche(50)

*************Utilisation du buzzer

ShieldMotor.buzzer("Marche") ***Mise en route du buzzer
ShieldMotor.buzzer("Arrêt")  ***Arrêt du buzzer



> Ouvrir cette page à [https://malherbeeric.github.io/shield_motor_ts/](https://malherbeeric.github.io/shield_motor_ts/)

## Utiliser comme extension

Ce dépôt peut être ajouté en tant qu'**extension** dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/malherbeeric/shield_motor_ts** et importez

## Éditer ce projet ![Badge du statut de la compilation](https://github.com/malherbeeric/shield_motor_ts/workflows/MakeCode/badge.svg)

Éditer ce dépôt dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Importer** puis cliquez sur **Importer l'URL **
* collez **https://github.com/malherbeeric/shield_motor_ts** et cliquez sur importer

## Aperçu des blocs

Cette section montre le code des blocs du dernier commit dans la branche master.
Cette image peut prendre quelques minutes pour être actualisée.

![Un rendu de la vue des blocs](https://github.com/malherbeeric/shield_motor_ts/raw/master/.github/makecode/blocks.png)

#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
