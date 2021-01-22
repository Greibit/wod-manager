<script lang="ts">
    import Amrap from "./components/circuits/Amrap.svelte";
    import Emom from "./components/circuits/Emom.svelte";
    import ForTime from "./components/circuits/ForTime.svelte";
    import Intervals from "./components/circuits/Intervals.svelte";
import NavBar from "./NavBar.svelte";

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


<NavBar/>
<main class="mt-10">
    <div class="container mx-auto">
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
    </div>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .button-new {
        @apply px-8 py-2 bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg;
    }
</style>
