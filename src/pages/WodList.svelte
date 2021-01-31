<script lang="ts">
    import type Wod from "../domain/wod/wod";

    import WodRepository from "../storage/wod/wod-repository-provider";

    let wods: Wod[] = [];

    WodRepository.findAll().then((wodsList) => {
        console.log(wodsList);
        wods = wodsList;
    });
</script>

<div class="flex">
    <h1 class="text-4xl flex-grow">WOD List</h1>
    <a class="button-save" href={`/wod/create`}>Create</a>
</div>

<div class="bg-white mt-6 shadow">
    <div>
        {#each wods as wod}
            <div class="border-b border-gray-200 p-6">
                {wod.toString()}
            </div>
        {:else}
            <div class="border-b border-gray-200 p-6">No WODs created yet</div>
        {/each}
    </div>
</div>
