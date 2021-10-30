<script lang="ts">
    import CircuitExercise from '../../domain/circuit/circuit-exercise';

    export let exercises: CircuitExercise[];
    export let ignoreRepsFields = false;

    const exerciseColWithClass = ignoreRepsFields ? "flex-grow" : "w-7/12";

    const addCircuitExercise = () => {
        exercises = [...exercises, new CircuitExercise()];
    };

    const removeCircuitExercise = (index: number) => {
        exercises = exercises.filter((ex, i) => index !== i);
    };
</script>

<div>
    <div class="flex w-full mb-3 h-8">
        <div class="mr-4 {exerciseColWithClass}"> 
            CircuitExercise
        </div>
        {#if !ignoreRepsFields}
            <div class="mr-4 flex-grow">Reps</div>
        {/if}
        <div class="w-8">
            <button
                class="w-full h-full bg-indigo-700 text-white text-sm"
                on:click={addCircuitExercise}>+</button
            >
        </div>
    </div>
    {#each exercises as exercise, i}
        <div class="flex w-full mb-6 h-8">
            <div class="mr-4 {exerciseColWithClass}">
                <input
                    type="text"
                    class="w-full py-1 px-2"
                    bind:value={exercises[i].name}
                />
            </div>
            {#if !ignoreRepsFields}
                <div class="mr-4 flex-grow">
                    <input
                        type="text"
                        class="w-full py-1 px-2"
                        bind:value={exercises[i].reps}
                    />
                </div>
            {/if}
            <div class="w-8">
                <button
                    class="w-full h-full bg-gray-500 text-white text-sm"
                    on:click={() => removeCircuitExercise(i)}>x</button
                >
            </div>
        </div>
    {/each}
</div>
