<script lang="ts">
    import ForTime from "../../../domain/circuit/for-time";
    import ExerciseFormList from "../../exercises/ExerciseFormList.svelte";

    export let circuit = new ForTime();
</script>

<div class="mb-6">
    <span>Rounds</span>
    <input class="w-full py-1 px-2" type="text" bind:value={circuit.rounds} />
</div>

<ExerciseFormList bind:exercises={circuit.exercises} />
