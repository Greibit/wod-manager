import type Wod from './wod';

export default interface WodRepository {

    save(wod: Wod): Promise<void>;
}