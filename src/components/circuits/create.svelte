<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type Circuit from "../../domain/circuit/circuit";
    import Amrap from "./types/Amrap.svelte";
    import Emom from "./types/Emom.svelte";
    import ForTime from "./types/ForTime.svelte";
    import Intervals from "./types/Intervals.svelte";

    const dispatch = createEventDispatcher();

    let currentFormComponent;
    let circuit: Circuit;

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

    const loadComponent = (component) => {
        circuit = undefined;
        currentFormComponent = component;
    };

    const save = () => {
        dispatch("circuitCreated", {
            circuit: circuit,
        });
    };
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
    <svelte:component this={currentFormComponent} bind:circuit />
{/if}

<button class="button-new" on:click={save}>Save</button>
