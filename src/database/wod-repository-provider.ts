import LocalStorageWodRepository from './local-storage-wod-repository';
import FirebaseWodRepository from './firestore-wod-repository';

// const WodRepository = new FirebaseWodRepository();
const WodRepository = new LocalStorageWodRepository();

export default WodRepository;

