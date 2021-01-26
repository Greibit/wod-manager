<script>
    export let value;

    const timeString = (seconds) => {
        const mins = ("0" + Math.floor(seconds / 60)).slice(-2);
        const secs = ("0" + (seconds % 60)).slice(-2);

        return `${mins}:${secs} minutes`;
    };

    const options = [];
    for (let i = 5; i < 60; i += 5) {
        options.push({ value: i, label: i + " seconds" });
    }

    for (let i = 60; i < 180; i += 15) {
        options.push({ value: i, label: timeString(i) });
    }

    for (let i = 180; i < 300; i += 30) {
        options.push({ value: i, label: timeString(i) });
    }

    for (let i = 300; i <= 3600; i += 60) {
        options.push({ value: i, label: timeString(i) });
    }
</script>

<select bind:value class="w-full py-1 px-2">
    {#each options as option}
        <option value={option.value}>{option.label}</option>
    {/each}
</select>
