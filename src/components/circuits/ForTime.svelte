<script lang="ts">
    import Exercise from "../../domain/exercise";
    import ExerciseFormList from "../exercises/ExerciseFormList.svelte";

    let exercises = [new Exercise()];
</script>

<div class="mb-6">
    <span>Rounds</span>
    <input class="w-full py-1 px-2" type="text" />
</div>

<ExerciseFormList bind:exercises />
