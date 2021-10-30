import { plainToClass } from 'class-transformer';
import type Circuit from './circuit';
import type CircuitExercise from './circuit-exercise';

export default class ForTime implements Circuit {

    type = `ForTime`;

    rounds: string;

    exercises: CircuitExercise[] = [];

    toString = () => `FOR TIME - ${this.rounds} rounds - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(ForTime, plain);
}
