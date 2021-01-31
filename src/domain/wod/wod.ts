import { plainToClass } from 'class-transformer';
import type Circuit from '../circuit/circuit';
import Amrap from '../circuit/amrap';
import Emom from '../circuit/emom';
import ForTime from '../circuit/for-time';
import Intervals from '../circuit/intervals';


export default class Wod {

    circuits: Circuit[] = [];

    toString = () => this.circuits.map(circuit => `${circuit.toString()}`)

    static createFromPlain = plainWod => {
        const wod = new Wod();

        const circuitTypes = { Amrap, Emom, ForTime, Intervals };

        wod.circuits = plainWod.circuits.map(circuit => circuitTypes[circuit.type].createFromPlain(circuit));

        return wod;
    }
}