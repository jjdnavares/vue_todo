<template>
  <div class="m-5">
    <Button :variant="'solid'" size="xl" @click="showNewToDoDialog = true">+ New ToDo</Button>
    
    <h2 class="text-2xl font-bold my-3">My ToDo List</h2>

    <div v-if="todoList.data">  
      <ListView :options="{
        selectable: false,
        resizeColumn: true,
        emptyState: {
          title: 'No ToDos found',
          description: 'Add a new ToDo to get started',
          button: {
            label: 'New ToDo',
            variant: 'solid',
            onClick: () => {
              console.log('New ToDo')
            }
          }
        },
      }"
      
      :columns="[
        {
          label: 'Description',
          key: 'description'
        },
        {
          label: 'Priority',
          key: 'priority'
        }
      ]"

      :rows="todoList.data"
      />

      <Dialog v-model="showNewToDoDialog" :options="{
        title: 'New ToDo',
        message: 'Add a new ToDo',
        actions: [
          {
            label: 'Add',
            variant: 'solid',
            onClick: addNewToDo
          }
        ]
      }">
      <template #body-content>
        <FormControl
          :type="'textarea'"
          size="sm"
          variant="subtle"
          placeholder="Enter ToDo description"
          label="Description"
          v-model="todoDescription"
        />
        <ErrorMessage :message="todoList.insert.error" />
      </template>
    </Dialog>
    </div>
    
  </div>
  
  <!-- <div class="m-5">
    <Button :loading="todoList.list.loading" @click="todoList.fetch()" :variant="'outline'" theme="blue" size="xl">Show todos</Button>
    <!-- <LoadingText v-if="todoList.list.loading">Loading todos...</LoadingText> --
  </div>
  <div class="m-5">
    <Button @click="showDialog = true; showConfetti()" :variant="'outline'" theme="green" size="xl">
      Show Dialog Vue
    </Button>

    <Dialog v-model="showDialog" :options="{
      title: 'Awesome Dialog',
      message: 'This is an awesome dialog',
      size: 'xl',
    }"></Dialog>
  </div>

  <div class="m-5">
    <div v-if="todoList.data">
      <h2 class="text-2xl font-bold my-3">My Todo List</h2>
     <!-- {{ JSON.stringify(todoList.data) }} --
      <ul class="space-y-1 divide-y-2">
      <li v-for="todo in todoList.data">
        <div v-html="todo.description"></div>
      </li> 
      </ul>
    </div>
  </div> -->
  <!-- <div class="m-5">
    <pre>{{ JSON.stringify(todoList, null, 2) }}</pre>
  </div> -->
</template>

<script setup>
import { ref } from 'vue';
import { Button, Dialog, LoadingText, createListResource,
  ListView, FormControl, ErrorMessage } from 'frappe-ui';
import confetti from 'canvas-confetti';

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

const todoDescription = ref('');
const showNewToDoDialog = ref(false);

const todoList = createListResource({
  doctype: "ToDo",
  fields: ["name", "description", "priority"],
  // filters: {
  //   status: "Open" 
  // },
  auto: true,
  insert: {
    onSuccess() {
      showConfetti()
      showNewToDoDialog.value = false;
      todoDescription.value = '';
    }
  }
})

// todoList.fetch()

const isLoading = ref(false);

function addNewToDo() {
  todoList.insert.submit({
    description: todoDescription.value
  })
}

function fetchTodo() {
  isLoading.value = true;
  fetch("/api/resource/ToDo")
    .then(d => d.json())
    .then(r => {
      isLoading.value = false;
      console.log(r)
    })
    .catch(err => {
      console.error(err)
    });
}

const showDialog = ref(false);
</script>