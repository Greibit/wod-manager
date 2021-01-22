<script lang="ts">
    import Amrap from "./../components/circuits/Amrap.svelte";
    import Emom from "./../components/circuits/Emom.svelte";
    import ForTime from "./../components/circuits/ForTime.svelte";
    import Intervals from "./../components/circuits/Intervals.svelte";

    let currentFormComponent;

    const circuitTypes = [
        {
            name: "AMRAP",
            componentEl: Amrap,
        },
        {
            name: "EMOM",
            componentEl: Emom,
        },
        {
            name: "FOR TIME",
            componentEl: ForTime,
        },
        {
            name: "INTERVALS",
            componentEl: Intervals,
        },
    ];

    function loadComponent(component) {
        currentFormComponent = component;
    }
</script>

<div class="flex justify-between">
    {#each circuitTypes as circuitType}
        <div
            on:click={() => loadComponent(circuitType.componentEl)}
            class="button-new"
        >
            {circuitType.name}
        </div>
    {/each}
</div>
{#if currentFormComponent}
    <svelte:component this={currentFormComponent} />
{/if}
