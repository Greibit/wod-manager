<script lang="ts">
    import Exercise from "../../domain/exercise";
    import ExerciseFormList from "../exercises/ExerciseFormList.svelte";

    let exercises = [new Exercise()];
</script>

<div class="grid grid-cols-2 mb-6">
    <div class="pr-4">
        <span>Rounds</span>
        <input class="w-full py-1 px-2" type="text" />
    </div>
    <div>
        <span>Rest between rounds</span>
        <input class="w-full py-1 px-2" type="text" />
    </div>
</div>

<ExerciseFormList bind:exercises />
