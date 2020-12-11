<!--
 * @Author: 左太宇
 * @Date: 2020-11-07 16:27:30
 * @LastEditTime: 2020-12-11 15:34:16
 * @LastEditors: 左太宇
 * @message: 
-->
<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Dong 代办事项!</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo" />
      <TodoFilter :selected="filter" @change-filter="filter = $event" />
      <TodoLIst :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
import TodoAdd from "@/components/TodoAdd.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoLIst from "@/components/TodoLIst.vue";
import useTodos from "@/composables/useTodos.js";
import useFilteredTodos from "@/composables/useFilteredTodos.js";
export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoLIst,
  },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilteredTodos(todos);
    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: #cbd2f0;
}
.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgb(203, 210, 240);
}
/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
