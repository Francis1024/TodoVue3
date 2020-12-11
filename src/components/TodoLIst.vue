<!--
 * @Author: 左太宇
 * @Date: 2020-12-11 12:08:21
 * @LastEditTime: 2020-12-11 15:33:14
 * @LastEditors: 左太宇
 * @message: 
-->
<template>
  <div class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo-item="todo"  @change-state="todo.completed = $event.target.checked"/>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: ["todos"],
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>