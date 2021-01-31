import { plainToClass } from "class-transformer";
import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class Amrap implements Circuit {

    type = `Amrap`;

    totalTime: string;
    exercises: Exercise[] = [];

    toString = () => `AMRAP - ${this.totalTime} - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(Amrap, plain);
}