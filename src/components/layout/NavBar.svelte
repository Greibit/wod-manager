<script>
    import { navigateTo } from "svelte-router-spa";
</script>

<nav class="relative select-none bg-gray-400 lg:flex lg:items-stretch w-full">
    <div class="flex flex-no-shrink items-stretch h-12">
        <a
            href={`/`}
            class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white text-xl no-underline flex items-center hover:bg-gray-700"
            >WOOD Manager</a
        >
        <a
            href={`/wood/create`}
            class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700"
            >Create WOD</a
        >
    </div>
</nav>
