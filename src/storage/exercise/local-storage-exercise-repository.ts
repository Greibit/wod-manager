import Exercise from '../../domain/exercise/exercise';
import type ExerciseRepository from '../../domain/exercise/exercise-repository';

export default class LocalStorageExerciseRepository implements ExerciseRepository {

    save = (exercise: Exercise): Promise<void> => {

        return new Promise((resolve, reject) => {

            let exerciseCollection = JSON.parse(localStorage.getItem('exercise'));
            if (!exerciseCollection) {
                exerciseCollection = [];
            }

            exerciseCollection.push(exercise);

            localStorage.setItem('exercise', JSON.stringify(exerciseCollection));

            resolve();
        });

    }

    findAll = (): Promise<Exercise[]> => {

        return new Promise((resolve, reject) => {

            let exercises = JSON.parse(localStorage.getItem('exercise'));
            if (!exercises) {
                exercises = [];
            }

            resolve(
                exercises.map(exercise => Exercise.createFromPlain(exercise))
            );
        });

    }

}
