import { plainToClass } from 'class-transformer';
import type Circuit from './circuit';
import type CircuitExercise from './circuit-exercise';

export default class Amrap implements Circuit {

    type = `Amrap`;

    totalTime: string;
    exercises: CircuitExercise[] = [];

    toString = () => `AMRAP - ${this.totalTime} - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(Amrap, plain);
}
