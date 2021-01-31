<script lang="ts">
    import CreateCircuitForm from "../components/circuits/create.svelte";
    import WodRepository from "../storage/wod/wod-repository-provider";
    import type Circuit from "../domain/circuit/circuit";
    import { navigateTo } from "svelte-router-spa";
    import Wod from "../domain/wod/wod";

    const wod = new Wod();
    let circuits: Circuit[] = [];
    let creatingCircuit = false;

    const showCircuitForm = () => (creatingCircuit = true);

    const addCircuit = (event: CustomEvent) => {
        wod.circuits = [...wod.circuits, event.detail.circuit];
        creatingCircuit = false;
    };

    const saveWod = () =>
        WodRepository.save(wod).then(() => navigateTo(`/wod/list`));
</script>

<div class="flex">
    <h1 class="text-4xl flex-grow">Create WOD</h1>
    <button class="button-save" on:click={saveWod}>Save</button>
</div>

<div class="bg-white mt-6 shadow">
    <div class="py-2 flex border-b border-gray-300 px-6 mb-3">
        <div class="text-2xl flex-grow" style="line-height: 42px;">
            Circuits
        </div>
        <div>
            <button class="button-new" on:click={showCircuitForm}>Add</button>
        </div>
    </div>
    <div>
        {#each wod.circuits as circuit}
            <div class="border-b border-gray-200 p-6">
                {circuit.toString()}
            </div>
        {:else}
            <div class="border-b border-gray-200 p-6">
                No circuits created yet
            </div>
        {/each}
    </div>
</div>

{#if true === creatingCircuit}
    <CreateCircuitForm on:circuitCreated={addCircuit} />
{/if}
