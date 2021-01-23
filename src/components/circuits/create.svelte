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

<div class="bg-white mt-6 shadow">
    <div class="py-2 border-b border-gray-300 px-6 mb-3">
        <div class="text-2xl flex-grow" style="line-height: 42px;">
            Create circuit
        </div>
    </div>
    <div class="flex justify-between p-6">
        {#each circuitTypes as circuitType}
            <div
                on:click={() => loadComponent(circuitType.componentEl)}
                class="button-new"
            >
                {circuitType.name}
            </div>
        {/each}
    </div>
    <div class="px-6 pb-6">
        {#if currentFormComponent}
            <svelte:component this={currentFormComponent} bind:circuit />

            <div class="text-right">
                <button class="button-new" on:click={save}>Save</button>
            </div>
        {/if}
    </div>
</div>
