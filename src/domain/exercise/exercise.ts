export default class Exercise {

    name: string;
    reps: string;

    constructor(name = '', reps = '') {
        this.name = name;
        this.reps = reps;
    }
}