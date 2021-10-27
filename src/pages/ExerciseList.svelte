<script lang="ts">
    import type Exercise from "../domain/exercise/exercise";

    import ExerciseRepository from "../storage/exercise/exercise-repository-provider";

    let exercises: Exercise[] = [];

    ExerciseRepository.findAll().then((exercisesList) => {
        console.log(exercisesList);
        exercises = exercisesList;
    });
</script>

<div class="flex">
    <h1 class="text-4xl flex-grow">Exercise List</h1>
    <a class="button-save" href={`/exercise/create`}>Create</a>
</div>

<div class="bg-white mt-6 shadow">
    <div>
        {#each exercises as exercise}
            <div class="border-b border-gray-200 p-6">
                {exercise.toString()}
            </div>
        {:else}
            <div class="border-b border-gray-200 p-6">No Exercises created yet</div>
        {/each}
    </div>
</div>
