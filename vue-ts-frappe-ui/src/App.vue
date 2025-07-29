<template>
  <div class="m-3">
    <Button
      @click="showDialog = true; showConfetti()"
      :variant="'outline'"
      theme="green"
      size="xl"
    >
      Show Dialog
    </Button>

    <Dialog v-model="showDialog" :options="{
       title: 'Awesome Dialog',
       message: 'This is an awesome dialog',
       size: 'xl',
       }"></Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button, Dialog } from 'frappe-ui';
import confetti from 'canvas-confetti';

const showDialog = ref(false);

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
</script>