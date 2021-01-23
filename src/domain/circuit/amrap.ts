import type Exercise from "../exercise/exercise";
import type Circuit from './circuit';

export default class Amrap implements Circuit {

    totalTime: string;
    exercises: Exercise[] = [];

    toString = () => {
        return `AMRAP - ${this.totalTime} - ${this.exercises.length} exercises`;
    }
}