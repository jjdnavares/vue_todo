<template>
  <header>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  </header>

  <input v-model="myValue" type="text">
  <input v-model="document" type="text">

  <List />

  <!-- <div>
    !-- <pre>{{ JSON.stringify(data, null, 2) }}</pre> --
    <ul>
      <li v-for="item in data">
        <strong>{{ item.full_name }}</strong>
        !-- v-bind:src -- Full reference for v-bind --
         !-- : shorthand reference for v-bind --
        <img style="height: 100px; display: block; padding-bottom: 20px; padding-top: 10px;" v-bind:src="item.image" alt="image" />
      </li>
    </ul>
  </div> -->
</template>

<script setup>
import { ref, watch } from 'vue';
import List from './List.vue';

const myValue = ref('DocType');
const document = ref('Document');

watch(myValue, (newValue, oldValue) => {
  console.log("myValue changed from", oldValue, "to", newValue);
});
</script>