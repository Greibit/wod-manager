<script lang="ts">
    import Intervals from "../../../domain/circuit/intervals";
    import ExerciseFormList from "../../exercises/ExerciseFormList.svelte";
    import TimeField from "../../layout/TimeField.svelte";

    export let circuit = new Intervals();
</script>

<div class="grid grid-cols-2 mb-6">
    <div class="pr-4">
        <span>Rounds</span>
        <input
            class="w-full py-1 px-2"
            type="text"
            bind:value={circuit.rounds}
        />
    </div>
    <div>
        <span>Rest between rounds</span>
        <TimeField bind:value={circuit.restBetweenRounds} />
    </div>
    <div class="pr-4">
        <span>Work time</span>
        <TimeField bind:value={circuit.workTime} />
    </div>
    <div>
        <span>Rest time</span>
        <TimeField bind:value={circuit.restTime} />
    </div>
</div>

<ExerciseFormList bind:exercises={circuit.exercises} ignoreRepsFields={true} />
