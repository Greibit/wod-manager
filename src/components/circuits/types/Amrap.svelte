<script lang="ts">
    import Amrap from "../../../domain/circuit/amrap";
    import ExerciseFormList from "../../exercises/ExerciseFormList.svelte";

    export let circuit = new Amrap();
</script>

<div class="mb-6">
    <span>Total Time</span>
    <input
        class="w-full py-1 px-2"
        type="text"
        bind:value={circuit.totalTime}
    />
</div>

<ExerciseFormList bind:exercises={circuit.exercises} />
