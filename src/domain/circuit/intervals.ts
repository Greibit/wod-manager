import { plainToClass } from "class-transformer";
import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class Intervals implements Circuit {

    type = `Intervals`;

    rounds: string;
    restBetweenRounds: string;
    workTime: string;
    restTime: string;
    exercises: Exercise[] = [];

    toString = () => `INTERVALS - ${this.rounds} rounds - ${this.workTime}/${this.restTime} - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(Intervals, plain);
}