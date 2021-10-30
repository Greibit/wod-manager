import { plainToClass } from 'class-transformer';
import type Circuit from './circuit';
import type CircuitExercise from './circuit-exercise';

export default class Intervals implements Circuit {

    type = `Intervals`;

    rounds: string;
    restBetweenRounds: string;
    workTime: string;
    restTime: string;
    exercises: CircuitExercise[] = [];

    toString = () => `INTERVALS - ${this.rounds} rounds - ${this.workTime}/${this.restTime} - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(Intervals, plain);
}
