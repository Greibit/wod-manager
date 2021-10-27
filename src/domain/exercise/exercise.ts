import { plainToClass } from "class-transformer";

export default class Exercise {

    name: string;
    reps: string;

    constructor(name, reps = '') {
        this.name = name;
        this.reps = reps;
    }

    toString = () => this.name;

    static createFromPlain = plain => plainToClass(Exercise, plain);
}
