<template>
    <li>
        <h2>{{ props.name }}</h2>
        <img class="office-image" :src="props.image" alt="image" />
    </li>
</template>

<script setup>
const props = defineProps({
    name: String,
    image: String,
});
</script>

<style scoped>
.office-image {
    height: 100px;
    display: block;
    padding-bottom: 20px;
    padding-top: 10px;
}
</style>