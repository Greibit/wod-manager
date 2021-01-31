import { plainToClass } from "class-transformer";
import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class Emom implements Circuit {

    type = `Emom`;

    rounds: string;
    restBetweenRounds: string;
    exercises: Exercise[] = [];

    toString = () => `EMOM - ${this.rounds} rounds - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(Emom, plain);
}