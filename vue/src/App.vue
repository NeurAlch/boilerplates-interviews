<template>
    <div id="app">
        <div class="container mx-auto">
            <Hello />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Hello from "./Hello.vue";

    export default Vue.extend({
        name: "App",
        components: {
            Hello,
        }
    });
</script>