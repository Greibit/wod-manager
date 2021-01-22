<script>
    import { Route } from "svelte-router-spa";
    import NavBar from "./NavBar.svelte";

    export let currentRoute;
</script>

<NavBar />
<main class="mt-10">
    <div class="container mx-auto">
        <Route {currentRoute} />
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