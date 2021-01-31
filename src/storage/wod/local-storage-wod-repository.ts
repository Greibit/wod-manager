import Wod from '../../domain/wod/wod';
import type WodRepository from '../../domain/wod/wod-repository';

export default class LocalStorageWodRepository implements WodRepository {

    save = (wod: Wod): Promise<void> => {

        return new Promise((resolve, reject) => {

            let wodCollection = JSON.parse(localStorage.getItem('wod'));
            if (!wodCollection) {
                wodCollection = [];
            }

            wodCollection.push(wod);

            localStorage.setItem('wod', JSON.stringify(wodCollection));

            resolve();
        });

    }

    findAll = (): Promise<Wod[]> => {

        return new Promise((resolve, reject) => {

            let wods = JSON.parse(localStorage.getItem('wod'));
            if (!wods) {
                wods = [];
            }

            resolve(
                wods.map(wod => Wod.createFromPlain(wod))
            );
        });

    }

}
