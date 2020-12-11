/*
 * @Author: 左太宇
 * @Date: 2020-12-11 15:09:23
 * @LastEditTime: 2020-12-11 15:21:15
 * @LastEditors: 左太宇
 * @message:
 */
import { computed, ref } from "vue";

export default function useFilteredTodos(todos) {
  const filter = ref("all");

  // 过滤todo
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });

  return { filter, filteredTodos };
}
