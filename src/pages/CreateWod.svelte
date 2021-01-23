<script lang="ts">
    import CreateCircuitForm from "../components/circuits/create.svelte";
    import type Circuit from "../domain/circuit/circuit";

    let circuits: Circuit[] = [];
    let creatingCircuit = false;

    const showCircuitForm = () => (creatingCircuit = true);

    const addCircuit = (event: CustomEvent) => {
        circuits = [...circuits, event.detail.circuit];
        creatingCircuit = false;
    };
</script>

<h1 class="text-4xl">Create WOD</h1>

<h3 class="text-2xl">Circuits</h3>
{#if circuits.length > 0}
    {#each circuits as circuit}
        {circuit.toString()}
    {/each}
{:else}
    No circuits created yet
{/if}
<button class="button-new" on:click={showCircuitForm}>Add Circuit</button>

{#if true === creatingCircuit}
    <CreateCircuitForm on:circuitCreated={addCircuit} />
{/if}
