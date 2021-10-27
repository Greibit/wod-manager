<script lang="ts">
    import ExerciseRepository from "../storage/exercise/exercise-repository-provider";
    import { navigateTo } from "svelte-router-spa";
    import Exercise from "../domain/exercise/exercise";

    const exercise = new Exercise('');

    const saveExercise = () =>
        ExerciseRepository.save(exercise).then(() => navigateTo(`/exercise/list`));
</script>

<div class="flex">
    <h1 class="text-4xl flex-grow">Create Exercise</h1>
    <button class="button-save" on:click={saveExercise}>Save</button>
</div>

<div class="bg-white mt-6 shadow">
    <div>
        <div class="border-b border-gray-200 p-6">
            <input
                    type="text"
                    class="w-full py-1 px-2"
                    bind:value={exercise.name}
            />
        </div>
    </div>
</div>
