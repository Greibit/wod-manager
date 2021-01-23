import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class ForTime implements Circuit {

    rounds: string;
    exercises: Exercise[] = [];

    toString = () => {
        return `FOR TIME - ${this.rounds} rounds - ${this.exercises.length} exercises`;
    }
}