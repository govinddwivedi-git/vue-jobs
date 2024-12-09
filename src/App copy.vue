<template>
  <h1>{{ name }} IS LEARNING THE VUE.js </h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks :</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">CLick for Gooogle</a> -->
  <a :href="link">CLick for Google</a>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>


<style scoped>
  h1 {
    color: red;
  }
</style>@


<script>
  export default {
    data() {
      return {
        name : 'Govind',
        status : "pending",
        tasks : ['task1', 'task2', 'task3'],
        link : 'https://www.google.com'
      }
    },
    methods: {
      toggleStatus() {
        this.status = this.status === 'active' ? 'inactive' : 'active';
      }
    }
  }
</script>



<!-- Composition API code -->
<script setup>
import { ref, onMounted } from "vue";

const name = ref("Sandeep");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const link = "https://www.google.com";
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

const toggleStatus = () => {
  status.value === "active"
    ? (status.value = "inactive")
    : (status.value = "active");
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log(error);
  }

})

</script>

<template>
  <h1>{{ name }} IS LEARNING THE VUE.js</h1>
  <br />
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks :</h3>
  <ul>
    <li v-for="(task, index) in tasks" :keyī="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>

  <!-- <a v-bind:href="link">CLick for Gooogle</a> -->
  <a :href="link">CLick for Google</a>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>



<style scoped>
h1 {
  color: red;
}
</style>



<!-- 
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const name = ref('Sandeep');
      const status = ref('active');
      const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
      const link = 'https://www.google.com';

      const toggleStatus = () => {
        status.value === 'active' ? status.value = 'inactive' : status.value = 'active';
      }

      return { name, status, tasks, link, toggleStatus };
    }
  }
</script> -->
