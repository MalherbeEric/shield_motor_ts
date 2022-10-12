
/* Blocks pour utilisation de la carte shield moteur Technologie Service
    ****** By Malherbe Eric - eric.malherbe@ac-orleans-tours.fr- ******/

//% weight=100 color=#94280d icon="\uf1b9" block="Shield Moteur TS"

namespace ShieldMotor {
    /**/
    export enum Buzzer_Action {
        //% block="Arrêt"
        Stop,
        //% block="Marche"
        Marche
    }

    export enum MotorDirection {
        //% block="Avancer"
        Forward,
        //% block="Reculer"
        Reverse
    }

    export enum Moteurs {
        //%blockId=Moteur_1
        //% block="moteur 1"
        Moteur1,
        //%blockId=Moteur_2
        //% block="moteur 2"
        Moteur2
    }

    /**
     * Marche ou arrêt du buzzer
     * @param buzzer 
     */
    //%blockId=Shield_Moteur_Buzzer
    //%block="Mettre le buzzer sur %buzzer"
    export function bufferOnOff(buzzer: Buzzer_Action): void {
        switch (buzzer) {
            case Buzzer_Action.Stop:
                pins.digitalWritePin(DigitalPin.P0, 0);
                break
            case Buzzer_Action.Marche:
                pins.analogWritePin(AnalogPin.P0, 1);
                break
        }
    }



    /**
         * Permettre d'arrêter les moteurs
         */
    //%blockId=Shield_Moteur_Arrêt_All
    //% block="Arrêter les moteurs"

    export function Stop(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 0);
    }


    /**
         * Permettre de faire tourner les 2 moteurs vers l'avant
         *
         * @param vitesse  quelle vitesse des moteurs ?
         */
    //%blockId=Shield_Moteur_Forward
    //% block="Avancer à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100
    
    export function Avancer(vitesse: number): void {
        /*Convertir 0-100 to 0-1024 (approx)*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        pins.analogWritePin(AnalogPin.P1, OutputVal);
        pins.analogWritePin(AnalogPin.P2, OutputVal);
        pins.digitalWritePin(DigitalPin.P8, 1);
        pins.digitalWritePin(DigitalPin.P12, 1);
        }
    

    /**
         * Permettre de faire tourner les 2 moteurs vers l'arrière
         *
         * @param vitesse  quelle vitesse des moteurs ?
         */
    //%blockId=Shield_Moteur_Reverse
    //% block="Reculer à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100
    
    export function Reculer(vitesse: number): void {
        /*Convertir 0-100 to 0-1024 (approx)*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        pins.analogWritePin(AnalogPin.P1, OutputVal);
        pins.analogWritePin(AnalogPin.P2, OutputVal);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 0);
    }


    /**
        * Permettre de tourner à droite
        *
        * @param vitesse  quelle vitesse des moteurs ?
        */
    //%blockId=Shield_Moteur_Right
    //% block="Tourner à droite à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100
    
    export function Droite(vitesse: number): void {
        /*Convertir 0-100 to 0-1024 (approx)*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        pins.analogWritePin(AnalogPin.P1, OutputVal);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.digitalWritePin(DigitalPin.P8, 1);
        pins.digitalWritePin(DigitalPin.P12, 0);
    }

    /**
           * Permettre de tourner à gauche
           *
           * @param vitesse  quelle vitesse des moteurs ?
           */
    //%blockId=Shield_Moteur_Left
    //% block="Tourner à gauche à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100
    
    export function Gauche(vitesse: number): void {
        /*Convertir 0-100 to 0-1024 (approx)*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, OutputVal);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 1);
    }

    /**
     * Code réalisé d'après kitronik_motor_driver
     * Turns off the motor specified by eMotors
     * @param moteur :which motor to turn off
     */
    //%blockId=Shield_Moteur_Off
    //%block="Arrêter le moteur %moteur"
    export function motorOff(moteur: Moteurs): void {
        switch (moteur) {
            case Moteurs.Moteur1:
                pins.analogWritePin(AnalogPin.P1, 0);
                pins.digitalWritePin(DigitalPin.P8, 0);
                break
            case Moteurs.Moteur2:
                pins.analogWritePin(AnalogPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P12, 0);
                break
        }
    }


    /**
     * Turns on motor specified by eMotors in the direction specified
     * by eDirection, at the requested speed 
     *
     * @param moteur which motor to turn on
     * @param dir   which direction to go
     * @param vitesse how fast to spin the motor
     */
    //%blockId=Shield_Moteur_On
    //% block="Faire|%dir |le %moteur|à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100
    export function motorOn(dir: MotorDirection, moteur: Moteurs, vitesse: number): void {
        /*first convert 0-100 to 0-1024 (approx) We wont worry about the lsat 24 to make life simpler*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        switch (moteur) {
            case Moteurs.Moteur1: /*Motor 1 uses Pins 1 and 8*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P1, OutputVal);
                        pins.digitalWritePin(DigitalPin.P8, 1); /*Write the low side digitally, to allow the 3rd PWM to be used if required elsewhere*/
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P1, OutputVal);
                        pins.digitalWritePin(DigitalPin.P8, 0);
                        break
                }

                break;
            case Moteurs.Moteur2: /*Motor 2 uses Pins 2 and 12*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P2, OutputVal);
                        pins.digitalWritePin(DigitalPin.P12, 1); /*Write the low side digitally, to allow the 3rd PWM to be used if required elsewhere*/
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P2, OutputVal);
                        pins.digitalWritePin(DigitalPin.P12, 0);
                        break
                }

                break;
        }
    }
}