import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class Intervals implements Circuit {

    rounds: string;
    restBetweenRounds: string;
    workTime: string;
    restTime: string;
    exercises: Exercise[] = [];

    toString = () => {
        return `INTERVALS - ${this.rounds} rounds - ${this.workTime}/${this.restTime} - ${this.exercises.length} exercises`;
    }
}