<script setup>
</script>

<template>
  <main>
    <h1>Home</h1>
    <div class="col-md-12">
      <h4>Todas as tarefas</h4>
      <div class="row">
        <div class="col-md-3 mt-3 mb-3" v-for="(task, index) in tasks" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ task.name }} 
                <div v-if="!task.status">
                  <span class="badge text-bg-primary">Aberto</span>
                </div>
                <div v-else>
                  <span class="badge text-bg-dark">Fechado</span>
                </div>
              </h5>
              <a href="#" class="btn btn-success m-1">Concluir</a>
              <a href="#" class="btn btn-primary m-1">Editar</a>
              <button class="btn btn-danger m-1" @click="deleteTask(task.id)">Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <ul class="list-group">
        <li class="list-group-item" v-for="(task, index) in tasks" :key="index">
          {{ task.name }}
        </li>
      </ul> -->
    </div>
  </main>
</template>

<script>
import TaskDataService from '../services/TaskDataService';

export default {
  name: "tasks-list",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    retrieveTasks() {
      TaskDataService.getAll()
      .then(response => {
        this.tasks = response.data.data;
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
    },
    deleteTask(task) {
      TaskDataService.delete(task)
      .then(response => {
        console.log(response.data)
        this.retrieveTasks()
      })
      .catch(e => {
        console.log(e)
      });
    },
  },
  mounted() {
    this.retrieveTasks();
  }
}
</script>
