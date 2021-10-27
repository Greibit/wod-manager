import type Exercise from './exercise';

export default interface ExerciseRepository {

    save(exercise: Exercise): Promise<void>;
}
