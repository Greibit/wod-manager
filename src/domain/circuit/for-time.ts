import { plainToClass } from "class-transformer";
import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class ForTime implements Circuit {

    type = `ForTime`;

    rounds: string;
    exercises: Exercise[] = [];

    toString = () => `FOR TIME - ${this.rounds} rounds - ${this.exercises.length} exercises`;

    static createFromPlain = plain => plainToClass(ForTime, plain);
}