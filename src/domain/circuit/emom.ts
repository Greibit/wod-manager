import { plainToClass } from 'class-transformer';
import type Circuit from './circuit';
import type CircuitExercise from './circuit-exercise';

export default class Emom implements Circuit {

    type = `Emom`;

    rounds: string;
    restBetweenRounds: string;

    exercises: CircuitExercise[] = [];
    toString = () => `EMOM - ${this.rounds} rounds - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(Emom, plain);
}
