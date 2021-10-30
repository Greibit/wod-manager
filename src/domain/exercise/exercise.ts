import { plainToClass } from "class-transformer";

export default class Exercise {

    name: string;

    constructor(name) {
        this.name = name;
    }

    toString = () => this.name;

    static createFromPlain = plain => plainToClass(Exercise, plain);
}
