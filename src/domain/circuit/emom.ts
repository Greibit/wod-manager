import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class Emom implements Circuit {

    rounds: string;
    restBetweenRounds: string;
    exercises: Exercise[] = [];

    toString = () => {
        return `EMOM - ${this.rounds} rounds - ${this.exercises.length} exercises`;
    }
}