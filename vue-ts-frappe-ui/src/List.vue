<template>
    <div v-if="data">
        <ul>
            <Item v-for="item in data" :name="item.full_name" :image="item.image" />
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Item from './Item.vue';

const data = ref(null);

const OFFICE_API = "/api/method/get-office";

onMounted(() => {
    fetch(OFFICE_API).then((d) => d.json())
        .then((message) => {
            data.value = message.data;
        })
});
</script>

<style scoped></style>