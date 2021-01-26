<script lang="ts">
    import Amrap from "../../../domain/circuit/amrap";
    import ExerciseFormList from "../../exercises/ExerciseFormList.svelte";
    import TimeField from "../../layout/TimeField.svelte";

    export let circuit = new Amrap();
</script>

<div class="mb-6">
    <span>Total Time</span>
    <TimeField bind:value={circuit.totalTime} />
</div>

<ExerciseFormList bind:exercises={circuit.exercises} />
