import type Wod from '../../domain/wod/wod';
import type WodRepository from '../../domain/wod/wod-repository';
import { Firestore } from "../config";


export default class FirebaseWodRepository implements WodRepository {

    save = (wod: Wod): Promise<void> => {
        return new Promise((resolve, reject) => {
            Firestore.collection('wod').add(JSON.parse(JSON.stringify(wod)));

            resolve();
        })
    }

}
